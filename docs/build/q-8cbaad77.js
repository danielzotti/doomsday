import{_ as I,l as F,s as $,Q as rt,a as at,u as st,E as it,U as lt,N as T,b as ct,I as j,Y as v,C as ut,h as dt,c as V,j as _t,p as mt}from"./q-ebdde0da.js";import{t as pt,j as G,k as N,r as K,l as Z,m as tt,n as Q,o as vt,p as ft,q as yt,s as L,v as w,w as ht,x as St,y as Ct,c as Et,C as bt,d as wt,D as qt,R as gt,e as Rt,f as Lt,h as It,i as Pt}from"./q-32a0b9bd.js";const Dt=":root{view-transition-name:none}";const At=()=>I(()=>import("./q-ba124824.js"),["build/q-ba124824.js","build/q-ebdde0da.js"]),W=[[/^\/$/,[At,()=>I(()=>import("./q-2fce573e.js"),["build/q-2fce573e.js","build/q-ebdde0da.js"])]]],z=[];const J=!0;const kt=async(f,n)=>{const[y,S,s,C]=F(),{type:i="link",forceReload:_=f===void 0,replaceState:m=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=s.value.dest,o=f===void 0?l:pt(f,C.url);if(!G(o,l)){location.href=o.href;return}if(!_&&N(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),K(i,o,new URL(location.href),Z()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return s.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:E},tt(o,$()),Q(W,z,J,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(b=>{S.r=b})},Tt=({track:f})=>{const[n,y,S,s,C,i,_,m,E,l,o]=F();async function b(){var Y;const[u,q]=f(()=>[l.value,n.value]),et=rt(""),P=o.url,p=q?"form":u.type,ot=u.replaceState;let r,g,U=null,x;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let D=Q(W,z,J,r.pathname);x=$();const A=g=await tt(r,x,!0,q);if(!A){l.untrackedValue={type:p,dest:r};return}const H=A.href,h=new URL(H,r);vt(h,r)||(r=h,D=Q(W,z,J,r.pathname)),U=await D}if(U){const[D,A,H]=U,h=A,nt=h[h.length-1];o.prevUrl=P,o.url=r,o.params={...D},l.untrackedValue={type:p,dest:r};const R=ft(g,o,h,et);y.headings=nt.headings,y.menu=H,S.value=at(h),s.links=R.links,s.meta=R.meta,s.styles=R.styles,s.title=R.title,s.frontmatter=R.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let B;p==="popstate"&&(B=Z()),u.scroll&&(!u.forceReload||!N(r,P))&&(p==="link"||p==="popstate")&&(document.__q_scroll_restore__=()=>K(p,r,P,B));const X=g==null?void 0:g.loaders,t=window;if(X&&Object.assign(_,X),yt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const a=history.pushState,d=history.replaceState,k=e=>(e===null?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||w(document.documentElement),e);history.pushState=(e,c,O)=>(e=k(e),a.call(history,e,c,O)),history.replaceState=(e,c,O)=>(e=k(e),d.call(history,e,c,O))}document.body.addEventListener("click",a=>{if(a.defaultPrevented)return;const d=a.target.closest("a[href]");if(d&&!d.hasAttribute("preventdefault:click")){const k=d.getAttribute("href"),e=new URL(location.href),c=new URL(k,e);if(G(c,e)&&N(c,e)){if(a.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),L({...w(document.documentElement),x:0,y:0}),location.reload();return}i(d.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const a=w(document.documentElement);L(a)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const a=w(document.documentElement);L(a),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(Y=t._qCityBootstrap)==null||Y.remove(),t._qCityBootstrap=void 0,ht.resolve()}if(p!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const a=w(document.documentElement);L(a)}St(window,p,P,r,ot),st(x).then(()=>{var d;const a=w(document.documentElement);L(a),t._qCityScrollEnabled=!0,o.isNavigating=!1,(d=m.r)==null||d.call(m)})}}}b()},Ut=f=>{it(V(()=>I(()=>Promise.resolve().then(()=>M),void 0),"s_RPDJAz33WLA"));const n=Ct();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=lt("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),s=T({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=ct(T(n.response.loaders,{deep:!1})),_=j({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),m=T(Et),E=T({headings:void 0,menu:void 0}),l=j(),o=n.response.action,b=o?n.response.loaders[o]:void 0,u=j(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),q=V(()=>I(()=>Promise.resolve().then(()=>M),void 0),"s_fX0bDjeJa0E",[u,C,_,s]);return v(bt,E),v(wt,l),v(qt,m),v(gt,s),v(Rt,q),v(Lt,i),v(It,u),v(Pt,_),ut(V(()=>I(()=>Promise.resolve().then(()=>M),void 0),"s_02wMImzEAbk",[u,E,l,m,n,q,i,C,f,_,s])),dt(_t,null,3,"qY_0")},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:mt,s_02wMImzEAbk:Tt,s_RPDJAz33WLA:Dt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:kt},Symbol.toStringTag,{value:"Module"}));export{mt as _hW,Tt as s_02wMImzEAbk,Dt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,kt as s_fX0bDjeJa0E};
