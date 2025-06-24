import{k as j,l as ie,m as ue}from"./element-plus.98668c60.js";import{U as z,n as P,H as le,B as re}from"./browseHistory.d9c78a44.js";import{r as F,a5 as W,E as S,L as ae,o as l,c as v,a as i,_ as ce,al as me,u as t,U as de,i as pe,F as T,a7 as D,X as _,S as E,P as $,au as X,av as G,w as U,n as ve,W as b,V as q,h as w,K,j as ye,aw as J,M as fe,R as O}from"./@vue.89a9c572.js";import{P as he}from"./vue3-emoji-picker.8817a179.js";import{b as N,u as Q,e as A,I as ge,w as L,s as Y,_ as R,i as Z,E as _e,d as Ce}from"./index.986a4e6e.js";import{e as ee}from"./@vueuse.28ca7a33.js";import{s as te,c as oe}from"./index.13054545.js";import{M as Ie}from"./highlight.357fcb73.js";import{b as ke}from"./vue-router.80d684e6.js";import{b as $e,l as Fe}from"./community.07fb74b4.js";import"./lodash-es.32a32d0b.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.8bc38739.js";import"./dayjs.f53c2448.js";import"./aos.e37f4dc9.js";import"./@popperjs.36402333.js";import"./@ctrl.b082b0c1.js";import"./jspdf.0b42b4d1.js";import"./@babel.e46629ed.js";import"./fflate.fca59393.js";import"./pinia.20051b1a.js";import"./picture-verification-code.e81ffd11.js";import"./axios.05d3747b.js";import"./nprogress.8e3ae131.js";import"./config.5d67e04c.js";import"./html2canvas.4d0ab5af.js";import"./markdown-transform-html.de11a2c9.js";function Ee(e){return N("/communityComment/publish",e)}function Ae(e){return N("/communityComment/reply",e)}function be(e){return N("/communityComment/remove",e)}function Be(e){return N("/communityComment/queryCommentsByArticleId",e)}function we(e){return N("/communityComment/queryCommentPosition",e)}function Te(e){const n=F(!1);function s(){n.value=!n.value}function r(p){s(),e.value+=p.i}return{picker:n,togglePicker:s,setEmoji:r}}function De(e,n,s,r,p,u,m,h,y){const d=F(""),{loginState:f,loginModelToggle:C,userInfo:a}=Q();async function o(){if(!f.logined){C();return}if(!d.value.trim()){L("\u4F60\u53D1\u4E2A\u7A7A\u5185\u5BB9\u662F\u60F3\u5E72\u561B\u5462\uFF1F\uFF1F\uFF1F");return}if(d.value.length>200){L("\u592A\u591A\u4E86\u5B58\u4E0D\u4E0B, \u5220\u5230200\u5B57\u4EE5\u5185\u5427");return}const g=n.value==1?Ee:Ae,c={content:d.value.replace(/</g,"&lt;").replace(/>/g,"&gt;"),authorId:a.uid,images:y.value.join("~$^$~"),level:n.value,articleId:e.value,posterCommentId:s.value,replyAuthorId:r.value,replyArticleAuthorId:p.value,replyCommentId:u.value,replyCommentLevel:m.value},I=await g(c);I.code==200&&(d.value="",y.value.length=0,h("reQueryComments")),I.code==200?Y(I.msg):A(I.msg)}return W(()=>{d.value="",y.value.length=0}),{shareMainContent:d,publish:ee(o,1e3)}}function Ne(){const e=F([]);async function n(){if(e.value.length>=2)return A("\u6700\u591A\u53EA\u80FD\u4E0A\u4F202\u5F20\u56FE\u7247\uFF01");const r=document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept",".png,.jpg,.gif,.jpeg,.webp"),r.click(),r.onchange=async function(){const p=Array.from(r.files);for(const u of p){const m=await ge(u);e.value.push(m)}r.remove()}}function s(r){e.value.splice(r,1)}return{images:e,pickerImage:n,deleteImage:s}}const ne=e=>(X("data-v-cee10d60"),e=e(),G(),e),xe={class:"community-publish content-card"},Me={class:"community-content-edit"},Se={key:0,class:"covers-container community-comment-cover"},Qe=["onClick"],Re={class:"community-operator-group flex community-content-edit-publish"},Pe={class:"community-edit-picker"},qe=ne(()=>i("i",{class:"iconfont icon-emoji font-25 mr-10"},null,-1)),Le=[qe],je=ne(()=>i("i",{class:"iconfont icon-image font-25"},null,-1)),ze=[je],Ue=S({__name:"publish",props:{articleId:null,level:null,replyCommentLevel:{default:1},posterCommentId:{default:0},replyCommentId:{default:0},replyAuthorId:{default:0},replyArticleAuthorId:{default:0},background:{default:"var(--body-background)"}},emits:["reQueryComments"],setup(e,{emit:n}){const s=e,{pickerImage:r,images:p,deleteImage:u}=Ne(),m=ae(s),{shareMainContent:h,publish:y}=De(m.articleId,m.level,m.posterCommentId,m.replyAuthorId,m.replyArticleAuthorId,m.replyCommentId,m.replyCommentLevel,n,p),{picker:d,setEmoji:f,togglePicker:C}=Te(h);return(a,o)=>{const g=j;return l(),v("div",xe,[i("div",Me,[ce(i("textarea",{style:de({background:e.background}),class:"content-edit main-content","onUpdate:modelValue":o[0]||(o[0]=c=>pe(h)?h.value=c:null),placeholder:"\u5185\u5BB9\u63A7\u5236\u5728200\u5B57\u4EE5\u5185\uFF5E"},null,4),[[me,t(h)]])]),t(p).length?(l(),v("div",Se,[(l(!0),v(T,null,D(t(p),(c,I)=>(l(),v("div",{class:"mr-10 cover-item-container",key:I},[$(g,{loading:"lazy",src:c,fit:"cover",class:"cover-item","initial-index":I,"preview-src-list":t(p),"preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","initial-index","preview-src-list"]),i("i",{onClick:M=>t(u)(I),class:"iconfont icon-delete pointer hover cover-item-close"},null,8,Qe)]))),128))])):_("",!0),i("div",Re,[i("div",Pe,[i("span",{class:"emoji pointer hover",onClick:o[1]||(o[1]=(...c)=>t(C)&&t(C)(...c))},Le),i("span",{class:"emoji pointer hover",onClick:o[2]||(o[2]=(...c)=>t(r)&&t(r)(...c))},ze),t(d)?(l(),E(t(he),{key:0,class:"picker",native:!0,"hide-search":!0,"hide-group-names":!0,onSelect:t(f),"static-texts":{skinTone:"\u6362\u80A4"}},null,8,["onSelect"])):_("",!0)]),i("button",{class:"btn primary",onClick:o[3]||(o[3]=(...c)=>t(y)&&t(y)(...c))},"\u53D1\u8868")])])}}});const V=R(Ue,[["__scopeId","data-v-cee10d60"]]);function se(e){const{userInfo:n}=Q(),s=F(-1);let r=-1;function p(m){if(r===m){s.value=-1,r=-1;return}r=m,s.value=m}async function u(m,h,y){if(!Z()){A("\u8BF7\u5148\u767B\u5F55\uFF01"),window.location.reload();return}const d=await be({commentId:m,articleId:h,level:y});if(d.code==200){Y(d.msg),e("reQueryComments");return}A(d.msg)}return{userInfo:n,reply:p,remove:u,currenId:s}}function Ve(e){const n=F(e>1);function s(){n.value=!1}return{more:n,setMore:s}}function He(e){const n=F();return U(()=>e.value,()=>{try{ve(()=>{const s=n.value.children[e.value];te(oe(s)-65),s.classList.add("notice"),setTimeout(()=>{s.classList.remove("notice")},1e3)})}catch(s){console.log(s),A("\u51FA\u4E86\u70B9\u9519\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u65B0\u5C1D\u8BD5\uFF5E")}}),{comments:n}}const Ke={class:"comments-list mt-20 content-card"},Oe={class:"comment-content line-4"},We={class:"reply-text pointer"},Xe={key:0,class:"covers-container"},Ge={class:"list-style-init flex operator"},Je=["onClick"],Ye=["onClick"],Ze=S({__name:"reply",props:{data:null,commentId:null,articleId:null},emits:["reQueryComments"],setup(e,{emit:n}){const s=e,{currenId:r,reply:p,userInfo:u,remove:m}=se(n),{more:h,setMore:y}=Ve(s.data.length);return(d,f)=>{const C=j;return l(),v("div",Ke,[(l(!0),v(T,null,D(t(h)?e.data.slice(0,1):e.data,(a,o)=>(l(),v("div",{class:"comment-item",key:o},[$(z,{"user-info":a.authorInfo,"publish-time":a.createTime},null,8,["user-info","publish-time"]),i("p",Oe,[i("span",We,"@"+b(a.replyNickName)+"\uFF1A",1),q(" "+b(a.content),1)]),a.images?(l(),v("div",Xe,[(l(!0),v(T,null,D(a.images.split("~$^$~"),(g,c)=>(l(),E(C,{key:c,src:g,"preview-src-list":a.images.split("~$^$~"),"initial-index":c,fit:"cover",loading:"lazy",lazy:!0,class:"mr-10 cover-item","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list","initial-index"]))),128))])):_("",!0),i("ul",Ge,[i("li",{class:"mr-10",onClick:g=>t(p)(a.commentId)},"\u56DE\u590D",8,Je),t(u).uid===a.authorId?(l(),v("li",{key:0,onClick:g=>t(m)(a.commentId,e.articleId,2)}," \u5220\u9664 ",8,Ye)):_("",!0)]),t(r)===a.commentId?(l(),E(V,{key:1,"article-id":e.articleId,level:2,"reply-comment-level":a.level,"poster-comment-id":e.commentId,"reply-comment-id":a.commentId,"reply-author-id":a.authorId,background:"white",onReQueryComments:f[0]||(f[0]=g=>d.$emit("reQueryComments"))},null,8,["article-id","reply-comment-level","poster-comment-id","reply-comment-id","reply-author-id"])):_("",!0)]))),128)),t(h)?(l(),v("span",{key:0,onClick:f[1]||(f[1]=(...a)=>t(y)&&t(y)(...a)),class:"pointer showMore"},"\u663E\u793A\u5168\u90E8...")):_("",!0)])}}});const et=R(Ze,[["__scopeId","data-v-31c94d5a"]]),tt={class:"comments-container content-card"},ot={class:"tip"},nt={class:"comment-content line-4"},st={key:0,class:"covers-container"},it={class:"list-style-init flex operator"},ut=["onClick"],lt=["onClick"],rt=S({__name:"comments",props:{data:null,articleId:null,pageNum:null,scrollTo:null,total:null,articleAuthorId:null,commentsTotal:null},emits:["pageNumChange","reQueryComments"],setup(e,{emit:n}){const s=e,r=w(()=>s.scrollTo),{currenId:p,reply:u,userInfo:m,remove:h}=se(n),{comments:y}=He(r);return(d,f)=>{const C=j,a=ie;return l(),v("div",tt,[i("span",ot,"\u672C\u9875\u8BC4\u8BBA/\u56DE\u590D\u5171 "+b(t(P)(e.total))+" \u6761",1),e.data.length?(l(),v("div",{key:0,class:"comments-list mt-20 content-card",ref_key:"comments",ref:y},[(l(!0),v(T,null,D(e.data,(o,g)=>(l(),v("div",{class:"comment-item",key:g},[$(z,{"user-info":o.authorInfo,"publish-time":o.createTime},null,8,["user-info","publish-time"]),i("p",nt,b(o.content),1),o.images?(l(),v("div",st,[(l(!0),v(T,null,D(o.images.split("~$^$~"),(c,I)=>(l(),E(C,{src:c,"preview-src-list":o.images.split("~$^$~"),key:I,"initial-index":I,fit:"cover",lazy:!0,loading:"lazy",class:"mr-10 cover-item","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list","initial-index"]))),128))])):_("",!0),i("ul",it,[i("li",{class:"mr-10",onClick:c=>t(u)(o.commentId)},"\u56DE\u590D",8,ut),t(m).uid===o.authorId?(l(),v("li",{key:0,onClick:c=>t(h)(o.commentId,e.articleId,1)}," \u5220\u9664 ",8,lt)):_("",!0)]),t(p)===o.commentId?(l(),E(V,{key:1,"article-id":e.articleId,level:2,"poster-comment-id":o.commentId,"reply-comment-id":o.commentId,"reply-comment-level":o.level,"reply-author-id":o.authorId,"reply-article-author-id":e.articleAuthorId,onReQueryComments:f[0]||(f[0]=c=>d.$emit("reQueryComments"))},null,8,["article-id","poster-comment-id","reply-comment-id","reply-comment-level","reply-author-id","reply-article-author-id"])):_("",!0),o.children.length?(l(),E(et,{key:2,data:o.children,"comment-id":o.commentId,"article-id":e.articleId,onReQueryComments:f[1]||(f[1]=c=>d.$emit("reQueryComments"))},null,8,["data","comment-id","article-id"])):_("",!0)]))),128))],512)):_("",!0),e.data.length?(l(),E(a,{key:1,background:"",layout:"prev, pager, next",total:e.commentsTotal,class:"mt-4 mt-20","current-page":e.pageNum,onCurrentChange:f[2]||(f[2]=o=>d.$emit("pageNumChange",o))},null,8,["total","current-page"])):_("",!0),e.data.length?_("",!0):(l(),E(_e,{key:2,title:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8868\u8BC4\u8BBA..."}))])}}});const at=R(rt,[["__scopeId","data-v-e3386f8f"]]);function ct(e,n){const s=K({title:"",content:"",professional:"",authorId:0,likes:[],commentTotal:0,hot:0,createTime:"",updateTime:"",articleId:e.value,introduce:"",authorInfo:Ce,comments:[]}),r=F(0),p=F(0),u=K({pageNum:1,pageSize:10,articleId:e.value}),m=F();async function h(){if(!e.value){A("\u51FA\u9519\u4E86");return}const o=await $e({articleId:e.value});o.code==200&&mt(s,o.data)}async function y(){u.articleId=e.value;const o=await Be(u);o.code==200&&(s.comments=o.data,r.value=o.total,p.value=o.commentsTotal)}function d(){const o=document.querySelector(".anchor");te(oe(o)-65)}function f(o){u.pageNum=o,y(),d()}async function C(o){if(!Z())return A("\u8BF7\u5148\u767B\u5F55");if(o){L("\u70B9\u8FC7\u8D5E\u4E86, \u4E0D\u7528\u518D\u70B9\u4E86\uFF5E");return}const{userInfo:g}=Q(),{code:c}=await Fe({articleId:e.value,userId:g.uid});c==200&&s.likes.push(g.uid)}const a=ee(function(){isNaN(e.value)||(y(),h())});return U(()=>e.value,()=>{a()}),ye(async()=>{if(isNaN(n.value))return;const{data:o,code:g,msg:c}=await we({commentId:n.value,pageSize:u.pageSize,articleId:e.value});g===200?(u.pageNum=o.pageNum,s.comments=o.data,m.value=o.position):A(c)}),J(a),W(()=>s.content=""),{commentsConditions:u,total:r,position:m,commentsTotal:p,article:s,like:C,queryArticle:h,pageNumChange:f,queryComments:y,toCommentFieldTop:d}}function mt(e,n){e.articleId=n.articleId,e.title=n.title,e.content=n.content,e.commentTotal=n.commentTotal,e.professional=n.professional,e.authorId=n.authorId,e.likes=n.likes,e.createTime=n.createTime,e.updateTime=n.updateTime,e.introduce=n.introduce,e.authorInfo=n.authorInfo}function dt(e){const n=F(!1);function s(){n.value=!1,setTimeout(()=>n.value=!0,200)}return J(()=>{s()}),U(()=>e.value,()=>{s()}),{delay:n}}const x=e=>(X("data-v-587ff286"),e=e(),G(),e),pt={class:"community-detail flex"},vt={class:"main-content mr-20"},yt={class:"main content-card"},ft=["innerHTML"],ht={class:"supports mb-20"},gt=x(()=>i("i",{class:"iconfont icon-like font-20"},null,-1)),_t=x(()=>i("i",{class:"iconfont icon-comment font-20"},null,-1)),Ct=x(()=>i("i",{class:"iconfont icon-share font-20"},null,-1)),It=x(()=>i("i",{class:"iconfont icon-edit font-20"},null,-1)),kt={class:"pointer tag mr-20"},$t=x(()=>i("i",{class:"anchor"},null,-1)),Ft={class:"slide-content"},Et=S({__name:"communityDetail",setup(e){const n=ke(),s=w(()=>parseInt(n.query.articleId)),r=w(()=>parseInt(n.query.posterCommentId)),{userInfo:p}=Q(),{article:u,total:m,position:h,commentsTotal:y,like:d,pageNumChange:f,toCommentFieldTop:C,queryComments:a,commentsConditions:o}=ct(s,r),{delay:g}=dt(s),c=w(()=>u.likes.includes(p.uid)),I=w(()=>u.authorId==p.uid);return(M,k)=>{const H=ue;return l(),v("div",pt,[i("div",vt,[i("div",yt,[$(z,{class:"user-info","user-info":t(u).authorInfo,"publish-time":t(u).createTime},null,8,["user-info","publish-time"]),i("article",{class:"content",innerHTML:t(u).content},null,8,ft),i("div",ht,[i("span",{onClick:k[0]||(k[0]=B=>t(d)(t(c))),class:fe({clicked:t(c)})},[gt,q(" "+b(t(P)(t(u).likes.length)),1)],2),i("span",{onClick:k[1]||(k[1]=(...B)=>t(C)&&t(C)(...B))},[_t,q(" "+b(t(P)(t(u).comments.length)),1)]),i("span",null,[$(H,{placement:"bottom",content:"\u5206\u4EAB\u7ED9\u670B\u53CB"},{default:O(()=>[Ct]),_:1})]),t(I)?(l(),v("span",{key:0,onClick:k[2]||(k[2]=B=>M.$router.push(`/community/editor?articleId=${t(s)}`))},[$(H,{placement:"bottom",content:"\u7F16\u8F91"},{default:O(()=>[It]),_:1})])):_("",!0)]),i("span",kt,"#"+b(t(u).professional),1),i("span",{class:"pointer hover",onClick:k[3]||(k[3]=B=>M.$router.back())},"\u8FD4\u56DE\u4E0A\u4E00\u9875"),i("span",{class:"pointer hover back absolute",onClick:k[4]||(k[4]=B=>M.$router.back())},"\u8FD4\u56DE\u4E0A\u4E00\u9875")]),$(V,{"article-id":t(s),level:1,"reply-article-author-id":t(u).authorId,onReQueryComments:t(a)},null,8,["article-id","reply-article-author-id","onReQueryComments"]),$t,$(at,{data:t(u).comments,"article-id":t(s),total:t(m),"page-num":t(o).pageNum,"scroll-to":t(h),"comments-total":t(y),"article-author-id":t(u).authorId,onPageNumChange:t(f),onReQueryComments:t(a)},null,8,["data","article-id","total","page-num","scroll-to","comments-total","article-author-id","onPageNumChange","onReQueryComments"])]),i("div",Ft,[$(le,{class:"slide-item"}),$(re),t(g)?(l(),E(Ie,{key:0,class:"slide-item menu-bar content-card",body:".content",style:{width:"300px"}})):_("",!0)])])}}});const Zt=R(Et,[["__scopeId","data-v-587ff286"]]);export{Zt as default};
