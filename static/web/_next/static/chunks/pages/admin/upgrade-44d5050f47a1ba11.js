(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9262],{70918:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/upgrade",function(){return e(97644)}])},97644:function(n,t,e){"use strict";e.r(t);var r=e(85893),c=e(67294),o=e(21364),a=e(6880),s=e(48213),u=e(64777);const{Title:i}=a.Z,f=n=>{const t=Object.values(n),e=[{title:"Name",dataIndex:"name",key:"name",render:(n,t)=>(0,r.jsx)("a",{href:t.browser_download_url,children:n})},{title:"Size",dataIndex:"size",key:"size",render:n=>"".concat((n/1024/1024).toFixed(2)," MB")}];return(0,r.jsx)(s.Z,{dataSource:t,columns:e,rowKey:n=>n.id,size:"large",pagination:!1})};t.default=()=>{const[n,t]=(0,c.useState)({html_url:"",name:"",created_at:null,body:"",assets:[]});return(0,c.useEffect)((()=>{(async()=>{try{const n=await(0,u.Kt)();t(n)}catch(n){console.log("==== error",n)}})()}),[]),n?(0,r.jsxs)("div",{className:"upgrade-page",children:[(0,r.jsx)(i,{level:2,children:(0,r.jsx)("a",{href:n.html_url,children:n.name})}),(0,r.jsx)(i,{level:5,children:new Date(n.created_at).toDateString()}),(0,r.jsx)(o.D,{children:n.body}),(0,r.jsx)("h3",{children:"Downloads"}),(0,r.jsx)(f,{...n.assets})]}):null}},64777:function(n,t,e){"use strict";e.d(t,{$i:function(){return G},$l:function(){return $},Bu:function(){return _},E8:function(){return z},Ff:function(){return I},GC:function(){return y},GR:function(){return Y},HP:function(){return P},IO:function(){return B},Kp:function(){return w},Kt:function(){return J},M_:function(){return S},N$:function(){return Q},NE:function(){return u},NM:function(){return p},Q_:function(){return i},Qc:function(){return x},RB:function(){return g},UJ:function(){return U},WB:function(){return a},WE:function(){return N},WQ:function(){return E},Wr:function(){return A},XA:function(){return M},Y9:function(){return C},a_:function(){return h},ao:function(){return l},bl:function(){return f},e_:function(){return O},hn:function(){return j},iG:function(){return D},iV:function(){return d},jr:function(){return b},kb:function(){return K},kg:function(){return F},ms:function(){return T},nx:function(){return k},op:function(){return X},qk:function(){return m},rQ:function(){return W},sG:function(){return v},um:function(){return R}});var r=e(34155);const c=r.env.NEXT_PUBLIC_ADMIN_USERNAME,o=r.env.NEXT_PUBLIC_ADMIN_STREAMKEY,a="/",s="".concat(a,"api/admin/"),u=15e3,i="".concat(s,"status"),f=("".concat(s,"disconnect"),"".concat(s,"changekey"),"".concat(s,"serverconfig")),l="".concat(s,"config"),d="".concat(s,"viewersOverTime"),h="".concat(s,"viewers"),w="".concat(s,"chat/clients"),m="".concat(s,"chat/users/disabled"),p="".concat(s,"chat/users/setenabled"),_="".concat(s,"chat/users/ipbans"),g="".concat(s,"chat/users/ipbans/remove"),b="".concat(s,"chat/users/setmoderator"),y="".concat(s,"chat/users/moderators"),k="".concat(s,"hardwarestats"),v="".concat(s,"logs"),E="".concat(s,"logs/warnings"),N="".concat(s,"chat/messages"),j="/api/admin/chat/messagevisibility",x="".concat(s,"emoji/upload"),I="".concat(s,"emoji/delete"),T="".concat(s,"accesstokens"),A="".concat(s,"accesstokens/delete"),B="".concat(s,"accesstokens/create"),M="".concat(s,"webhooks"),S="".concat(s,"webhooks/delete"),D="".concat(s,"webhooks/create"),G="".concat(a,"api/socialplatforms"),O=("".concat(s,"api/externalactions"),"".concat(s,"federation/send")),P="".concat(s,"followers"),z="".concat(s,"followers/pending"),C="".concat(s,"followers/blocked"),K="".concat(s,"followers/approve"),X="".concat(s,"federation/actions"),Q="".concat(s,"metrics/video"),R="".concat(s,"config/streamkeys"),U="".concat(s,"yp/reset");async function W(n,t){const{data:e,method:r="GET",auth:a=!0}=t||{},s={method:r};if(e&&(s.body=JSON.stringify(e)),a&&c&&o){const n=btoa("".concat(c,":").concat(o));s.headers={Authorization:"Basic ".concat(n)},s.mode="cors",s.credentials="include"}try{const t=await fetch(n,s),e=await t.json();if(!t.ok){const n=e.message||"An error has occurred: ".concat(t.status);throw new Error(n)}return e}catch(u){return console.error(u),u}}async function $(n,t){return W(n,{method:"GET",auth:!1,...t})}async function F(n){try{const t=await fetch(n,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){const n="An error has occured: ".concat(t.status);throw new Error(n)}return await t.json()}catch(t){console.log(t)}return{}}async function J(){return F("https://api.github.com/repos/owncast/owncast/releases/latest")}const L=/^\d+(\.\d+){0,2}$/;async function Y(n){let t=(await J()).tag_name;return"v"===t.substr(0,1)&&(t=t.substr(1)),function(n,t){if(!n||!t||0===n.length||0===t.length)return!1;if(n===t)return!0;if(L.test(n)&&L.test(t)){const e=n.split(".");for(;e.length<3;)e.push("0");const r=t.split(".");for(;r.length<3;)r.push("0");for(let n=0;n<3;n++){const t=parseInt(e[n],10),c=parseInt(r[n],10);if(t!==c)return t>c}return!0}return n>=t}(n,t)?null:t}}},function(n){n.O(0,[5596,481,173,1407,4083,6880,3174,1577,6386,3013,3698,2459,8213,211,9774,2888,179],(function(){return t=70918,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
//# sourceMappingURL=upgrade-44d5050f47a1ba11.js.map