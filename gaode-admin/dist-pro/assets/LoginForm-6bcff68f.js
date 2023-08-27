import{u as e,F as o}from"./useForm-0cf5fadd.js";import{e as s,J as t,K as l,L as a,r,w as i,a8 as n,o as c,l as d,m as p,y as m,z as u,k as h,x as f,D as g,G as w,a5 as v,O as b,P as j}from"./index-dc787e95.js";import{E as y}from"./el-button-adf54e9f.js";import{E as P}from"./el-checkbox-8998332c.js";import{E as x}from"./el-link-926ced33.js";import{u as _}from"./useValidator-ce35917e.js";import{_ as R}from"./_plugin-vue_export-helper-1b428a4d.js";import"./el-col-8a867eaa.js";import"./el-popper-06627937.js";import"./use-form-common-props-e92a1987.js";import"./el-divider-7e837124.js";import"./event-5568c9d8.js";import"./use-form-item-cb2ecb0c.js";import"./el-switch-54b2e8b0.js";import"./index-7a6ce827.js";import"./index-2bc17c13.js";const k={class:"text-2xl font-bold text-center w-[100%]"},I={class:"flex justify-between items-center w-[100%]"},z={class:"w-[100%]"},F={class:"w-[100%] mt-15px"},E={class:"flex justify-between w-[100%]"},V="#999",q=R(s({__name:"LoginForm",emits:["to-telephone-code"],setup(s,{emit:R}){const{required:q}=_(),C=t(),{currentRoute:D,addRoute:L,push:A}=l(),{t:G}=w(),J={telephone:[q()],method:[q()],password:[q()]},K=a([{field:"title",colProps:{span:24}},{field:"telephone",label:G("login.telephone"),value:"",component:"Input",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:G("login.telephonePlaceholder"),maxlength:11}},{field:"password",label:G("login.password"),component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:G("login.passwordPlaceholder")}},{field:"method",label:"登录类型",value:"0",component:"Input",ifshow:()=>!1},{field:"tool",colProps:{span:24}},{field:"login",colProps:{span:24}},{field:"other",component:"Divider",label:G("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24}}]),O=r(!1),{register:Q,elFormRef:U,methods:X}=e(),Y=r(!1),Z=r("");i((()=>D.value),(e=>{var o;Z.value=null==(o=null==e?void 0:e.query)?void 0:o.redirect}),{immediate:!0});const $=async()=>{const e=h(U);await(null==e?void 0:e.validate((async e=>{if(e){Y.value=!0;const{getFormData:e}=X,s=await e(),t=v();try{const e=await t.login(s);e?e.data.is_reset_password?B():A({path:"/reset/password"}):Y.value=!1}catch(o){Y.value=!1}}})))},B=async()=>{const e=await b();if(e){const{wsCache:o}=j(),s=e.data||[];o.set("roleRouters",s),await C.generateRoutes(s).catch((()=>{})),C.getAddRouters.forEach((e=>{L(e)})),C.setIsAddRouters(!0),A({path:Z.value||C.addRouters[0].path})}},H=()=>{R("to-telephone-code")};return(e,s)=>{const t=n("Icon");return c(),d(h(o),{schema:K,rules:J,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:h(Q)},{title:p((()=>[m("h2",k,u(h(G)("login.login")),1)])),tool:p((()=>[m("div",I,[f(h(P),{modelValue:O.value,"onUpdate:modelValue":s[0]||(s[0]=e=>O.value=e),label:h(G)("login.remember"),size:"small"},null,8,["modelValue","label"]),f(h(x),{type:"primary",underline:!1},{default:p((()=>[g(u(h(G)("login.forgetPassword")),1)])),_:1})])])),login:p((()=>[m("div",z,[f(h(y),{loading:Y.value,type:"primary",class:"w-[100%]",onClick:$},{default:p((()=>[g(u(h(G)("login.login")),1)])),_:1},8,["loading"])]),m("div",F,[f(h(y),{class:"w-[100%]",onClick:H},{default:p((()=>[g(" 短信验证码登录 ")])),_:1})])])),otherIcon:p((()=>[m("div",E,[f(t,{icon:"ant-design:github-filled",size:30,class:"cursor-pointer anticon",color:V}),f(t,{icon:"ant-design:wechat-filled",size:30,class:"cursor-pointer anticon",color:V}),f(t,{icon:"ant-design:alipay-circle-filled",size:30,color:V,class:"cursor-pointer anticon"}),f(t,{icon:"ant-design:weibo-circle-filled",size:30,color:V,class:"cursor-pointer anticon"})])])),_:1},8,["schema","onRegister"])}}}),[["__scopeId","data-v-30b3f02d"]]);export{q as default};
