import{l as _,I as c,i as m,$ as o,w as T,c as s,_ as l,p as P}from"./q-ebdde0da.js";import{_auto_LOCAL_STORAGE_COUNTER_KEY as y,_auto_LOCAL_STORAGE_COUNTER_START_KEY as v,_auto_COUNTER_DEFAULT_VALUE as E,_auto_LOCAL_STORAGE_AUTODECREMENT_KEY as D,_auto_AUTODECREMENT_DEFAULT_VALUE as w}from"./q-a8e263ef.js";const b=()=>{const[t]=_();t.value=!t.value},f=()=>{var e;const[t]=_();(e=t.value)==null||e.close()},p=({track:t})=>{const[e]=_();t(()=>e.value),e.value&&window.localStorage.setItem(y,e.value.toString())},V=()=>{const[t,e,n]=_(),i=window.localStorage.getItem(v);e.value=i?+i:E,n.value=!1,t()},S=()=>{const[t,e,n,i]=_(),r=window.localStorage.getItem(v)||E;window.localStorage.setItem(v,r.toString());const d=window.localStorage.getItem(y)||r,R=window.localStorage.getItem(D)||w;i.value=+r,t.value=+d,n.value=R==="true",n.value&&e()},x=()=>{const[t]=_();t()},U=t=>{const[e,n]=_();e.value=t!=null&&t.value?t.value:E,window.localStorage.setItem(v,e.value.toString()),n.value=!1},h=()=>{var e;const[t]=_();(e=t.value)==null||e.showModal()},B=()=>{const[t,e]=_();t.value||(t.value=E),t.value--,t.value<=0&&(console.log("It's doomsday!"),e.value=!0)},k="_settingsContainer_yt8ix_1",Y="_settingsOpenButton_yt8ix_7",G="_settingsDialog_yt8ix_16",M="_settingsFieldset_yt8ix_25",N="_settingsCloseButton_yt8ix_35",F="_buttonContainer_yt8ix_47",K="_redButton_yt8ix_57",$="_doomsday_yt8ix_100",j="_doomsdayImage_yt8ix_106",X="_wiggle_yt8ix_1",z="_doomsdayRestartButton_yt8ix_118",u={settingsContainer:k,settingsOpenButton:Y,settingsDialog:G,settingsFieldset:M,settingsCloseButton:N,buttonContainer:F,redButton:K,doomsday:$,doomsdayImage:j,wiggle:X,doomsdayRestartButton:z},q=()=>{const t=c(),e=c(),n=c(!1),i=c(),r=c(),d=c(),R=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_0VsDc8dAxp8",[d]),A=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_bhRfktxvgTI",[d]),C=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_04XTlQXtgKM",[t,n]),I=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_CxRMAuCYpG0",[t,n]),L=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_Nr0qqc0Q0y0",[i]),O=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_joOjGTTuLT4",[A,t,n]);return m(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_PWHc2RKnCUU",[t,C,i,e])),m(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_TBHYDzr0tPA",[e])),m(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_RRsC3VRREDw",[t])),m(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_cXfkBxG55bs",[i])),o("div",null,{class:u.page},[o("dialog",{ref:d},{class:u.settingsDialog},[o("button",null,{class:u.settingsCloseButton,onClick$:A},"×",3,null),o("div",null,{class:u.settingsContent},[o("h1",null,null,"Settings",3,null),o("fieldset",null,{class:u.settingsFieldset},[o("div",null,null,[o("input",null,{checked:T(g=>g.value,[i]),id:"checkbox-autodecrement",onInput$:s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_VYFm0zDtkmw",[L]),type:"checkbox"},null,3,null),o("label",null,{for:"checkbox-autodecrement"},"autodecrement on start",3,null)],3,null),o("div",null,null,[o("input",{ref:r},{min:"1",step:"1",type:"number",value:T(g=>g.value,[e])},null,3,null),o("button",null,{onClick$:s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_RaMU3Ek6ab4",[r,I])},"SET",3,null)],1,null)],1,null),o("div",null,{style:"text-align:center;"},["OR",o("br",null,null,null,3,null),o("br",null,null,null,3,null),o("button",null,{onClick$:O},"Restart!",3,null)],3,null)],1,null)],1,null),o("div",null,{class:u.buttonContainer},[!n.value&&o("div",null,null,o("button",null,{class:u.redButton,onClick$:C},T(g=>g.value,[t]),3,null),3,"I0_0"),n.value&&o("div",null,{class:u.doomsday},[o("audio",null,{autoPlay:!0,controls:!0,style:"display:none;"},o("source",null,{src:"/audio/boom.mp3",type:"audio/mpeg"},null,3,null),3,null),o("div",null,{class:u.doomsdayImage},null,3,null),o("button",null,{class:u.doomsdayRestartButton,onClick$:O},"Restart",3,null)],3,"I0_1")],1,null),o("div",null,{class:u.settingsContainer},o("button",null,{class:u.settingsOpenButton,onClick$:R},"⚙️",3,null),3,null)],1,"I0_2")},H=({track:t})=>{const[e]=_();t(()=>e.value),e.value!==void 0&&window.localStorage.setItem(D,String(e.value))},Q=()=>{const[t,e]=_();return e(t.value)},W=({track:t})=>{const[e]=_();t(()=>e.value),e.value&&window.localStorage.setItem(v,e.value.toString())},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_04XTlQXtgKM:B,s_0VsDc8dAxp8:h,s_CxRMAuCYpG0:U,s_Nr0qqc0Q0y0:b,s_PWHc2RKnCUU:S,s_RRsC3VRREDw:p,s_RaMU3Ek6ab4:Q,s_TBHYDzr0tPA:W,s_VYFm0zDtkmw:x,s_bhRfktxvgTI:f,s_cXfkBxG55bs:H,s_jYj3hipCn7Y:q,s_joOjGTTuLT4:V},Symbol.toStringTag,{value:"Module"}));export{P as _hW,B as s_04XTlQXtgKM,h as s_0VsDc8dAxp8,U as s_CxRMAuCYpG0,b as s_Nr0qqc0Q0y0,S as s_PWHc2RKnCUU,p as s_RRsC3VRREDw,Q as s_RaMU3Ek6ab4,W as s_TBHYDzr0tPA,x as s_VYFm0zDtkmw,f as s_bhRfktxvgTI,H as s_cXfkBxG55bs,q as s_jYj3hipCn7Y,V as s_joOjGTTuLT4};
