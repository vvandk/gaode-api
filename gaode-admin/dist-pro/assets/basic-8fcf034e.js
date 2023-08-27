import{u as e,F as o}from"./useForm-0cf5fadd.js";import{L as a,e as s,a4 as t,r as i,A as l,P as r,a8 as p,o as c,l as n,m,x as d,k as u,j as g,E as _,D as b,a6 as f,dj as w,dk as h}from"./index-dc787e95.js";import{E as y}from"./el-button-adf54e9f.js";import{E as j}from"./el-progress-82737459.js";import{_ as I}from"./_plugin-vue_export-helper-1b428a4d.js";import"./el-col-8a867eaa.js";import"./el-popper-06627937.js";import"./use-form-common-props-e92a1987.js";import"./el-divider-7e837124.js";import"./event-5568c9d8.js";import"./use-form-item-cb2ecb0c.js";import"./el-checkbox-8998332c.js";import"./el-switch-54b2e8b0.js";import"./index-7a6ce827.js";import"./index-2bc17c13.js";const P=a([{field:"web_title",label:"系统标题",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"web_logo",label:"系统 LOGO",colProps:{span:24}},{field:"web_desc",label:"系统描述",colProps:{span:24},component:"Input",componentProps:{rows:4,type:"textarea",style:{width:"500px"}}},{field:"web_ico",label:"ICO 图标",colProps:{span:24}},{field:"web_ico_local_path",label:"ICO 图标服务器文件地址",colProps:{span:24},ifshow:()=>!1},{field:"web_icp_number",label:"备案号",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"web_copyright",label:"版权信息",colProps:{span:24},component:"Input",componentProps:{style:{width:"500px"}}},{field:"active",label:"",colProps:{span:24}}]),v=["src"],x=["src"],k=I(s({__name:"basic",props:{tabId:t.number},setup(a){const s=a,t=e=>{const o=["image/jpeg","image/gif","image/png"].includes(e.type),a=e.size/1024/1024<5;return o||f.error("上传LOGO图片必须是 JPG/GIF/PNG/ 格式!"),a||f.error("上传LOGO图片大小不能超过 5MB!"),o&&a},I=e=>{const o=["image/x-icon"].includes(e.type),a=e.size/1024/1024<2;return o||f.error("上传ICO图标必须是 ico 格式!"),a||f.error("上传ICO图标大小不能超过 2MB!"),o&&a},{register:k,methods:O,elFormRef:C}=e({schema:P}),{setValues:z,setValue:F}=O,G=e=>{200===e.code?(F("web_ico",e.data.remote_path),F("web_ico_local_path",e.data.local_path)):f.error(e.message)},L=e=>{200===e.code?F("web_logo",e.data.remote_path):f.error(e.message)};let A=i({});const E=l(),{wsCache:R}=r(),B=i(!1),D=R.get(E.getToken),M=async()=>{const e=u(C);await(null==e?void 0:e.validate((async e=>{if(e){B.value=!0;let e=await O.getFormData();if(!e)return B.value=!1,f.error("未获取到数据");try{if(await h(e))return E.setTitle(e.web_title||"后台系统"),E.setLogoImage(e.web_logo||"/static/system/logo.png"),E.setFooterContent(e.web_copyright||"Copyright ©2022-present K"),E.setIcpNumber(e.web_icp_number||""),f.success("更新成功")}finally{B.value=!1}}})))};return(async()=>{const e=await w({tab_id:s.tabId});e&&(z(e.data),A.value=e.data)})(),(e,a)=>{const s=p("Icon");return c(),n(u(o),{onRegister:u(k)},{web_logo:m((e=>[d(u(j),{class:"main-image-uploader",action:"/api/vadmin/system/upload/image/to/local",data:{path:"system"},"show-file-list":!1,"before-upload":t,"on-success":L,accept:"image/jpeg,image/gif,image/png",name:"file",headers:{Authorization:u(D)}},{default:m((()=>[e.web_logo?(c(),g("img",{key:0,src:e.web_logo,class:"logo-image"},null,8,v)):(c(),n(u(_),{key:1,class:"logo-image-uploader-icon"},{default:m((()=>[d(s,{icon:"akar-icons:plus",size:23})])),_:1}))])),_:2},1032,["headers"])])),web_ico:m((e=>[d(u(j),{class:"main-image-uploader",action:"/api/vadmin/system/upload/image/to/local",data:{path:"system"},"show-file-list":!1,"before-upload":I,"on-success":G,accept:"image/x-icon",name:"file",headers:{Authorization:u(D)}},{default:m((()=>[e.web_ico?(c(),g("img",{key:0,src:e.web_ico,class:"ico-image"},null,8,x)):(c(),n(u(_),{key:1,class:"ico-image-uploader-icon"},{default:m((()=>[d(s,{icon:"akar-icons:plus",size:23})])),_:1}))])),_:2},1032,["headers"])])),active:m((()=>[d(u(y),{type:"primary",onClick:M},{default:m((()=>[b("立即提交")])),_:1})])),_:1},8,["onRegister"])}}}),[["__scopeId","data-v-680c6af3"]]);export{k as default};
