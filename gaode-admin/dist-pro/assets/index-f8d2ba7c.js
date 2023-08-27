import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-b07c8c79.js";import{u as a,_ as t,a as s}from"./RightToolbar.vue_vue_type_script_setup_true_lang-44d08f8c.js";import{a0 as l,L as o,e as i,P as r,K as p,r as n,w as m,aa as u,o as d,l as c,m as _,x as h,k as b,y as v,ab as f,D as j,z as g}from"./index-dc787e95.js";import{E as w}from"./el-button-adf54e9f.js";import{a as y}from"./el-col-8a867eaa.js";import{_ as x}from"./Dialog.vue_vue_type_style_index_0_lang-62a93a72.js";import{_ as k}from"./Detail.vue_vue_type_script_setup_true_lang-2532840b.js";import{_ as R}from"./Search.vue_vue_type_script_setup_true_lang-d97129cd.js";import{s as S}from"./dict-ab5a6743.js";import{u as L}from"./dict-37e95629.js";import"./el-card-4ec964b4.js";import"./el-popper-06627937.js";import"./use-form-common-props-e92a1987.js";import"./el-popover-85004fb7.js";import"./el-checkbox-8998332c.js";import"./event-5568c9d8.js";import"./use-form-item-cb2ecb0c.js";import"./el-divider-7e837124.js";import"./useForm-0cf5fadd.js";import"./el-switch-54b2e8b0.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-7a6ce827.js";import"./index-2bc17c13.js";import"./el-overlay-9a40cbcb.js";import"./vnode-7d8ea85e.js";import"./el-dropdown-item-978ba092.js";import"./use-dialog-30a6a371.js";import"./Descriptions-92b0e991.js";import"./dict-416d98d1.js";const z=e=>l.get({url:"/vadmin/system/task/records",params:e}),D=o([{field:"job_id",label:"任务编号",show:!0,disabled:!0,width:"240px",span:24},{field:"name",label:"任务名称",show:!0,disabled:!0,span:24},{field:"group",label:"任务分组",show:!0,span:24},{field:"job_class",label:"调用目标",show:!0,span:24},{field:"exec_strategy",label:"执行策略",show:!0,span:24},{field:"expression",label:"表达式",show:!0,span:24},{field:"start_time",label:"开始执行时间",show:!1,width:"200px",span:24},{field:"end_time",label:"执行完成时间",width:"200px",show:!0,span:24},{field:"process_time",label:"耗时(秒)",width:"110px",show:!0,span:24},{field:"retval",label:"任务返回值",show:!0,span:24},{field:"exception",label:"异常信息",show:!1,span:24},{field:"traceback",label:"堆栈跟踪",show:!1,width:"100px",span:24},{field:"action",width:"100px",label:"操作",show:!0,disabled:!0,span:24}]),P=o([{field:"job_id",label:"任务编号",component:"Input",componentProps:{clearable:!0,style:{width:"240px"}}},{field:"name",label:"任务名称",component:"Input",componentProps:{clearable:!0}}]),U={class:"mb-8px flex justify-between"},C=i({name:"SystemRecordTask",setup(l){const{wsCache:o}=r(),{currentRoute:i}=p(),C=i.value.query.job_id,{register:V,elTableRef:O,tableObject:T,methods:F}=a({getListApi:z,response:{data:"data",count:"count"}});T.params={job_id:C};const G=n(!1),I=n(""),W=n([]),q=n([]);"string"==typeof C&&q.value.push({field:"job_id",path:"value",value:C});(async()=>{const e=L(),a=await e.getDictObj(["vadmin_system_task_exec_strategy"]);W.value=a.vadmin_system_task_exec_strategy})();const{getList:A,setSearchParams:E}=F;A();const H=n("default");m(H,(e=>{H.value=e}));const J=p().currentRoute.value.fullPath;return m(D,(async e=>{var a;o.set(J,JSON.stringify(e)),await u(),null==(a=O.value)||a.doLayout()}),{deep:!0}),(a,l)=>(d(),c(b(e),null,{default:_((()=>[h(b(R),{schema:b(P),setSchemaList:q.value,onSearch:b(E),onReset:b(E)},null,8,["schema","setSchemaList","onSearch","onReset"]),v("div",U,[h(b(y)),h(b(t),{onGetList:b(A),"table-size":H.value,"onUpdate:tableSize":l[0]||(l[0]=e=>H.value=e),columns:b(D),"onUpdate:columns":l[1]||(l[1]=e=>f(D)?D.value=e:null),"cache-table-headers-key":b(J)},null,8,["onGetList","table-size","columns","cache-table-headers-key"])]),h(b(s),{limit:b(T).limit,"onUpdate:limit":l[2]||(l[2]=e=>b(T).limit=e),page:b(T).page,"onUpdate:page":l[3]||(l[3]=e=>b(T).page=e),columns:b(D),data:b(T).tableData,loading:b(T).loading,selection:!1,size:H.value,border:!0,pagination:{total:b(T).count},onRegister:b(V)},{exec_strategy:_((({row:e})=>[j(g(b(S)(W.value,e.exec_strategy)),1)])),action:_((({row:e})=>[h(b(w),{type:"primary",link:"",size:"small",onClick:a=>(e=>{I.value="操作记录",T.currentRow=e,G.value=!0})(e)},{default:_((()=>[j(" 详情 ")])),_:2},1032,["onClick"])])),_:1},8,["limit","page","columns","data","loading","size","pagination","onRegister"]),h(b(x),{modelValue:G.value,"onUpdate:modelValue":l[4]||(l[4]=e=>G.value=e),title:I.value,width:"900px"},{default:_((()=>[h(k,{"detail-schema":b(D),"current-row":b(T).currentRow},null,8,["detail-schema","current-row"])])),_:1},8,["modelValue","title"])])),_:1}))}});export{C as default};
