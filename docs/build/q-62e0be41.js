import{l as _,I as r,i as v,$ as o,w as T,c as s,_ as l,p as f}from"./q-ebdde0da.js";import{_auto_LOCAL_STORAGE_COUNTER_KEY as D,_auto_LOCAL_STORAGE_COUNTER_START_KEY as g,_auto_COUNTER_DEFAULT_VALUE as E,_auto_LOCAL_STORAGE_AUTODECREMENT_KEY as I,_auto_AUTODECREMENT_DEFAULT_VALUE as k}from"./q-2fce573e.js";const y=()=>{const[t]=_();t.value=!t.value},w=()=>{var e;const[t]=_();(e=t.value)==null||e.close()},b=({track:t})=>{const[e]=_();t(()=>e.value),e.value&&window.localStorage.setItem(D,e.value.toString())},p=()=>{const[t,e,n]=_(),i=window.localStorage.getItem(g);e.value=i?+i:E,n.value=!1,t()},V=()=>{const[t,e,n,i]=_(),c=window.localStorage.getItem(g)||E;window.localStorage.setItem(g,c.toString());const d=window.localStorage.getItem(D)||c,R=window.localStorage.getItem(I)||k;i.value=+c,t.value=+d,n.value=R==="true",n.value&&e()},S=()=>{const[t]=_();t()},U=t=>{const[e,n]=_();e.value=t!=null&&t.value?t.value:E,window.localStorage.setItem(g,e.value.toString()),n.value=!1},h=()=>{var e;const[t]=_();(e=t.value)==null||e.showModal()},B=()=>{const[t,e]=_();t.value||(t.value=E),t.value--,t.value<=0&&(console.log("It's doomsday!"),e.value=!0)},x="_settingsContainer_3k5mi_1",Y="_settingsOpenButton_3k5mi_7",G="_settingsDialog_3k5mi_16",M="_settingsFieldset_3k5mi_25",N="_settingsCloseButton_3k5mi_35",F="_buttonContainer_3k5mi_47",K="_redButton_3k5mi_57",$="_doomsday_3k5mi_139",j="_doomsdayImage_3k5mi_147",X="_wiggle_3k5mi_1",z="_doomsdayRestartButton_3k5mi_157",q="_fadeIn_3k5mi_1",u={settingsContainer:x,settingsOpenButton:Y,settingsDialog:G,settingsFieldset:M,settingsCloseButton:N,buttonContainer:F,redButton:K,doomsday:$,doomsdayImage:j,wiggle:X,doomsdayRestartButton:z,fadeIn:q},H=()=>{const t=r(),e=r(),n=r(!1),i=r(),c=r(),d=r(),R=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_0VsDc8dAxp8",[d]),A=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_bhRfktxvgTI",[d]),C=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_04XTlQXtgKM",[t,n]),L=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_CxRMAuCYpG0",[t,n]),P=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_Nr0qqc0Q0y0",[i]),O=s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_joOjGTTuLT4",[A,t,n]);return v(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_PWHc2RKnCUU",[t,C,i,e])),v(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_TBHYDzr0tPA",[e])),v(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_RRsC3VRREDw",[t])),v(s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_cXfkBxG55bs",[i])),o("div",null,{class:u.page},[o("dialog",{ref:d},{class:u.settingsDialog},[o("button",null,{class:u.settingsCloseButton,onClick$:A},"×",3,null),o("div",null,{class:u.settingsContent},[o("h1",null,null,"Settings",3,null),o("fieldset",null,{class:u.settingsFieldset},[o("div",null,null,[o("input",null,{checked:T(m=>m.value,[i]),id:"checkbox-autodecrement",onInput$:s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_VYFm0zDtkmw",[P]),type:"checkbox"},null,3,null),o("label",null,{for:"checkbox-autodecrement"},"autodecrement on start",3,null)],3,null),o("div",null,null,[o("input",{ref:c},{min:"1",step:"1",type:"number",value:T(m=>m.value,[e])},null,3,null),o("button",null,{onClick$:s(()=>l(()=>Promise.resolve().then(()=>a),void 0),"s_RaMU3Ek6ab4",[c,L])},"SET",3,null)],1,null)],1,null),o("div",null,{style:"text-align:center;"},["OR",o("br",null,null,null,3,null),o("br",null,null,null,3,null),o("button",null,{onClick$:O},"Restart!",3,null)],3,null)],1,null)],1,null),o("div",null,{class:u.buttonContainer},[!n.value&&o("div",null,null,o("button",null,{class:u.redButton,onClick$:C},T(m=>m.value,[t]),3,null),3,"I0_0"),n.value&&o("div",null,{class:u.doomsday},[o("audio",null,{autoPlay:!0,controls:!0,style:"display:none;"},o("source",null,{src:"/audio/boom.mp3",type:"audio/mpeg"},null,3,null),3,null),o("div",null,{class:u.doomsdayImage},null,3,null),o("button",null,{class:u.doomsdayRestartButton,onClick$:O},"Restart",3,null)],3,"I0_1")],1,null),o("div",null,{class:u.settingsContainer},o("button",null,{class:u.settingsOpenButton,onClick$:R},"⚙️",3,null),3,null)],1,"I0_2")},Q=({track:t})=>{const[e]=_();t(()=>e.value),e.value!==void 0&&window.localStorage.setItem(I,String(e.value))},W=()=>{const[t,e]=_();return e(t.value)},J=({track:t})=>{const[e]=_();t(()=>e.value),e.value&&window.localStorage.setItem(g,e.value.toString())},a=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_04XTlQXtgKM:B,s_0VsDc8dAxp8:h,s_CxRMAuCYpG0:U,s_Nr0qqc0Q0y0:y,s_PWHc2RKnCUU:V,s_RRsC3VRREDw:b,s_RaMU3Ek6ab4:W,s_TBHYDzr0tPA:J,s_VYFm0zDtkmw:S,s_bhRfktxvgTI:w,s_cXfkBxG55bs:Q,s_jYj3hipCn7Y:H,s_joOjGTTuLT4:p},Symbol.toStringTag,{value:"Module"}));export{f as _hW,B as s_04XTlQXtgKM,h as s_0VsDc8dAxp8,U as s_CxRMAuCYpG0,y as s_Nr0qqc0Q0y0,V as s_PWHc2RKnCUU,b as s_RRsC3VRREDw,W as s_RaMU3Ek6ab4,J as s_TBHYDzr0tPA,S as s_VYFm0zDtkmw,w as s_bhRfktxvgTI,Q as s_cXfkBxG55bs,H as s_jYj3hipCn7Y,p as s_joOjGTTuLT4};