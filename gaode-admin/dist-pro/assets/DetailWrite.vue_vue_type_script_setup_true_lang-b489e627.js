import{u as e,F as l}from"./useForm-0cf5fadd.js";import{u as o}from"./useValidator-ce35917e.js";import{L as a,br as s,e as t,w as r,o as i,l as n,k as d}from"./index-dc787e95.js";import"./el-checkbox-8998332c.js";import{E as p}from"./index-7a6ce827.js";const m=a([{field:"id",label:"字典编号",show:!0,disabled:!0},{field:"label",label:"字典标签",show:!0,disabled:!0},{field:"value",label:"字典键值",show:!0},{field:"order",label:"字典排序",show:!0},{field:"disabled",label:"是否禁用",formatter:(e,l,o)=>s(p,{type:o?"danger":""},(()=>o?"禁用":"启用")),show:!0},{field:"remark",label:"备注",show:!0},{field:"create_datetime",label:"创建时间",show:!0},{field:"action",width:"150px",label:"操作",show:!0}]),b=a([{field:"label",label:"字典标签",colProps:{span:24},component:"Input"},{field:"value",label:"字典键值",colProps:{span:24},component:"Input"},{field:"order",label:"排序",colProps:{span:24},component:"InputNumber",componentProps:{style:{width:"50%"}}},{field:"is_default",label:"是否默认",colProps:{span:24},component:"Radio",componentProps:{style:{width:"100%"},options:[{label:"是",value:!0},{label:"否",value:!1}]},value:!1},{field:"disabled",label:"是否禁用",colProps:{span:24},component:"Radio",componentProps:{style:{width:"100%"},options:[{label:"启用",value:!1},{label:"禁用",value:!0}]},value:!1},{field:"remark",label:"备注",colProps:{span:24},component:"Input"}]),c=a([{field:"label",label:"字典标签",component:"Input",componentProps:{clearable:!1}},{field:"dict_type_id",label:"字典类型",component:"Select",componentProps:{optionsAlias:{labelField:"dict_name",valueField:"id"},clearable:!1}}]),u=t({__name:"DetailWrite",props:{currentRow:{type:Object,default:()=>null}},setup(s,{expose:t}){const p=s,{required:m}=o(),c=a({label:[m()],value:[m()],order:[m()],is_default:[m()],disabled:[m()]}),{register:u,methods:f,elFormRef:h}=e({schema:b});return r((()=>p.currentRow),(e=>{if(!e)return;const{setValues:l}=f;l(e)}),{deep:!0,immediate:!0}),t({elFormRef:h,getFormData:f.getFormData}),(e,o)=>(i(),n(d(l),{rules:c,onRegister:d(u)},null,8,["rules","onRegister"]))}});export{u as _,m as c,c as s};
