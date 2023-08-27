import{ax as e,ay as a,b as t,d as l,au as s,e as o,av as n,az as r,u as i,r as u,w as d,aa as c,aA as v,o as p,j as b,s as m,k as f,n as h,_ as y,aB as g,aC as $,aD as x,f as C,S as w,aE as k,x as N,E as P,aF as T,aG as S,aH as B,aI as E,at as R,aJ as A,q as F,aK as j,g as L,i as _,aL as K,aM as M,L as q,aN as z,af as V,aO as H,M as O,t as U,$ as X}from"./index-dc787e95.js";import{c as D}from"./useForm-0cf5fadd.js";import{U as G}from"./event-5568c9d8.js";import{f as I}from"./vnode-7d8ea85e.js";import{u as J}from"./use-form-item-cb2ecb0c.js";const W=(t,l)=>{const s={},o=e([]);return{children:o,addChild:e=>{s[e.uid]=e,o.value=((e,t,l)=>I(e.subTree).filter((e=>{var l;return a(e)&&(null==(l=e.type)?void 0:l.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>l[e])).filter((e=>!!e)))(t,l,s)},removeChild:e=>{delete s[e],o.value=o.value.filter((a=>a.uid!==e))}}},Y=Symbol("tabsRootContextKey"),Q=t({tabs:{type:l(Array),default:()=>s([])}}),Z="ElTabBar",ee=o({name:Z});var ae=y(o({...ee,props:Q,setup(e,{expose:a}){const t=e,l=g(),s=n(Y);s||r(Z,"<el-tabs><el-tab-bar /></el-tabs>");const o=i("tabs"),y=u(),$=u(),x=()=>$.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i[`tab-${s.uid}`];if(!u)return!1;if(!s.active)return!0;e=u[`offset${D(r)}`],a=u[`client${D(o)}`];const d=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(d.paddingLeft)+Number.parseFloat(d.paddingRight)),e+=Number.parseFloat(d.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${D(n)}(${e}px)`}})();return d((()=>t.tabs),(async()=>{await c(),x()}),{immediate:!0}),v(y,(()=>x())),a({ref:y,update:x}),(e,a)=>(p(),b("div",{ref_key:"barRef",ref:y,class:m([f(o).e("active-bar"),f(o).is(f(s).props.tabPosition)]),style:h($.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const te=t({panes:{type:l(Array),default:()=>s([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=o({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=g(),s=n(Y);s||r(le,"<el-tabs><tab-nav /></el-tabs>");const o=i("tabs"),p=$(),b=x(),m=u(),f=u(),h=u(),y=u(),R=u(!1),A=u(0),F=u(!1),j=u(!0),L=C((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),_=C((()=>({transform:`translate${"width"===L.value?"X":"Y"}(-${A.value}px)`}))),K=()=>{if(!m.value)return;const e=m.value[`offset${D(L.value)}`],a=A.value;if(!a)return;const t=a>e?a-e:0;A.value=t},M=()=>{if(!m.value||!f.value)return;const e=f.value[`offset${D(L.value)}`],a=m.value[`offset${D(L.value)}`],t=A.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;A.value=l},q=async()=>{const e=f.value;if(!(R.value&&h.value&&m.value&&e))return;await c();const a=h.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=A.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),A.value=Math.min(u,r)},z=()=>{var a;if(!f.value||!m.value)return;e.stretch&&(null==(a=y.value)||a.update());const t=f.value[`offset${D(L.value)}`],l=m.value[`offset${D(L.value)}`],s=A.value;l<t?(R.value=R.value||{},R.value.prev=s,R.value.next=s+l<t,t-s<l&&(A.value=t-l)):(R.value=!1,s>0&&(A.value=0))},V=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=E;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),H()},H=()=>{j.value&&(F.value=!0)},O=()=>F.value=!1;return d(p,(e=>{"hidden"===e?j.value=!1:"visible"===e&&setTimeout((()=>j.value=!0),50)})),d(b,(e=>{e?setTimeout((()=>j.value=!0),50):j.value=!1})),v(h,z),w((()=>setTimeout((()=>q()),0))),k((()=>z())),a({scrollToActiveTab:q,removeFocus:O}),d((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=R.value?[N("span",{class:[o.e("nav-prev"),o.is("disabled",!R.value.prev)],onClick:K},[N(P,null,{default:()=>[N(T,null,null)]})]),N("span",{class:[o.e("nav-next"),o.is("disabled",!R.value.next)],onClick:M},[N(P,null,{default:()=>[N(S,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const d=a.uid,c=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${l}`,p=!c&&(a.isClosable||e.editable);a.index=`${l}`;const b=p?N(P,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[N(B,null,null)]}):null,m=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,f=!c&&a.active?0:-1;return N("div",{ref:`tab-${d}`,class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",c),o.is("closable",p),o.is("focus",F.value)],id:`tab-${v}`,key:`tab-${d}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>H(),onBlur:()=>O(),onClick:e=>{O(),t("tabClick",a,v,e)},onKeydown:e=>{!p||e.code!==E.delete&&e.code!==E.backspace||t("tabRemove",a,e)}},[m,b])}));return N("div",{ref:h,class:[o.e("nav-wrap"),o.is("scrollable",!!R.value),o.is(s.props.tabPosition)]},[a,N("div",{class:o.e("nav-scroll"),ref:m},[N("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:f,style:_.value,role:"tablist",onKeydown:V},[e.type?null:N(ae,{ref:y,tabs:[...e.panes]},null),l])])])}}}),oe=t({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:l(Function),default:()=>!0},stretch:Boolean}),ne=e=>L(e)||_(e);var re=o({name:"ElTabs",props:oe,emits:{[G]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const n=i("tabs"),{children:r,addChild:v,removeChild:p}=W(g(),"ElTabPane"),b=u(),m=u(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),f=async t=>{var l,s,o;if(m.value!==t&&!j(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,m.value))&&((e=>{m.value=e,a(G,e),a("tabChange",e)})(t),null==(o=null==(s=b.value)?void 0:s.removeFocus)||o.call(s))}catch(n){}},h=(e,t,l)=>{e.props.disabled||(f(t),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||j(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},$=()=>{a("edit",void 0,"add"),a("tabAdd")};return J({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},C((()=>!!e.activeName))),d((()=>e.activeName),(e=>f(e))),d((()=>e.modelValue),(e=>f(e))),d(m,(async()=>{var e;await c(),null==(e=b.value)||e.scrollToActiveTab()})),R(Y,{props:e,currentName:m,registerPane:v,unregisterPane:p}),l({currentName:m}),()=>{const a=e.editable||e.addable?N("span",{class:n.e("new-tab"),tabindex:"0",onClick:$,onKeydown:e=>{e.code===E.enter&&$()}},[N(P,{class:n.is("icon-plus")},{default:()=>[N(A,null,null)]})]):null,l=N("div",{class:[n.e("header"),n.is(e.tabPosition)]},[a,N(se,{ref:b,currentName:m.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),s=N("div",{class:n.e("content")},[F(t,"default")]);return N("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,s]:[s,l]])}}});const ie=t({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],de="ElTabPane",ce=o({name:de});var ve=y(o({...ce,props:ie,setup(e){const a=e,t=g(),l=K(),s=n(Y);s||r(de,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=i("tab-pane"),c=u(),v=C((()=>a.closable||s.props.closable)),h=M((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:c.value)})),y=u(h.value),$=C((()=>{var e;return null!=(e=a.name)?e:c.value})),x=M((()=>!a.lazy||y.value||h.value));d(h,(e=>{e&&(y.value=!0)}));const k=q({uid:t.uid,slots:l,props:a,paneName:$,active:h,index:c,isClosable:v});return w((()=>{s.registerPane(k)})),z((()=>{s.unregisterPane(k.uid)})),(e,a)=>f(x)?V((p(),b("div",{key:0,id:`pane-${f($)}`,class:m(f(o).b()),role:"tabpanel","aria-hidden":!f(h),"aria-labelledby":`tab-${f($)}`},[F(e.$slots,"default")],10,ue)),[[H,f(h)]]):O("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const pe=U(re,{TabPane:ve}),be=X(ve);export{pe as E,be as a};