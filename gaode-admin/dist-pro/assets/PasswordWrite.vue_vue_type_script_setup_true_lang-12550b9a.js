import{u as s,F as a}from"./useForm-0cf5fadd.js";import{e,a5 as r,L as o,r as t,o as l,l as i,m as d,y as n,x as p,D as m,k as c,a6 as u,N as w}from"./index-dc787e95.js";import{E as g}from"./el-button-adf54e9f.js";import{u as f}from"./useValidator-ce35917e.js";const b={class:"w-[50%]"},v=e({__name:"PasswordWrite",setup(e){const{required:v}=f(),y=r(),P={password:[v(),{min:8,max:16,message:"长度需为8-16个字符,请重新输入。",trigger:"blur"}],password_two:[v(),{min:8,max:16,message:"长度需为8-16个字符,请重新输入。",trigger:"blur"}]},h=o([{field:"title",colProps:{span:24}},{field:"password",label:"新密码",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"50%"},placeholder:"请输入新密码"}},{field:"password_two",label:"确认密码",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"50%"},placeholder:"请再次输入新密码"}},{field:"save",colProps:{span:24}}]),{register:_,elFormRef:k,methods:x}=s(),{setValues:F}=x;F(y.getUser);const j=t(!1),R=async()=>{if(1===y.getUser.id)return u.warning("编辑账号为演示账号，无权限操作！");const s=c(k);await(null==s?void 0:s.validate((async a=>{if(a){j.value=!0;const{getFormData:a}=x,e=await a();try{await w(e)&&(s.resetFields(),u.success("保存成功"))}finally{j.value=!1}}})))};return(s,e)=>(l(),i(c(a),{schema:h,rules:P,"hide-required-asterisk":"",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:c(_)},{save:d((()=>[n("div",b,[p(c(g),{loading:j.value,type:"primary",class:"w-[100%]",onClick:R},{default:d((()=>[m(" 保存 ")])),_:1},8,["loading"])])])),_:1},8,["schema","onRegister"]))}});export{v as _};
