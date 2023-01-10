(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{18957:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return s(37990)}])},37990:function(e,n,s){"use strict";s.r(n);var a=s(85893),i=s(85402),t=s(71577),r=s(6880),o=s(14670),l=s(71230),d=s(15746),c=s(67294),u=s(45697),h=s.n(u),f=s(79139),p=s(46551),m=s(6979),g=s(48186),b=s(90745),w=s(99519),v=s(41983);const y=e=>{let{cancelPressed:n,okPressed:s}=e;return(0,a.jsxs)(i.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:n,footer:(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Z,{onClick:n,children:"Do not enable"}),(0,a.jsx)(t.Z,{type:"primary",onClick:s,children:"Enable Social Features"})]}),children:[(0,a.jsx)(r.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,a.jsxs)(r.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,a.jsx)(r.Z.Paragraph,{}),(0,a.jsx)(r.Z.Title,{level:3,children:"What do you need to know?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,a.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,a.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,a.jsxs)("li",{children:["Turning on ",(0,a.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,a.jsx)(r.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,a.jsxs)(r.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})};y.propTypes={cancelPressed:h().func.isRequired,okPressed:h().func.isRequired};n.default=()=>{const{Title:e}=r.Z,[n,s]=(0,c.useState)(null),[i,t]=(0,c.useState)(!1),u=(0,c.useContext)(w.aC),{serverConfig:h,setFieldInConfigState:x}=u||{},[j,k]=(0,c.useState)(null),{federation:P,yp:S,instanceDetails:Z}=h,{enabled:N,isPrivate:U,username:_,goLiveMessage:C,showEngagement:E,blockedDomains:T}=P,{instanceUrl:L}=S,{nsfw:F}=Z,R=e=>{let{fieldName:a,value:i}=e;s({...n,[a]:i})};function D(){k(null)}function O(){try{(0,b.Si)({apiPath:b.pE,data:{value:n.blockedDomains},onSuccess:()=>{x({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),k(v.zv),setTimeout(D,b.sI)},onError:e=>{k((0,v.kg)(v.Un,e)),setTimeout(D,b.sI)}})}catch(e){console.error(e),k(v.Un)}}if((0,c.useEffect)((()=>{s({enabled:N,isPrivate:U,username:_,goLiveMessage:C,showEngagement:E,blockedDomains:T,nsfw:F,instanceUrl:S.instanceUrl})}),[h,S]),!n)return null;const I=""!==L,q=L.startsWith("https://"),M=!q&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,a.jsx)("br",{}),(0,a.jsx)(p.$7,{fieldName:"instanceUrl",...b.yi,value:n.instanceUrl,initialValue:S.instanceUrl,type:f.xA,onChange:R,onSubmit:()=>{const e=""!==n.instanceUrl,a=n.instanceUrl.startsWith("https://");e&&a||((0,b.Si)({apiPath:b.Kl.apiPath,data:{value:!1}}),s({...n,enabled:!1}))},required:!0})]}),V=(0,a.jsx)(o.Z,{message:"Only Owncast instances available on the default SSL port 443 support this feature.",type:"warning",showIcon:!0}),Y=L&&""!==new URL(L).port&&"443"!==new URL(L).port;return(0,a.jsxs)("div",{children:[(0,a.jsx)(e,{children:"Configure Social Features"}),(0,a.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,a.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(d.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[M,Y&&V,(0,a.jsx)(m.Z,{fieldName:"enabled",onChange:e=>{e?t(!0):s({...n,enabled:!1})},...b.Kl,checked:n.enabled,disabled:Y||!I||!q}),(0,a.jsx)(m.Z,{fieldName:"isPrivate",...b.LC,checked:n.isPrivate,disabled:!N}),(0,a.jsx)(m.Z,{fieldName:"nsfw",useSubmit:!0,...b.B_,checked:n.nsfw,disabled:Y||!I}),(0,a.jsx)(p.$7,{required:!0,fieldName:"username",type:f.Kx,...b.Xc,value:n.username,initialValue:_,onChange:R,disabled:!N}),(0,a.jsx)(p.$7,{fieldName:"goLiveMessage",...b.BF,type:f.Sk,value:n.goLiveMessage,initialValue:C,onChange:R,disabled:!N}),(0,a.jsx)(m.Z,{fieldName:"showEngagement",...b.FE,checked:n.showEngagement,disabled:!N})]}),(0,a.jsx)(d.Z,{span:8,className:"form-module",children:(0,a.jsx)(g.Y,{title:b.dR.label,placeholder:b.dR.placeholder,description:b.dR.tip,values:n.blockedDomains,handleDeleteIndex:function(e){n.blockedDomains.splice(e,1),O()},handleCreateString:function(e){let s;try{s=new URL(e).host}catch(a){s=e}n.blockedDomains.push(s),R({fieldName:"blockedDomains",value:n.blockedDomains}),O()},submitStatus:(0,v.kg)(j)})})]}),i&&(0,a.jsx)(y,{cancelPressed:function(){t(!1),s({...n,enabled:!1})},okPressed:function(){t(!1),s({...n,enabled:!0})}})]})}}},function(e){e.O(0,[5596,481,173,1407,4083,6880,1577,9915,715,5402,1908,789,745,2524,9774,2888,179],(function(){return n=18957,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=config-federation-7ff26a9c778f3979.js.map