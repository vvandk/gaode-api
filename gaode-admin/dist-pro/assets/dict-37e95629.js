import{aP as t}from"./index-dc787e95.js";import{g as i}from"./dict-416d98d1.js";const s=t("dict",{state:()=>({dictObj:{}}),getters:{},actions:{async getDictObj(t){const s={},o=[];for(const i of t)i in this.dictObj?s[i]=this.dictObj[i]:(s[i]=[],o.push(i));if(o.length>0){const t=await i(o);if(t)for(const i of o)s[i]=t.data[i],this.dictObj[i]=t.data[i]}return s}}});export{s as u};
