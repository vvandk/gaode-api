import{e,a4 as a,r as s,o as r,j as t,x as l,k as o,y as n,m as u,D as c,W as i,dj as d,dk as m,a6 as _}from"./index-dc787e95.js";import{E as f}from"./el-button-adf54e9f.js";import{_ as p}from"./style.css_vue_type_style_index_0_src_true_lang-a67dba02.js";const y={class:"mt-10px",style:{float:"right"}},b=e({__name:"agreement",props:{tabId:a.number},setup(e){const a=e,b=s(),g=s(""),v=async()=>{const e=await d({tab_id:a.tabId});e&&(g.value=e.data.web_agreement||"")},w=s(!1),k=async()=>{w.value=!0;try{const e=s({});if(e.value=await m({web_agreement:g.value}),e.value)return v(),_.success("更新成功")}finally{w.value=!1}},j={customAlert:(e,a)=>{switch(a){case"success":_.success(e);break;case"info":default:_.info(e);break;case"warning":_.warning(e);break;case"error":_.error(e)}},autoFocus:!0,scroll:!0,readOnly:!1,uploadImgShowBase64:!0};return v(),(e,a)=>(r(),t(i,null,[l(o(p),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value=e),ref_key:"editorRef",ref:b,editorId:"web_agreement",editorConfig:j},null,8,["modelValue"]),n("div",y,[l(o(f),{type:"primary",onClick:k},{default:u((()=>[c("立即保存")])),_:1})])],64))}});export{b as _};
