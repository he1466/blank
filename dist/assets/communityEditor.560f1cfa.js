import{g as y,h as D}from"./element-plus.33eaa91b.js";import{W as I,r as h,p as k,ar as A,a1 as w,C as x,o as d,c as _,a as i,I as S,aj as M,u,R as T,P as V,L,a3 as O,O as $,at as H,au as N}from"./@vue.fc97fa33.js";import{u as R,g as U,T as j,w as q,e as z,s as K,c as P,p as W}from"./index.dbd91aad.js";import{u as G,b as J}from"./vue-router.68db326f.js";import{u as Q,p as X,b as Y}from"./community.5064b99f.js";import{c as Z}from"./@textbus.225898a1.js";import"./@tanbo.bd87cea7.js";import{e as tt}from"./@vueuse.ab7095fd.js";import{_ as et}from"./vue-markdown-menu-bar.ed0bbcd3.js";import"./@element-plus.e79cb38e.js";import"./dayjs.6d6bf3b5.js";import"./aos.e37f4dc9.js";import"./lodash-es.2fa8789e.js";import"./@ctrl.82a509e0.js";import"./async-validator.fb49d0f5.js";import"./jspdf.93f2685e.js";import"./@babel.2898e469.js";import"./fflate.fca59393.js";import"./pinia.a56e7d9e.js";import"./vue-demi.b3a9cad9.js";import"./picture-verification-code.e81ffd11.js";import"./axios.754b77ca.js";import"./form-data.2b153385.js";import"./nprogress.8e3ae131.js";import"./reflect-metadata.e8f3e0d5.js";import"./immer.10fc837a.js";import"./katex.32438624.js";import"./prismjs.a393ff7a.js";function ot(){const e=I({professional:"",title:""}),a=h(),n=G(),l=J(),s=k(()=>l.query.articleId);let t,r;async function c(){var C;const{loginState:f,loginModelToggle:v,userInfo:B}=R();if(!f.logined||!U(j)){v();return}if(!e.professional||!e.title.trim()||t.getContent()=="<br>"){q("\u5185\u5BB9\u586B\u5199\u5B8C\u6574\u624D\u80FD\u8BA9\u5176\u4ED6\u540C\u5B66\u770B\u660E\u767D\uFF5E");return}if(e.title.length>20){z("\u6807\u9898\u8FC7\u957F \u8BF7\u7F29\u51CF\u523020\u5B57\u4EE5\u5185\uFF5E");return}const E=document.createElement("div");E.innerHTML=t.getContent();let b={...e,content:t.getContent(),introduce:((C=E.textContent)==null?void 0:C.slice(0,255))||"\u7B80\u4ECB",authorId:B.uid},p=0;if(s.value!=null){const m=Object.assign(b,{articleId:r.articleId}),{code:F}=await Q(m);p=F}else{const{code:m}=await X(b);p=m}p==200&&(n.back(),K("\u53D1\u5E03\u6210\u529F\uFF01"))}async function o(){s.value!=null&&(r=(await Y({articleId:parseInt(s.value)})).data,e.title=r.title,e.professional=r.professional,t.replaceContent(r.content))}return A(()=>{t=Z({autoFocus:!0,autoHeight:!0,minHeight:"70vh",uploader:P,styleSheets:[".tb-list-item { margin-left: 20px }"],placeholder:"\u5185\u5BB9\u5C3D\u60C5\u53D1\u6325\uFF5E"}),t.mount(a.value),o()}),w(()=>{e.professional="",e.title="",t==null||t.destroy()}),{article:e,publishArticle:tt(c,1e3),articleEditor:a}}const g=e=>(H("data-v-a225b72b"),e=e(),N(),e),at={class:"article-editor content-card","data-aos":"zoom-out"},rt=g(()=>i("div",{id:"toolbar"},null,-1)),ut=g(()=>i("br",null,null,-1)),it=x({__name:"communityEditor",setup(e){const{article:a,articleEditor:n,publishArticle:l}=ot();return(s,t)=>{const r=y,c=D;return d(),_("div",at,[i("span",{class:"pointer back",onClick:t[0]||(t[0]=o=>s.$router.back())},"\u8FD4\u56DE"),rt,S(i("input",{class:"title",type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>u(a).title=o),placeholder:"\u8BF7\u586B\u5199\u4E8C\u5341\u5B57\u4EE5\u5185\u7684\u6807\u9898~"},null,512),[[M,u(a).title]]),i("div",{class:"editor",ref_key:"articleEditor",ref:n},null,512),T(c,{placeholder:"\u5C97\u4F4D\u65B9\u5411",class:"item",modelValue:u(a).professional,"onUpdate:modelValue":t[2]||(t[2]=o=>u(a).professional=o)},{default:V(()=>[(d(!0),_(L,null,O(u(W),o=>(d(),$(r,{value:o,label:o},null,8,["value","label"]))),256))]),_:1},8,["modelValue"]),ut,i("button",{class:"item primary btn",onClick:t[3]||(t[3]=(...o)=>u(l)&&u(l)(...o))},"\u53D1\u5E03"),i("button",{class:"item plain btn",onClick:t[4]||(t[4]=o=>s.$router.back())},"\u8FD4\u56DE")])}}});const Lt=et(it,[["__scopeId","data-v-a225b72b"]]);export{Lt as default};
