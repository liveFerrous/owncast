(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7095],{62433:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/messages",function(){return n(57641)}])},94538:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var s=n(85893),r=n(85402),c=n(71577),o=n(21640),a=n(82911),i=n(84674),l=n(64777);const u=e=>{let{user:t,isEnabled:n,label:u,onClick:d}=e;const h=n?"ban":"unban",m=n?(0,s.jsx)(o.Z,{style:{color:"var(--ant-error)"}}):(0,s.jsx)(a.Z,{style:{color:"var(--ant-warning)"}}),f=(0,s.jsxs)(s.Fragment,{children:["Are you sure you want to ",h," ",(0,s.jsx)("strong",{children:t.displayName}),n?" and remove their messages?":"?"]});return(0,s.jsx)(c.Z,{type:"primary",onClick:()=>{r.Z.confirm({title:"Confirm ".concat(h),content:f,onCancel:()=>{},onOk:()=>new Promise(((e,s)=>{const r=async function(e){let{id:t}=e;const s={userId:t,enabled:!n};try{return(await(0,l.rQ)(l.NM,{data:s,method:"POST",auth:!0})).success}catch(r){console.error(r)}return!1}(t);r?setTimeout((()=>{e(r),null===d||void 0===d||d()}),3e3):s()})),okType:"danger",okText:n?"Absolutely":null,icon:m})},size:"small",icon:n?(0,s.jsx)(i.Z,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:u||h})};u.defaultProps={label:"",onClick:null}},6491:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var s=n(85893),r=n(67294),c=n(85402),o=n(6880),a=n(71230),i=n(15746),l=n(27049),u=n(26713),d=n(45938),h=n(58091),m=n(96486),f=n(5152),p=n.n(f),g=n(94538),x=n(71577),b=n(21640),y=n(82911),j=n(84674),w=n(24478),v=n(64777);const k=e=>{let{user:t,onClick:n}=e;var r;const o=null===(r=t.scopes)||void 0===r?void 0:r.includes("MODERATOR"),a=o?"remove moderator":"add moderator",i=o?(0,s.jsx)(b.Z,{style:{color:"var(--ant-error)"}}):(0,s.jsx)(y.Z,{style:{color:"var(--ant-warning)"}}),l=(0,s.jsxs)(s.Fragment,{children:["Are you sure you want to ",a," ",(0,s.jsx)("strong",{children:t.displayName}),"?"]});return(0,s.jsx)(x.Z,{type:"primary",onClick:()=>{c.Z.confirm({title:"Confirm ".concat(a),content:l,onCancel:()=>{},onOk:()=>new Promise(((e,s)=>{const r=async function(e,t){let{id:n}=e;const s={userId:n,isModerator:t};try{return(await(0,v.rQ)(v.jr,{data:s,method:"POST",auth:!0})).success}catch(r){console.error(r)}return!1}(t,!o);r?setTimeout((()=>{e(r),null===n||void 0===n||n()}),3e3):s()})),okType:"danger",okText:o?"Yup!":null,icon:i})},size:"small",icon:o?(0,s.jsx)(j.Z,{twoToneColor:"#ff4d4f"}):(0,s.jsx)(w.Z,{twoToneColor:"#22bb44"}),className:"block-user-button",children:a})};k.defaultProps={onClick:null};var N=n(45840),T=n(70241);const C=p()((()=>Promise.all([n.e(4885),n.e(9915),n.e(575),n.e(7910),n.e(428),n.e(7916),n.e(2918),n.e(8119),n.e(3859),n.e(6113),n.e(8900)]).then(n.bind(n,86113)).then((e=>e.Tooltip))),{loadableGenerated:{webpack:()=>[86113]},ssr:!1}),Z=e=>{let{user:t,connectionInfo:n,children:f}=e;const[p,x]=(0,r.useState)(!1),b=()=>{x(!1)},{displayName:y,createdAt:j,previousNames:w,nameChangedAt:v,disabledAt:Z}=t,{connectedAt:A,messageCount:E,userAgent:M}=n||{};let S=null;const _=w&&[...w];w&&w.length>1&&v&&(S=new Date(v),_.reverse());const P=new Date(j),I=(0,h.Z)(P,"PP pp"),O=S?(0,d.Z)(S):null;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C,{title:(0,s.jsxs)(s.Fragment,{children:["Created at: ",I,".",(0,s.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,s.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:()=>{x(!0)},children:f})}),(0,s.jsx)(c.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(y),open:p,onOk:b,onCancel:b,children:(0,s.jsxs)("div",{className:"user-details",children:[(0,s.jsx)(o.Z.Title,{level:4,children:y}),(0,s.jsxs)("p",{className:"created-at",children:["User created at ",I,"."]}),(0,s.jsxs)(a.Z,{gutter:16,children:[n&&(0,s.jsxs)(i.Z,{md:S?12:24,children:[(0,s.jsx)(o.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,s.jsxs)("ul",{className:"connection-info",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Active for:"})," ",(0,d.Z)(new Date(A))]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Messages sent:"})," ",E]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"User Agent:"}),(0,s.jsx)("br",{}),(0,T.AB)(M)]})]})]}),S&&(0,s.jsxs)(i.Z,{md:n?12:24,children:[(0,s.jsx)(o.Z.Title,{level:5,children:"This user is also seen as:"}),(0,s.jsx)("ul",{className:"previous-names-list",children:(0,m.uniq)(_).map(((e,t)=>(0,s.jsxs)("li",{className:0===t?"latest":"",children:[(0,s.jsx)("span",{className:"user-name-item",children:e}),0===t?" (Changed ".concat(O," ago)"):""]})))})]})]}),(0,s.jsx)(l.Z,{}),(0,s.jsxs)(u.Z,{direction:"horizontal",children:[Z?(0,s.jsxs)(s.Fragment,{children:["This user was banned on ",(0,s.jsx)("code",{children:(0,N.u)(Z)}),".",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(g.e,{label:"Unban this user",user:t,isEnabled:!1,onClick:b})]}):(0,s.jsx)(g.e,{label:"Ban this user",user:t,isEnabled:!0,onClick:b}),(0,s.jsx)(k,{user:t,onClick:b})]})]})})]})};Z.defaultProps={connectionInfo:null}},45840:function(e,t,n){"use strict";n.d(t,{K:function(){return l},u:function(){return i}});var s=n(85893),r=n(48213),c=n(58091),o=n(6491),a=n(94538);function i(e){return(0,c.Z)(new Date(e),"MMM d H:mma")}const l=e=>{let{data:t}=e;const n=[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:(e,t)=>(0,s.jsx)(o.Z,{user:t,children:(0,s.jsx)("span",{className:"display-name",children:e})})},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>i(e),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:e=>e?i(e):null,sorter:(e,t)=>new Date(e.disabledAt).getTime()-new Date(t.disabledAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,s.jsx)(a.e,{user:t,isEnabled:!t.disabledAt})}];return(0,s.jsx)(r.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"small",rowKey:"id"})}},57641:function(e,t,n){"use strict";n.r(t),n.d(t,{OUTCOME_TIMEOUT:function(){return v},default:function(){return k}});var s=n(85893),r=n(67294),c=n(6880),o=n(71577),a=n(48213),i=n(89739),l=n(21640),u=n(94184),d=n.n(u),h=n(58091),m=n(64777),f=n(70241),p=n(99611),g=n(90420),x=n(5152);const b=n.n(x)()((()=>Promise.all([n.e(4885),n.e(9915),n.e(575),n.e(7910),n.e(428),n.e(7916),n.e(2918),n.e(8119),n.e(3859),n.e(6113),n.e(8900)]).then(n.bind(n,86113)).then((e=>e.Tooltip))),{loadableGenerated:{webpack:()=>[86113]},ssr:!1}),y=e=>{let{isVisible:t,message:n,setMessage:c}=e;if(!n||(0,f.Qr)(n))return null;let a=null;const[u,d]=(0,r.useState)(0),{id:h}=n||{};(0,r.useEffect)((()=>()=>{clearTimeout(a)}));let x=(0,s.jsx)(i.Z,{style:{color:"transparent"}});u&&(x=u>0?(0,s.jsx)(i.Z,{style:{color:"var(--ant-success)"}}):(0,s.jsx)(l.Z,{style:{color:"var(--ant-warning)"}}));const y="Click to ".concat(t?"hide":"show"," this message");return(0,s.jsxs)("div",{className:"toggle-switch ".concat(t?"":"hidden"),children:[(0,s.jsx)("span",{className:"outcome-icon",children:x}),(0,s.jsx)(b,{title:y,placement:"topRight",children:(0,s.jsx)(o.Z,{shape:"circle",size:"small",type:"text",icon:t?(0,s.jsx)(p.Z,{}):(0,s.jsx)(g.Z,{}),onClick:async()=>{clearTimeout(a),d(0);const e=await(0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:!t,idArray:[h]}});e.success&&"changed"===e.message?(c({...n,visible:!t}),d(1)):(c({...n,visible:t}),d(-1)),a=setTimeout((()=>{d(0)}),3e3)}})})]})};var j=n(6491);const{Title:w}=c.Z;const v=3e3;function k(){const[e,t]=(0,r.useState)([]),[n,c]=(0,r.useState)([]),[u,p]=(0,r.useState)(!1),[g,x]=(0,r.useState)(null),[b,k]=(0,r.useState)("");let N=null,T=null;const C=async()=>{try{const e=await(0,m.rQ)(m.WE,{auth:!0});(0,f.Qr)(e)?t([]):t(e)}catch(e){console.log("==== error",e)}};(0,r.useEffect)((()=>(C(),T=setInterval((()=>{C()}),m.NE),()=>{clearTimeout(N),clearTimeout(T)})),[]);const Z=function(e){return e.reduce(((e,t)=>{const n=t.user.id;return e.some((e=>e.text===n))||e.push({text:n,value:n}),e}),[]).sort(((e,t)=>{const n=e.text.toUpperCase(),s=t.text.toUpperCase();return n<s?-1:n>s?1:0}))}(e),A={selectedRowKeys:n,onChange:e=>{c(e)}},E=n=>{const s=e.findIndex((e=>e.id===n.id));e.splice(s,1,n),t([...e])},M=()=>{N=setTimeout((()=>{x(null),k("")}),v)},S=async r=>{p(!0);const o=await(0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:r,idArray:n}});if(o.success&&"changed"===o.message){x((0,s.jsx)(i.Z,{})),M();const o=[...e];n.map((t=>{const n=o.findIndex((e=>e.id===t)),s={...e[n],visible:r};return o.splice(n,1,s),null})),t(o),c([])}else x((0,s.jsx)(l.Z,{})),M();p(!1)},_=[{title:"Time",dataIndex:"timestamp",key:"timestamp",className:"timestamp-col",defaultSortOrder:"descend",render:e=>{const t=new Date(e);return(0,h.Z)(t,"PP pp")},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),width:90},{title:"User",dataIndex:"user",key:"user",className:"name-col",filters:Z,onFilter:(e,t)=>t.user.id===e,sorter:(e,t)=>e.user.displayName.localeCompare(t.user.displayName),sortDirections:["ascend","descend"],ellipsis:!0,render:e=>{const{displayName:t}=e;return(0,s.jsx)(j.Z,{user:e,children:t})},width:110},{title:"Message",dataIndex:"body",key:"body",className:"message-col",width:320,render:e=>(0,s.jsx)("div",{className:"message-contents",dangerouslySetInnerHTML:{__html:e}})},{title:"",dataIndex:"hiddenAt",key:"hiddenAt",className:"toggle-col",filters:[{text:"Visible messages",value:!0},{text:"Hidden messages",value:!1}],onFilter:(e,t)=>t.visible===e,render:(e,t)=>(0,s.jsx)(y,{isVisible:!e,message:t,setMessage:E}),width:30}],P=d()({"bulk-editor":!0,active:n.length});return(0,s.jsxs)("div",{className:"chat-messages",children:[(0,s.jsx)(w,{children:"Chat Messages"}),(0,s.jsx)("p",{children:"Manage the messages from viewers that show up on your stream."}),(0,s.jsxs)("div",{className:P,children:[(0,s.jsx)("span",{className:"label",children:"Check multiple messages to change their visibility to: "}),(0,s.jsx)(o.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"show"===b&&u,icon:"show"===b&&g,disabled:!n.length||b&&"show"!==b,onClick:()=>{k("show"),S(!0)},children:"Show"}),(0,s.jsx)(o.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"hide"===b&&u,icon:"hide"===b&&g,disabled:!n.length||b&&"hide"!==b,onClick:()=>{k("hide"),S(!1)},children:"Hide"})]}),(0,s.jsx)(a.Z,{size:"small",className:"table-container",pagination:{defaultPageSize:100,showSizeChanger:!0},scroll:{y:540},rowClassName:e=>e.hiddenAt?"hidden":"",dataSource:e,columns:_,rowKey:e=>e.id,rowSelection:A})]})}},64777:function(e,t,n){"use strict";n.d(t,{$i:function(){return I},$l:function(){return L},Bu:function(){return x},E8:function(){return U},Ff:function(){return Z},GC:function(){return j},GR:function(){return V},HP:function(){return D},IO:function(){return M},Kp:function(){return f},Kt:function(){return W},M_:function(){return _},N$:function(){return F},NE:function(){return i},NM:function(){return g},Q_:function(){return l},Qc:function(){return C},RB:function(){return b},UJ:function(){return K},WB:function(){return o},WE:function(){return N},WQ:function(){return k},Wr:function(){return E},XA:function(){return S},Y9:function(){return Q},a_:function(){return m},ao:function(){return d},bl:function(){return u},e_:function(){return O},hn:function(){return T},iG:function(){return P},iV:function(){return h},jr:function(){return y},kb:function(){return z},kg:function(){return H},ms:function(){return A},nx:function(){return w},op:function(){return B},qk:function(){return p},rQ:function(){return R},sG:function(){return v},um:function(){return G}});var s=n(34155);const r=s.env.NEXT_PUBLIC_ADMIN_USERNAME,c=s.env.NEXT_PUBLIC_ADMIN_STREAMKEY,o="/",a="".concat(o,"api/admin/"),i=15e3,l="".concat(a,"status"),u=("".concat(a,"disconnect"),"".concat(a,"changekey"),"".concat(a,"serverconfig")),d="".concat(a,"config"),h="".concat(a,"viewersOverTime"),m="".concat(a,"viewers"),f="".concat(a,"chat/clients"),p="".concat(a,"chat/users/disabled"),g="".concat(a,"chat/users/setenabled"),x="".concat(a,"chat/users/ipbans"),b="".concat(a,"chat/users/ipbans/remove"),y="".concat(a,"chat/users/setmoderator"),j="".concat(a,"chat/users/moderators"),w="".concat(a,"hardwarestats"),v="".concat(a,"logs"),k="".concat(a,"logs/warnings"),N="".concat(a,"chat/messages"),T="/api/admin/chat/messagevisibility",C="".concat(a,"emoji/upload"),Z="".concat(a,"emoji/delete"),A="".concat(a,"accesstokens"),E="".concat(a,"accesstokens/delete"),M="".concat(a,"accesstokens/create"),S="".concat(a,"webhooks"),_="".concat(a,"webhooks/delete"),P="".concat(a,"webhooks/create"),I="".concat(o,"api/socialplatforms"),O=("".concat(a,"api/externalactions"),"".concat(a,"federation/send")),D="".concat(a,"followers"),U="".concat(a,"followers/pending"),Q="".concat(a,"followers/blocked"),z="".concat(a,"followers/approve"),B="".concat(a,"federation/actions"),F="".concat(a,"metrics/video"),G="".concat(a,"config/streamkeys"),K="".concat(a,"yp/reset");async function R(e,t){const{data:n,method:s="GET",auth:o=!0}=t||{},a={method:s};if(n&&(a.body=JSON.stringify(n)),o&&r&&c){const e=btoa("".concat(r,":").concat(c));a.headers={Authorization:"Basic ".concat(e)},a.mode="cors",a.credentials="include"}try{const t=await fetch(e,a),n=await t.json();if(!t.ok){const e=n.message||"An error has occurred: ".concat(t.status);throw new Error(e)}return n}catch(i){return console.error(i),i}}async function L(e,t){return R(e,{method:"GET",auth:!1,...t})}async function H(e){try{const t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){const e="An error has occured: ".concat(t.status);throw new Error(e)}return await t.json()}catch(t){console.log(t)}return{}}async function W(){return H("https://api.github.com/repos/owncast/owncast/releases/latest")}const X=/^\d+(\.\d+){0,2}$/;async function V(e){let t=(await W()).tag_name;return"v"===t.substr(0,1)&&(t=t.substr(1)),function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if(X.test(e)&&X.test(t)){const n=e.split(".");for(;n.length<3;)n.push("0");const s=t.split(".");for(;s.length<3;)s.push("0");for(let e=0;e<3;e++){const t=parseInt(n[e],10),r=parseInt(s[e],10);if(t!==r)return t>r}return!0}return e>=t}(e,t)?null:t}},70241:function(e,t,n){"use strict";n.d(t,{AB:function(){return l},Qr:function(){return o},t5:function(){return c},wS:function(){return i}});var s=n(42238),r=n.n(s);function c(e){const t=e.split(":");t[t.length-1]="";let n=t.join(":");return n=n.slice(0,n.length-1),"[::1]"===n||"127.0.0.1"===n?"Localhost":n}function o(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function a(e,t,n){return String(t.repeat(n)+e).slice(-n)}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=Number.isFinite(+e)?Math.abs(e):0,n=Math.floor(t/86400),s=n>0?"".concat(n," day").concat(n>1?"s":""," "):"",r=Math.floor(t/3600%24),c=r||n?a("".concat(r,":"),"0",3):"",o=Math.floor(t/60%60),i=a("".concat(o,":"),"0",3),l=Math.floor(t%60),u=a("".concat(l),"0",2);return s+c+i+u}function l(e){const t=r()(e),{device:n,os:s,browser:c}=t,{major:o,name:a}=c,{version:i,name:l}=s,{model:u,type:d}=n;if("libmpv"===e)return"mpv media player";if(!a||!o||!l)return e;const h=u||d?" (".concat(u||d,")"):"";return"".concat(a," ").concat(o," on ").concat(l," ").concat(i,"\n  ").concat(h)}}},function(e){e.O(0,[3662,5596,481,173,1407,4083,6880,3174,1577,6386,3013,3698,2459,8213,715,5402,1908,1834,8067,5938,2024,9774,2888,179],(function(){return t=62433,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=messages-fdf4cde190252b52.js.map