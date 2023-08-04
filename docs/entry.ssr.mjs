import{j as w,_ as we,a as je,F as M,s as xe,c as Y,i as R,b as k,d as de,e as ke,u as W,f as J,g as C,S as Ce,h as Se,k as F,l as Ee,m as $,n as E,o as Re,p as Ae,q as Ne,r as me,t as A,v as Ie,w as pe,x as Te,y as le,z as Le,A as B}from"./docs/@qwik-city-plan-ab51a556.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.6
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var De=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});function ze(t,e){const n=e==null?void 0:e.mapper,s=t.symbolMapper?t.symbolMapper:i=>{var c;if(n){const r=V(i),a=n[r];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return a}};return{isServer:!0,async importSymbol(i,c,r){var b;const a=V(r),d=(b=globalThis.__qwik_reg_symbols)==null?void 0:b.get(a);if(d)return d;let u=String(c);u.endsWith(".js")||(u+=".js");const p=De(u);if(!(r in p))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${u}'.`);return p[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(c=>{setTimeout(()=>{c(i())})}),chunkForSymbol(i){return s(i,n)}}}async function Pe(t,e){const n=ze(t,e);xe(n)}var V=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function K(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function fe(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Fe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Me=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,Ye=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Oe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function Ue(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?Oe:Ye).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Me:Fe}function $e(t,e,n){if(!n)return[];const s=e.prefetchStrategy,o=fe(e);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return Be(t,n,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function Be(t,e,n){const s=[],o=t==null?void 0:t.qrls,{mapper:i,manifest:c}=e,r=new Map;if(Array.isArray(o))for(const a of o){const d=a.getHash(),u=i[d];u&&_e(c,r,s,n,u[1])}return s}function _e(t,e,n,s,o){const i=s+o;let c=e.get(i);if(!c){c={url:i,imports:[]},e.set(i,c);const r=t.bundles[o];if(r&&Array.isArray(r.imports))for(const a of r.imports)_e(t,e,c.imports,s,a)}n.push(c)}function Ke(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function H(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Qe(t){const e={bundles:O(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function O(t){const e=[],n=s=>{if(Array.isArray(s))for(const o of s)e.includes(o.url)||(e.push(o.url),n(o.imports))};return n(t),e}function Ve(t){const e=new Map;let n=0;const s=(r,a)=>{if(Array.isArray(r))for(const d of r){const u=e.get(d.url)||0;e.set(d.url,u+1),n++,a.has(d.url)||(a.add(d.url),s(d.imports,a))}},o=new Set;for(const r of t)o.clear(),s(r.imports,o);const i=n/e.size*2,c=Array.from(e.entries());return c.sort((r,a)=>a[1]-r[1]),c.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function He(t,e,n){const s=Ze(t==null?void 0:t.implementation),o=[];return s.prefetchEvent==="always"&&We(o,e,n),s.linkInsert==="html-append"&&Je(o,e,s),s.linkInsert==="js-append"?Xe(o,e,s,n):s.workerFetchInsert==="always"&&Ge(o,e,n),o.length>0?w(M,{children:o}):null}function We(t,e,n){const s=Ve(e);for(const o of s)t.push(w("link",{rel:"modulepreload",href:o,nonce:n}));t.push(w("script",{dangerouslySetInnerHTML:Qe(e),nonce:n}))}function Je(t,e,n){const s=O(e),o=n.linkRel||"prefetch";for(const i of s){const c={};c.href=i,c.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(c.as="script"),t.push(w("link",c,void 0))}}function Xe(t,e,n,s){const o=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(O(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=H(),i+="}"),n.workerFetchInsert==="always"&&(i+=H()),t.push(w("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Ge(t,e,n){let s=`const u=${JSON.stringify(O(e))};`;s+=H(),t.push(w("script",{type:"module",dangerouslySetInnerHTML:s,nonce:n}))}function Ze(t){return t&&typeof t=="object"?t:et}var et={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},tt="<!DOCTYPE html>";async function nt(t,e){var P;let n=e.stream,s=0,o=0,i=0,c=0,r="",a;const d=((P=e.streaming)==null?void 0:P.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",p=e.containerAttributes??{},b=n,S=K(),q=fe(e),y=st(e.manifest);function m(){r&&(b.write(r),r="",s=0,i++,i===1&&(c=S()))}function h(_){const j=_.length;s+=j,o+=j,r+=_}switch(d.strategy){case"disabled":n={write:h};break;case"direct":n=b;break;case"auto":let _=0,j=!1;const X=d.maximunChunk??0,U=d.maximunInitialChunk??0;n={write(D){D==="<!--qkssr-f-->"?j||(j=!0):D==="<!--qkssr-pu-->"?_++:D==="<!--qkssr-po-->"?_--:h(D),_===0&&(j||s>=(i===0?U:X))&&(j=!1,m())}};break}u==="html"?n.write(tt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Pe(e,y);const v=y==null?void 0:y.manifest.injections,l=v?v.map(_=>w(_.tag,_.attributes??{})):void 0,f=K(),g=[];let I=0,T=0;await we(t,{stream:n,containerTagName:u,containerAttributes:p,serverData:e.serverData,base:q,beforeContent:l,beforeClose:async(_,j,X,U)=>{var te,ne,se,oe,ie,re,ae;I=f();const D=K();a=await je(_,j,void 0,U);const N=[];if(e.prefetchStrategy!==null){const x=$e(a,e,y);if(x.length>0){const ce=He(e.prefetchStrategy,x,(te=e.serverData)==null?void 0:te.nonce);ce&&N.push(ce)}}const qe=JSON.stringify(a.state,void 0,void 0);N.push(w("script",{type:"qwik/json",dangerouslySetInnerHTML:ot(qe),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),a.funcs.length>0&&N.push(w("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:rt(a.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const ge=!a||a.mode!=="static",G=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",Z=G==="always"||G==="auto"&&ge;if(Z){const x=Ue({events:(ie=e.qwikLoader)==null?void 0:ie.events,debug:e.debug});N.push(w("script",{id:"qwikloader",dangerouslySetInnerHTML:x,nonce:(re=e.serverData)==null?void 0:re.nonce}))}const ee=Array.from(j.$events$,x=>JSON.stringify(x));if(ee.length>0){let x=`window.qwikevents.push(${ee.join(", ")})`;Z||(x=`window.qwikevents||=[];${x}`),N.push(w("script",{dangerouslySetInnerHTML:x,nonce:(ae=e.serverData)==null?void 0:ae.nonce}))}return it(g,_),T=D(),w(M,{children:N})},manifestHash:(y==null?void 0:y.manifest.manifestHash)||"dev"}),u!=="html"&&n.write("<!--/cq-->"),m();const L=a.resources.some(_=>_._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:i,manifest:y==null?void 0:y.manifest,size:o,isStatic:!L,timing:{render:I,snapshot:T,firstFlush:c},_symbols:g}}function st(t){if(t){if("mapper"in t)return t;if(t=Ke(t),t){const e={};return Object.entries(t.mapping).forEach(([n,s])=>{e[V(n)]=[n,s]}),{mapper:e,manifest:t}}}}var ot=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function it(t,e){var n;for(const s of e){const o=(n=s.$componentQrl$)==null?void 0:n.getSymbol();o&&!t.includes(o)&&t.push(o)}}function rt(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const at={manifestHash:"hbeq5c",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[22140,30908]},s_PWHc2RKnCUU:{origin:"routes/index.tsx",displayName:"routes_component_useVisibleTask",canonicalFilename:"s_pwhc2rkncuu",hash:"PWHc2RKnCUU",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[1661,2082]},s_RRsC3VRREDw:{origin:"routes/index.tsx",displayName:"routes_component_useVisibleTask_2",canonicalFilename:"s_rrsc3vrredw",hash:"RRsC3VRREDw",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[2329,2574]},s_TBHYDzr0tPA:{origin:"routes/index.tsx",displayName:"routes_component_useVisibleTask_1",canonicalFilename:"s_tbhydzr0tpa",hash:"TBHYDzr0tPA",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[2106,2305]},s_2R62juR5iMc:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_2r62jur5imc",hash:"2R62juR5iMc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[32708,34334]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[44292,45643]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[18870,31195]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[31326,32589]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7908,8622]},s_fpcM0AL7BDU:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_fpcm0al7bdu",hash:"fpcM0AL7BDU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[269,794]},s_jTDKweot1BA:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_jtdkweot1ba",hash:"jTDKweot1BA",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[589,617]},s_jYj3hipCn7Y:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_jyj3hipcn7y",hash:"jYj3hipCn7Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[399,4771]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[18925,18959]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[35702,37336]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6849]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[40354,42178]},s_04XTlQXtgKM:{origin:"routes/index.tsx",displayName:"routes_component_decrement",canonicalFilename:"s_04xtlqxtgkm",hash:"04XTlQXtgKM",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[880,1123]},s_0VsDc8dAxp8:{origin:"routes/index.tsx",displayName:"routes_component_openDialog",canonicalFilename:"s_0vsdc8daxp8",hash:"0VsDc8dAxp8",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[726,777]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[31727,31788]},s_CxRMAuCYpG0:{origin:"routes/index.tsx",displayName:"routes_component_setInputValue",canonicalFilename:"s_cxrmaucypg0",hash:"CxRMAuCYpG0",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[1155,1320]},s_Nr0qqc0Q0y0:{origin:"routes/index.tsx",displayName:"routes_component_toggleDecrementOnLoad",canonicalFilename:"s_nr0qqc0q0y0",hash:"Nr0qqc0Q0y0",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[1359,1428]},s_RaMU3Ek6ab4:{origin:"routes/index.tsx",displayName:"routes_component_div_dialog_div_fieldset_div_button_onClick",canonicalFilename:"s_ramu3ek6ab4",hash:"RaMU3Ek6ab4",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[3694,3729]},s_VYFm0zDtkmw:{origin:"routes/index.tsx",displayName:"routes_component_div_dialog_div_fieldset_div_input_onInput",canonicalFilename:"s_vyfm0zdtkmw",hash:"VYFm0zDtkmw",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[3203,3310]},s_bhRfktxvgTI:{origin:"routes/index.tsx",displayName:"routes_component_closeDialog",canonicalFilename:"s_bhrfktxvgti",hash:"bhRfktxvgTI",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[806,853]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[33210,33273]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[20209,21528]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[33391,33906]},s_joOjGTTuLT4:{origin:"routes/index.tsx",displayName:"routes_component_reset",canonicalFilename:"s_joojgttult4",hash:"joOjGTTuLT4",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jYj3hipCn7Y",loc:[1452,1637]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[44599,45296]}},mapping:{s_02wMImzEAbk:"q-2f5f2d48.js",s_PWHc2RKnCUU:"q-2cd3e524.js",s_RRsC3VRREDw:"q-2cd3e524.js",s_TBHYDzr0tPA:"q-2cd3e524.js",s_2R62juR5iMc:"q-49835c8f.js",s_8gdLBszqbaM:"q-cd2c2422.js",s_Nk9PlpjQm9Y:"q-9fdcf4a9.js",s_TxCFOy819ag:"q-2f5f2d48.js",s_WmYC5H00wtI:"q-2799c179.js",s_e0ssiDXoeAM:"q-e372df65.js",s_fpcM0AL7BDU:"q-7c04e08f.js",s_jTDKweot1BA:"q-bfe24675.js",s_jYj3hipCn7Y:"q-2cd3e524.js",s_RPDJAz33WLA:"q-2f5f2d48.js",s_A5bZC7WO00A:"q-c24529cd.js",s_DyVc0YBIqQU:"q-61e731e2.js",s_wOIPfiQ04l4:"q-0c43d54c.js",s_04XTlQXtgKM:"q-2cd3e524.js",s_0VsDc8dAxp8:"q-2cd3e524.js",s_BUbtvTyvVRE:"q-2799c179.js",s_CxRMAuCYpG0:"q-2cd3e524.js",s_Nr0qqc0Q0y0:"q-2cd3e524.js",s_RaMU3Ek6ab4:"q-2cd3e524.js",s_VYFm0zDtkmw:"q-2cd3e524.js",s_bhRfktxvgTI:"q-2cd3e524.js",s_eBQ0vFsFKsk:"q-177a5e38.js",s_fX0bDjeJa0E:"q-2f5f2d48.js",s_i1Cv0pYJNR0:"q-cd2c2422.js",s_joOjGTTuLT4:"q-2cd3e524.js",s_p9MSze0ojs4:"q-9fdcf4a9.js"},bundles:{"q-0c43d54c.js":{size:889,imports:["q-16a06c17.js","q-ebdde0da.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-16a06c17.js":{size:5782,imports:["q-ebdde0da.js"],dynamicImports:["q-2f5f2d48.js","q-61e731e2.js","q-e372df65.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-177a5e38.js":{size:128,imports:["q-16a06c17.js","q-ebdde0da.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-2799c179.js":{size:787,imports:["q-16a06c17.js","q-ebdde0da.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-2cd3e524.js":{size:4205,imports:["q-89f9c741.js","q-ebdde0da.js"],origins:["src/entry_routes.js","src/routes/index.module.scss?used","src/s_04xtlqxtgkm.js","src/s_0vsdc8daxp8.js","src/s_bhrfktxvgti.js","src/s_cxrmaucypg0.js","src/s_joojgttult4.js","src/s_jyj3hipcn7y.js","src/s_nr0qqc0q0y0.js","src/s_pwhc2rkncuu.js","src/s_ramu3ek6ab4.js","src/s_rrsc3vrredw.js","src/s_tbhydzr0tpa.js","src/s_vyfm0zdtkmw.js"],symbols:["s_04XTlQXtgKM","s_0VsDc8dAxp8","s_bhRfktxvgTI","s_CxRMAuCYpG0","s_joOjGTTuLT4","s_jYj3hipCn7Y","s_Nr0qqc0Q0y0","s_PWHc2RKnCUU","s_RaMU3Ek6ab4","s_RRsC3VRREDw","s_TBHYDzr0tPA","s_VYFm0zDtkmw"]},"q-2f5f2d48.js":{size:5516,imports:["q-16a06c17.js","q-ebdde0da.js"],dynamicImports:["q-54820542.js","q-89f9c741.js","q-ba124824.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-49835c8f.js":{size:671,imports:["q-16a06c17.js","q-ebdde0da.js"],origins:["src/entry_RouterHead.js","src/s_2r62jur5imc.js"],symbols:["s_2R62juR5iMc"]},"q-54820542.js":{size:125,imports:["q-ebdde0da.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-61e731e2.js":{size:2272,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-7c04e08f.js":{size:543,imports:["q-16a06c17.js","q-ebdde0da.js"],dynamicImports:["q-49835c8f.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_fpcm0al7bdu.js"],symbols:["s_fpcM0AL7BDU"]},"q-89f9c741.js":{size:501,imports:["q-ebdde0da.js"],dynamicImports:["q-2cd3e524.js"],origins:["src/routes/index.tsx"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-9fdcf4a9.js":{size:1027,imports:["q-16a06c17.js","q-ebdde0da.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-ba124824.js":{size:288,imports:["q-ebdde0da.js"],dynamicImports:["q-bfe24675.js"],origins:["src/routes/layout.tsx"]},"q-bfe24675.js":{size:102,imports:["q-ebdde0da.js"],origins:["src/entry_layout.js","src/s_jtdkweot1ba.js"],symbols:["s_jTDKweot1BA"]},"q-c24529cd.js":{size:751,imports:["q-ebdde0da.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-cd2c2422.js":{size:1135,imports:["q-16a06c17.js","q-ebdde0da.js"],dynamicImports:["q-177a5e38.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-dcaf9ae5.js":{size:202,imports:["q-ebdde0da.js"],dynamicImports:["q-7c04e08f.js"],origins:["src/global.scss","src/root.tsx"]},"q-e372df65.js":{size:467,imports:["q-16a06c17.js","q-ebdde0da.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-ebdde0da.js":{size:46810,origins:["node_modules/@builder.io/qwik/core.min.mjs"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-5b47d470.css",dangerouslySetInnerHTML:`._settingsContainer_52kn3_1{position:fixed;bottom:0;left:0}._settingsOpenButton_52kn3_7{font-size:30px;background:none;border:none;cursor:pointer;padding:10px;z-index:100}._settingsDialog_52kn3_16{position:relative;padding:30px}._settingsDialog_52kn3_16::backdrop{background:rgba(0,0,0,.65);opacity:.7}._settingsFieldset_52kn3_25{margin-bottom:30px}._settingsFieldset_52kn3_25>div{justify-content:center;display:flex;margin-bottom:20px;align-items:center}._settingsCloseButton_52kn3_35{font-size:30px;background:none;border:none;cursor:pointer;color:#000;width:auto;position:absolute;top:0;right:0}._buttonContainer_52kn3_47{display:flex;justify-content:center;flex-direction:column;align-items:center;height:100dvh;width:100dvw}._redButton_52kn3_56{background-color:red;color:#fff;display:block;padding:0;position:relative;z-index:1;cursor:pointer;aspect-ratio:1.1;border:2px solid black;outline:none;border-radius:50%;top:0;transition:top .2s ease-in-out,box-shadow .2s ease-in-out,height .2s ease-in-out;font-weight:700;text-align:center;text-shadow:0 .075em 0 black}@media (orientation: landscape){._redButton_52kn3_56{font-size:clamp(100px * .35,60vh * .35,700px * .35);margin-bottom:clamp(4px,2.4vh,28px);height:clamp(100px,60vh,700px);box-shadow:0 clamp(4px,2.4vh,28px) 0 #8b0000}._redButton_52kn3_56:active{top:clamp(2.4px,1.44vh,16.8px);box-shadow:0 clamp(1.6px,.96vh,11.2px) 0 #8b0000}}@media (orientation: portrait){._redButton_52kn3_56{font-size:clamp(100px * .35,60vw * .35,700px * .35);margin-bottom:clamp(4px,2.4vw,28px);height:clamp(100px,60vw,700px);box-shadow:0 clamp(4px,2.4vw,28px) 0 #8b0000}._redButton_52kn3_56:active{top:clamp(2.4px,1.44vw,16.8px);box-shadow:0 clamp(1.6px,.96vw,11.2px) 0 #8b0000}}._doomsday_52kn3_99{position:absolute;top:0;right:0;bottom:0;left:0;background-image:url(/images/doomsday.jpeg);background-size:cover;background-position:center}html,body{margin:0;padding:0;font-family:sans-serif}*{box-sizing:border-box}button{border:1px solid black;color:#fff;width:100%;background-color:#000;text-transform:uppercase;padding:10px 20px}input{width:100%;padding:10px 20px;border:1px solid black}input[type=checkbox]{display:block;height:30px;width:30px;margin-right:10px}label{width:100%}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.6",vite:"",rollup:"3.27.0",env:"node",os:"darwin",node:"18.16.1"}},ct='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',lt=A("qc-s"),ut=A("qc-c"),ye=A("qc-ic"),he=A("qc-h"),be=A("qc-l"),dt=A("qc-n"),mt=A("qc-a"),pt=A("qc-ir"),ft=t=>{const e=window,n=location.pathname+location.search,s="_qCitySPA",o="_qCityHistoryPatch",i="_qCityBootstrap",c="_qCityInitPopstate",r="_qCityInitAnchors",a="_qCityInitVisibility",d="_qCityInitScroll",u="_qCityScrollEnabled",p="_qCityScrollDebounce",b="_qCityScroll",S=m=>{m&&e.scrollTo(m.x,m.y)},q=()=>{const m=document.documentElement;return{x:m.scrollLeft,y:m.scrollTop,w:Math.max(m.scrollWidth,m.clientWidth),h:Math.max(m.scrollHeight,m.clientHeight)}},y=m=>{const h=history.state||{};h[b]=m||q(),history.replaceState(h,"")};if(!e[s]&&!e[c]&&!e[r]&&!e[a]&&!e[d]){if(y(),e[c]=()=>{var m;if(!e[s]){if(e[u]=!1,clearTimeout(e[p]),n!==location.pathname+location.search){const v=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(v){const l=v.closest("[q\\:container]"),f=v.cloneNode();f.setAttribute("q:nbs",""),f.style.display="none",l.appendChild(f),e[i]=f,f.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const h=(m=history.state)==null?void 0:m[b];S(h),e[u]=!0}}},!e[o]){e[o]=!0;const m=history.pushState,h=history.replaceState,v=l=>(l===null?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||q(),l);history.pushState=(l,f,g)=>(l=v(l),m.call(history,l,f,g)),history.replaceState=(l,f,g)=>(l=v(l),h.call(history,l,f,g))}e[r]=m=>{if(e[s]||m.defaultPrevented)return;const h=m.target.closest("a[href]");if(h&&!h.hasAttribute("preventdefault:click")){const v=h.getAttribute("href"),l=new URL(location.href),f=new URL(v,l),g=f.origin===l.origin,I=f.pathname+f.search===l.pathname+l.search;if(g&&I)if(m.preventDefault(),f.href!==l.href&&history.pushState(null,"",f),!f.hash)f.href.endsWith("#")?window.scrollTo(0,0):(e[u]=!1,clearTimeout(e[p]),y({...q(),x:0,y:0}),location.reload());else{const T=f.hash.slice(1),L=document.getElementById(T);L&&L.scrollIntoView()}}},e[a]=()=>{!e[s]&&e[u]&&document.visibilityState==="hidden"&&y()},e[d]=()=>{e[s]||!e[u]||(clearTimeout(e[p]),e[p]=setTimeout(()=>{y(),e[p]=void 0},200))},e[u]=!0,setTimeout(()=>{addEventListener("popstate",e[c]),addEventListener("scroll",e[d],{passive:!0}),document.body.addEventListener("click",e[r]),e.navigation||document.addEventListener("visibilitychange",e[a],{passive:!0})},0)}},_t=R(ft,"s_DyVc0YBIqQU"),yt=()=>{{const[t,e]=Ne().chunkForSymbol(_t.getSymbol(),null),n=Ie+"build/"+e;return`(${ht.toString()})('${n}','${t}');`}},ht=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const s=(n=history.state)==null?void 0:n._qCityScroll;s&&window.scrollTo(s.x,s.y);const o=document.currentScript;(await import(t))[e](o)}},bt=()=>{const t=yt();ke();const e=W("nonce"),n=J(ye);if(n.value&&n.value.length>0){const s=n.value.length;let o=null;for(let i=s-1;i>=0;i--)n.value[i].default&&(o=C(n.value[i].default,{children:o},1,"zl_0"));return C(M,{children:[o,k("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Ce},vt=Y(R(bt,"s_e0ssiDXoeAM")),qt=(t,e,n,s)=>{const o=ve(),c={head:o,withLocale:r=>le(s,r),resolveValue:r=>{const a=r.__id;if(r.__brand==="server_loader"&&!(a in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const d=t.loaders[a];if(d instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return d},...e};for(let r=n.length-1;r>=0;r--){const a=n[r]&&n[r].head;a&&(typeof a=="function"?ue(o,le(s,()=>a(c))):typeof a=="object"&&ue(o,a))}return c.head},ue=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),Q(t.meta,e.meta),Q(t.links,e.links),Q(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},Q=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(o=>o.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},ve=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),gt=(t,e)=>new URL(t,e.href),wt=(t,e)=>t.origin===e.origin,jt=(t,e)=>t.pathname+t.search===e.pathname+e.search,xt=()=>J(he),kt=()=>J(be),Ct=()=>me(W("qwikcity")),St=":root{view-transition-name:none}",Et=async(t,e)=>{const[n,s,o,i]=pe(),{type:c="link",forceReload:r=t===void 0,replaceState:a=!1,scroll:d=!0}=typeof e=="object"?e:{forceReload:e},u=o.value.dest,p=t===void 0?u:gt(t,i.url);if(wt(p,u)&&!(!r&&jt(p,u)))return o.value={type:c,dest:p,forceReload:r,replaceState:a,scroll:d},n.value=void 0,i.isNavigating=!0,new Promise(b=>{s.r=b})},Rt=({track:t})=>{const[e,n,s,o,i,c,r,a,d,u,p]=pe();async function b(){const[q,y]=t(()=>[u.value,e.value]),m=Te(""),h=p.url,v=y?"form":q.type;q.replaceState;let l,f,g=null;if(l=new URL(q.dest,p.url),g=i.loadedRoute,f=i.response,g){const[I,T,L]=g,z=T,P=z[z.length-1];p.prevUrl=h,p.url=l,p.params={...I},u.untrackedValue={type:v,dest:l};const _=qt(f,p,z,m);n.headings=P.headings,n.menu=L,s.value=me(z),o.links=_.links,o.meta=_.meta,o.styles=_.styles,o.title=_.title,o.frontmatter=_.frontmatter}}return b()},At=t=>{Se(R(St,"s_RPDJAz33WLA"));const e=Ct();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=W("url");if(!n)throw new Error("Missing Qwik URL Env Data");const s=new URL(n),o=F({url:s,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),i={},c=Ee(F(e.response.loaders,{deep:!1})),r=$({type:"initial",dest:s,forceReload:!1,replaceState:!1,scroll:!0}),a=F(ve),d=F({headings:void 0,menu:void 0}),u=$(),p=e.response.action,b=p?e.response.loaders[p]:void 0,S=$(b?{id:p,data:e.response.formData,output:{result:b,status:e.response.status}}:void 0),q=R(Et,"s_fX0bDjeJa0E",[S,i,r,o]);return E(ut,d),E(ye,u),E(he,a),E(be,o),E(dt,q),E(lt,c),E(mt,S),E(pt,r),Re(R(Rt,"s_02wMImzEAbk",[S,d,u,a,e,q,c,i,t,r,o])),C(Ae,null,3,"qY_0")},Nt=Y(R(At,"s_TxCFOy819ag")),It=t=>k("script",{nonce:de(t,"nonce")},{dangerouslySetInnerHTML:ct},null,3,"1Z_0"),Tt=()=>{const t=xt(),e=kt();return C(M,{children:[k("title",null,null,t.title,1,null),k("link",null,{href:Le(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),k("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),k("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>B("meta",{...n},null,0,n.key)),t.links.map(n=>B("link",{...n},null,0,n.key)),t.styles.map(n=>B("style",{...n.props,dangerouslySetInnerHTML:de(n,"style")},null,0,n.key))]},1,"Da_0")},Lt=Y(R(Tt,"s_2R62juR5iMc"));const Dt=()=>C(Nt,{children:[k("head",null,null,[k("meta",null,{charSet:"utf-8"},null,3,null),k("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),C(Lt,null,3,"Oe_0")],1,null),k("body",null,{lang:"en"},[C(vt,null,3,"Oe_1"),C(It,null,3,"Oe_2")],1,null)]},1,"Oe_3"),zt=Y(R(Dt,"s_fpcM0AL7BDU"));function Ft(t){return nt(C(zt,null,3,"hN_0"),{manifest:at,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Ft as default};
