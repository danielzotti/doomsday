import{l as _,I as d,i as v,$ as n,w as E,c as s,p as f}from"./q-94eca196.js";import{_auto_LOCAL_STORAGE_AUTODECREMENT_KEY as A,_auto_COUNTER_DEFAULT_VALUE as g,_auto_AUTODECREMENT_DEFAULT_VALUE as C,_auto_LOCAL_STORAGE_COUNTER_KEY as D}from"./q-0d84ca73.js";import{_ as o}from"./q-a7f72f97.js";const I=()=>{const[t]=_();t.value=!t.value},b=()=>{var e;const[t]=_();(e=t.value)==null||e.close()},h=({track:t})=>{const[e]=_();t(()=>e.value),e.value!==void 0&&window.localStorage.setItem(A,String(e.value))},k=()=>{const[t,e,l,i]=_();e.value=g,l.value=!!C,i.value=!1,t()},p=()=>{const[t,e,l]=_(),i=window.localStorage.getItem(D),c=window.localStorage.getItem(A)||C;t.value=i?+i:5,l.value=c==="true",l.value&&e()},V=()=>{const[t]=_();t()},U=t=>{const[e,l]=_();e.value=t!=null&&t.value?t.value:g,l.value=!1},y=()=>{var e;const[t]=_();(e=t.value)==null||e.showModal()},w=()=>{const[t,e]=_();t.value||(t.value=g),t.value--,t.value<=0&&(console.log("It's doomsday!"),e.value=!0)},B="_settingsContainer_52kn3_1",S="_settingsOpenButton_52kn3_7",x="_settingsDialog_52kn3_16",M="_settingsFieldset_52kn3_25",Y="_settingsCloseButton_52kn3_35",F="_buttonContainer_52kn3_47",N="_redButton_52kn3_56",$="_doomsday_52kn3_99",a={settingsContainer:B,settingsOpenButton:S,settingsDialog:x,settingsFieldset:M,settingsCloseButton:Y,buttonContainer:F,redButton:N,doomsday:$},j=()=>{const t=d(),e=d(!1),l=d(),i=d(),c=d(),O=s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_0VsDc8dAxp8",[c]),m=s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_bhRfktxvgTI",[c]),R=s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_04XTlQXtgKM",[t,e]),L=s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_CxRMAuCYpG0",[t,e]),P=s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_Nr0qqc0Q0y0",[l]),T=s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_joOjGTTuLT4",[m,t,l,e]);return v(s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_PWHc2RKnCUU",[t,R,l])),v(s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_TBHYDzr0tPA",[t])),v(s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_RRsC3VRREDw",[l])),n("div",null,{class:a.page},[n("dialog",{ref:c},{class:a.settingsDialog},[n("button",null,{class:a.settingsCloseButton,onClick$:m},"×",3,null),n("div",null,{class:a.settingsContent},[n("h1",null,null,"Settings",3,null),n("fieldset",null,{class:a.settingsFieldset},[n("div",null,null,[n("input",null,{checked:E(r=>r.value,[l]),id:"checkbox-autodecrement",onInput$:s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_VYFm0zDtkmw",[P]),type:"checkbox"},null,3,null),n("label",null,{for:"checkbox-autodecrement"},"autodecrement on start",3,null)],3,null),n("div",null,null,[n("input",{ref:i},{type:"number",value:E(r=>r.value,[t])},null,3,null),n("button",null,{onClick$:s(()=>o(()=>Promise.resolve().then(()=>u),void 0),"s_RaMU3Ek6ab4",[i,L])},"SET",3,null)],1,null)],1,null),n("div",null,{style:"text-align:center;"},["OR",n("br",null,null,null,3,null),n("br",null,null,null,3,null),n("button",null,{onClick$:T},"Restart!",3,null),n("p",null,null,n("small",null,null,"(with default values)",3,null),3,null)],3,null)],1,null)],1,null),n("div",null,{class:a.buttonContainer},[!e.value&&n("div",null,null,n("button",null,{class:a.redButton,onClick$:R},E(r=>r.value,[t]),3,null),3,"I0_0"),e.value&&n("div",null,{class:a.doomsday},n("button",null,{onClick$:T},["Restart ",n("small",null,null,"(with default values)",3,null)],3,null),3,"I0_1")],1,null),n("div",null,{class:a.settingsContainer},n("button",null,{class:a.settingsOpenButton,onClick$:O},"⚙️",3,null),3,null)],1,"I0_2")},G=()=>{const[t,e]=_();return e(t.value)},K=({track:t})=>{const[e]=_();t(()=>e.value),e.value&&window.localStorage.setItem(D,e.value.toString())},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_04XTlQXtgKM:w,s_0VsDc8dAxp8:y,s_CxRMAuCYpG0:U,s_Nr0qqc0Q0y0:I,s_PWHc2RKnCUU:p,s_RRsC3VRREDw:h,s_RaMU3Ek6ab4:G,s_TBHYDzr0tPA:K,s_VYFm0zDtkmw:V,s_bhRfktxvgTI:b,s_jYj3hipCn7Y:j,s_joOjGTTuLT4:k},Symbol.toStringTag,{value:"Module"}));export{f as _hW,w as s_04XTlQXtgKM,y as s_0VsDc8dAxp8,U as s_CxRMAuCYpG0,I as s_Nr0qqc0Q0y0,p as s_PWHc2RKnCUU,h as s_RRsC3VRREDw,G as s_RaMU3Ek6ab4,K as s_TBHYDzr0tPA,V as s_VYFm0zDtkmw,b as s_bhRfktxvgTI,j as s_jYj3hipCn7Y,k as s_joOjGTTuLT4};
