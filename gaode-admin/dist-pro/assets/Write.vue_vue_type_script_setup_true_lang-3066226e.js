import{u as e,F as l}from"./useForm-0cf5fadd.js";import{u as o}from"./useValidator-ce35917e.js";import{L as t,e as s,w as a,o as i,l as n,k as p}from"./index-dc787e95.js";import{c as r}from"./role-f1df7e15.js";import{u as d}from"./dict-37e95629.js";const c=t([{field:"id",label:"编号",width:"90px",show:!0,disabled:!1},{field:"name",label:"姓名",show:!0,disabled:!0},{field:"nickname",label:"昵称",show:!1},{field:"telephone",label:"手机号",show:!0,disabled:!0},{field:"poi_search_restrict_method",label:"POI限制方式",show:!0,disabled:!1},{field:"poi_search_day_number",label:"POI次数/日",show:!0,disabled:!1},{field:"poi_search_residual_day_number",label:"剩余POI次数/日",show:!0,disabled:!1},{field:"poi_search_total_number",label:"POI总次数",show:!0,disabled:!1},{field:"poi_search_residual_total_number",label:"剩余POI总次数",show:!0,disabled:!1},{field:"email",label:"邮箱",show:!1,disabled:!1},{field:"gender",label:"性别",show:!1},{field:"is_active",label:"是否可用",show:!0},{field:"is_staff",label:"工作人员",show:!0},{field:"last_login",label:"最近登录时间",show:!0,width:"190px"},{field:"create_datetime",label:"创建时间",width:"190px",show:!1},{field:"action",width:"150px",label:"操作",show:!0}]),m=t([{field:"name",label:"用户名称",colProps:{span:12},component:"Input",componentProps:{style:{width:"100%"}}},{field:"nickname",label:"用户昵称",colProps:{span:12},component:"Input",componentProps:{style:{width:"100%"}}},{field:"telephone",label:"手机号码",colProps:{span:12},component:"Input",componentProps:{style:{width:"100%"}}},{field:"email",label:"邮箱",colProps:{span:12},component:"Input",componentProps:{style:{width:"100%"}}},{field:"gender",label:"性别",colProps:{span:12},component:"Radio",componentProps:{style:{width:"100%"},options:[{label:"男",value:"0"},{label:"女",value:"1"}]},value:"0"},{field:"",label:"默认密码",colProps:{span:12},component:"Text",componentProps:{style:{width:"100%"}},value:"手机号后六位",ifshow:e=>void 0===e.id},{field:"is_staff",label:"工作人员",colProps:{span:12},component:"Radio",componentProps:{style:{width:"100%"},options:[{label:"是",value:!0},{label:"否",value:!1}]},value:!0},{field:"is_active",label:"状态",colProps:{span:12},component:"Radio",componentProps:{style:{width:"100%"},options:[{label:"正常",value:!0},{label:"停用",value:!1}]},value:!0},{field:"poi_search_restrict_method",label:"POI限制方式",colProps:{span:12},component:"Select",componentProps:{style:{width:"100%"}},value:"0"},{field:"poi_search_day_number",label:"POI次数/天",component:"InputNumber",colProps:{span:12},componentProps:{style:{width:"100%"}},value:0,ifshow:e=>"0"===e.poi_search_restrict_method},{field:"poi_search_total_number",label:"POI总次数",component:"InputNumber",colProps:{span:12},componentProps:{style:{width:"100%"}},value:0,ifshow:e=>"1"===e.poi_search_restrict_method},{field:"role_ids",label:"角色",colProps:{span:24},component:"Select",componentProps:{style:{width:"100%"},optionsAlias:{labelField:"name",valueField:"id"},multiple:!0,collapseTags:!0},value:[],ifshow:e=>e.is_staff}]),h=t([{field:"name",label:"姓名",component:"Input",componentProps:{clearable:!1,style:{width:"214px"}},formItemProps:{labelWidth:"47px"}},{field:"telephone",label:"手机号",component:"Input",componentProps:{clearable:!1,style:{width:"214px"}}},{field:"is_active",label:"状态",component:"Select",componentProps:{style:{width:"214px"},options:[{label:"正常",value:!0},{label:"停用",value:!1}]}},{field:"is_staff",label:"工作人员",component:"Select",componentProps:{style:{width:"214px"},options:[{label:"是",value:!0},{label:"否",value:!1}]}}]),b=s({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(s,{expose:c}){const h=s,{required:b,isTelephone:_}=o(),u=t({name:[b()],is_active:[b()],is_staff:[b()],role_ids:[b()],telephone:[b(),{validator:_,trigger:"blur"}]}),{register:f,methods:w,elFormRef:P}=e({schema:m});a((()=>h.currentRow),(e=>{if(!e)return;const{setValues:l}=w;l(e)}),{deep:!0,immediate:!0});return(async()=>{const e=await r();if(e){const{setSchema:l}=w;l([{field:"role_ids",path:"componentProps.options",value:e.data}])}const l=d(),o=await l.getDictObj(["vadmin_auth_poi_search_restrict_method"]),{setSchema:t}=w;t([{field:"poi_search_restrict_method",path:"componentProps.options",value:o.vadmin_auth_poi_search_restrict_method}])})(),c({elFormRef:P,getFormData:w.getFormData}),(e,o)=>(i(),n(p(l),{rules:u,onRegister:p(f)},null,8,["rules","onRegister"]))}});export{b as _,c,h as s};
