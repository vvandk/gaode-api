import{b as e,a as s,e as a,u as n,f as i,o as l,j as t,l as o,m as d,p as r,k as f,E as u,M as c,s as p,q as k,_ as m,t as y}from"./index-dc787e95.js";const b=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:s}}),v={click:e=>e instanceof MouseEvent},h=["href"],g=a({name:"ElLink"});const E=y(m(a({...g,props:b,emits:v,setup(e,{emit:s}){const a=e,m=n("link"),y=i((()=>[m.b(),m.m(a.type),m.is("disabled",a.disabled),m.is("underline",a.underline&&!a.disabled)]));function b(e){a.disabled||s("click",e)}return(e,s)=>(l(),t("a",{class:p(f(y)),href:e.disabled||!e.href?void 0:e.href,onClick:b},[e.icon?(l(),o(f(u),{key:0},{default:d((()=>[(l(),o(r(e.icon)))])),_:1})):c("v-if",!0),e.$slots.default?(l(),t("span",{key:1,class:p(f(m).e("inner"))},[k(e.$slots,"default")],2)):c("v-if",!0),e.$slots.icon?k(e.$slots,"icon",{key:2}):c("v-if",!0)],10,h))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{E};