"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{24969:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(42135),c=function(e,t){return r.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};c.displayName="PlusOutlined";var l=r.forwardRef(c)},90575:function(e,t,n){n.d(t,{Z:function(){return le}});var a=n(4942),r=n(87462),o=n(97937),i=n(89705),c=n(24969),l=n(94184),u=n.n(l),s=n(1413),f=n(97685),d=n(71002),v=n(45987),m=n(67294),b=n(31131),p=n(21770),h=n(62874),y=(0,m.createContext)(null);var Z=m.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,c=e.tabKey,l=e.children;return m.createElement("div",{id:o&&"".concat(o,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(c),"aria-hidden":!i,style:r,className:u()(n,i&&"".concat(n,"-active"),a),ref:t},l)})),g=["key","forceRender","style","className"];function E(e){var t=e.id,n=e.activeKey,o=e.animated,i=e.tabPosition,c=e.destroyInactiveTabPane,l=m.useContext(y),f=l.prefixCls,d=l.tabs,b=o.tabPane,p="".concat(f,"-tabpane");return m.createElement("div",{className:u()("".concat(f,"-content-holder"))},m.createElement("div",{className:u()("".concat(f,"-content"),"".concat(f,"-content-").concat(i),(0,a.Z)({},"".concat(f,"-content-animated"),b))},d.map((function(e){var a=e.key,i=e.forceRender,l=e.style,f=e.className,d=(0,v.Z)(e,g),y=a===n;return m.createElement(h.Z,(0,r.Z)({key:a,visible:y,forceRender:i,removeOnLeave:!!c,leavedClassName:"".concat(p,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,i=e.className;return m.createElement(Z,(0,r.Z)({},d,{prefixCls:p,id:t,tabKey:a,animated:b,active:y,style:(0,s.Z)((0,s.Z)({},l),o),className:u()(f,i),ref:n}))}))}))))}var k=n(74902),x=n(75164),w=n(42550),C=n(48555);function P(e){var t=(0,m.useRef)(),n=(0,m.useRef)(!1);return(0,m.useEffect)((function(){return n.current=!1,function(){n.current=!0,x.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(x.Z.cancel(t.current),t.current=(0,x.Z)((function(){e.apply(void 0,r)})))}}var N=n(15105);function R(e,t){var n,r=e.prefixCls,o=e.id,i=e.active,c=e.tab,l=c.key,s=c.label,f=c.disabled,d=c.closeIcon,v=e.closable,b=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,g=e.onFocus,E=e.style,k="".concat(r,"-tab");m.useEffect((function(){return Z}),[]);var x=h&&!1!==v&&!f;function w(e){f||y(e)}var C=m.createElement("div",{key:l,ref:t,className:u()(k,(n={},(0,a.Z)(n,"".concat(k,"-with-remove"),x),(0,a.Z)(n,"".concat(k,"-active"),i),(0,a.Z)(n,"".concat(k,"-disabled"),f),n)),style:E,onClick:w},m.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(l),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(l),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[N.Z.SPACE,N.Z.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:g},s),x&&m.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:l,event:t})}},d||h.removeIcon||"\xd7"));return b?b(C):C}var T=m.forwardRef(R),I={width:0,height:0,left:0,top:0};var S={width:0,height:0,left:0,top:0,right:0};var M=n(97868),B=n(60057);function O(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?m.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var L=m.forwardRef(O);function A(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,c=e.mobile,l=e.moreIcon,s=void 0===l?"More":l,d=e.moreTransitionName,v=e.style,b=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,k=e.popupClassName,x=(0,m.useState)(!1),w=(0,f.Z)(x,2),C=w[0],P=w[1],R=(0,m.useState)(null),T=(0,f.Z)(R,2),I=T[0],S=T[1],O="".concat(r,"-more-popup"),A="".concat(n,"-dropdown"),D=null!==I?"".concat(O,"-").concat(I):null,j=null===i||void 0===i?void 0:i.dropdownAriaLabel;var K=m.createElement(M.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),P(!1)},prefixCls:"".concat(A,"-menu"),id:O,tabIndex:-1,role:"listbox","aria-activedescendant":D,selectedKeys:[I],"aria-label":void 0!==j?j:"expanded dropdown"},o.map((function(e){var t=p&&!1!==e.closable&&!e.disabled;return m.createElement(M.sN,{key:e.key,id:"".concat(O,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},m.createElement("span",null,e.label),t&&m.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(A,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),p.onEdit("remove",{key:a,event:n})}},e.closeIcon||p.removeIcon||"\xd7"))})));function q(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void S(i.key)}}(0,m.useEffect)((function(){var e=document.getElementById(D);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),(0,m.useEffect)((function(){C||S(null)}),[C]);var W=(0,a.Z)({},y?"marginRight":"marginLeft",h);o.length||(W.visibility="hidden",W.order=1);var _=u()((0,a.Z)({},"".concat(A,"-rtl"),y)),V=c?null:m.createElement(B.Z,{prefixCls:A,overlay:K,trigger:["hover"],visible:!!o.length&&C,transitionName:d,onVisibleChange:P,overlayClassName:u()(_,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},m.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":O,id:"".concat(r,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(C)switch(t){case N.Z.UP:q(-1),e.preventDefault();break;case N.Z.DOWN:q(1),e.preventDefault();break;case N.Z.ESC:P(!1);break;case N.Z.SPACE:case N.Z.ENTER:null!==I&&g(I,e)}else[N.Z.DOWN,N.Z.SPACE,N.Z.ENTER].includes(t)&&(P(!0),e.preventDefault())}},s));return m.createElement("div",{className:u()("".concat(n,"-nav-operations"),b),style:v,ref:t},V,m.createElement(L,{prefixCls:n,locale:i,editable:p}))}var D=m.memo(m.forwardRef(A),(function(e,t){return t.tabMoving})),j=Math.pow(.995,20);function K(e,t){var n=m.useRef(e),a=m.useState({}),r=(0,f.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}function q(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}var W=m.forwardRef((function(e,t){var n,a=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i={};return"object"!==(0,d.Z)(o)||m.isValidElement(o)?i.right=o:i=o,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?m.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null})),_=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,r=t.offsetHeight;return[a,void 0===r?0:r]},V=function(e,t){return e[t?0:1]};function z(e,t){var n,o=m.useContext(y),i=o.prefixCls,c=o.tabs,l=e.className,d=e.style,v=e.id,b=e.animated,p=e.activeKey,h=e.rtl,Z=e.extra,g=e.editable,E=e.locale,N=e.tabPosition,R=e.tabBarGutter,M=e.children,B=e.onTabClick,O=e.onTabScroll,A=(0,m.useRef)(),z=(0,m.useRef)(),G=(0,m.useRef)(),F=(0,m.useRef)(),H=(0,m.useRef)(),X=(0,m.useRef)(),Y=(0,m.useRef)(),J=function(){var e=(0,m.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,m.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),U=(0,f.Z)(J,2),Q=U[0],$=U[1],ee="top"===N||"bottom"===N,te=K(0,(function(e,t){ee&&O&&O({direction:e>t?"left":"right"})})),ne=(0,f.Z)(te,2),ae=ne[0],re=ne[1],oe=K(0,(function(e,t){!ee&&O&&O({direction:e>t?"top":"bottom"})})),ie=(0,f.Z)(oe,2),ce=ie[0],le=ie[1],ue=(0,m.useState)([0,0]),se=(0,f.Z)(ue,2),fe=se[0],de=se[1],ve=(0,m.useState)([0,0]),me=(0,f.Z)(ve,2),be=me[0],pe=me[1],he=(0,m.useState)([0,0]),ye=(0,f.Z)(he,2),Ze=ye[0],ge=ye[1],Ee=(0,m.useState)([0,0]),ke=(0,f.Z)(Ee,2),xe=ke[0],we=ke[1],Ce=function(e){var t=(0,m.useRef)([]),n=(0,m.useState)({}),a=(0,f.Z)(n,2)[1],r=(0,m.useRef)("function"===typeof e?e():e),o=P((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Pe=(0,f.Z)(Ce,2),Ne=Pe[0],Re=Pe[1],Te=function(e,t,n){return(0,m.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||I,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,u=t.get(l);u||(u=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||I);var f=a.get(l)||(0,s.Z)({},u);f.right=o-f.left-f.width,a.set(l,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,Ne,be[0]),Ie=V(fe,ee),Se=V(be,ee),Me=V(Ze,ee),Be=V(xe,ee),Oe=Ie<Se+Me?Ie-Be:Ie-Me,Le="".concat(i,"-nav-operations-hidden"),Ae=0,De=0;function je(e){return e<Ae?Ae:e>De?De:e}ee&&h?(Ae=0,De=Math.max(0,Se-Oe)):(Ae=Math.min(0,Oe-Se),De=0);var Ke=(0,m.useRef)(),qe=(0,m.useState)(),We=(0,f.Z)(qe,2),_e=We[0],Ve=We[1];function ze(){Ve(Date.now())}function Ge(){window.clearTimeout(Ke.current)}!function(e,t){var n=(0,m.useState)(),a=(0,f.Z)(n,2),r=a[0],o=a[1],i=(0,m.useState)(0),c=(0,f.Z)(i,2),l=c[0],u=c[1],s=(0,m.useState)(0),d=(0,f.Z)(s,2),v=d[0],b=d[1],p=(0,m.useState)(),h=(0,f.Z)(p,2),y=h[0],Z=h[1],g=(0,m.useRef)(),E=(0,m.useRef)(),k=(0,m.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,s=i-r.y;t(c,s);var f=Date.now();u(f),b(f-l),Z({x:c,y:s})}},onTouchEnd:function(){if(r&&(o(null),Z(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<.1)return;var c=e,l=n;g.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(c*=j),20*(l*=j))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},m.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(F,(function(e,t){function n(e,t){e((function(e){return je(e+t)}))}return!(Ie>=Se)&&(ee?n(re,e):n(le,t),Ge(),ze(),!0)})),(0,m.useEffect)((function(){return Ge(),_e&&(Ke.current=window.setTimeout((function(){Ve(0)}),100)),Ge}),[_e]);var Fe=function(e,t,n,a,r,o,i){var c,l,u,s=i.tabs,f=i.tabPosition,d=i.rtl;return["top","bottom"].includes(f)?(c="width",l=d?"right":"left",u=Math.abs(n)):(c="height",l="top",u=-n),(0,m.useMemo)((function(){if(!s.length)return[0,0];for(var n=s.length,a=n,r=0;r<n;r+=1){var o=e.get(s[r].key)||S;if(o[l]+o[c]>u+t){a=r-1;break}}for(var i=0,f=n-1;f>=0;f-=1)if((e.get(s[f].key)||S)[l]<u){i=f+1;break}return[i,a]}),[e,t,a,r,o,u,f,s.map((function(e){return e.key})).join("_"),d])}(Te,Oe,ee?ae:ce,Se,Me,Be,(0,s.Z)((0,s.Z)({},e),{},{tabs:c})),He=(0,f.Z)(Fe,2),Xe=He[0],Ye=He[1],Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Te.get(e)||{width:0,height:0,left:0,right:0,top:0};if(ee){var n=ae;h?t.right<ae?n=t.right:t.right+t.width>ae+Oe&&(n=t.right+t.width-Oe):t.left<-ae?n=-t.left:t.left+t.width>-ae+Oe&&(n=-(t.left+t.width-Oe)),le(0),re(je(n))}else{var a=ce;t.top<-ce?a=-t.top:t.top+t.height>-ce+Oe&&(a=-(t.top+t.height-Oe)),re(0),le(je(a))}},Ue={};"top"===N||"bottom"===N?Ue[h?"marginRight":"marginLeft"]=R:Ue.marginTop=R;var Qe=c.map((function(e,t){var n=e.key;return m.createElement(T,{id:v,prefixCls:i,key:n,tab:e,style:0===t?void 0:Ue,closable:e.closable,editable:g,active:n===p,renderWrapper:M,removeAriaLabel:null===E||void 0===E?void 0:E.removeAriaLabel,ref:Q(n),onClick:function(e){B(n,e)},onRemove:function(){$(n)},onFocus:function(){Je(n),ze(),F.current&&(h||(F.current.scrollLeft=0),F.current.scrollTop=0)}})})),$e=P((function(){var e=_(A),t=_(z),n=_(G);de([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=_(Y);ge(a);var r=_(X);we(r);var o=_(H);pe([o[0]-a[0],o[1]-a[1]]),Re((function(){var e=new Map;return c.forEach((function(t){var n=t.key,a=Q(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),et=c.slice(0,Xe),tt=c.slice(Ye+1),nt=[].concat((0,k.Z)(et),(0,k.Z)(tt)),at=(0,m.useState)(),rt=(0,f.Z)(at,2),ot=rt[0],it=rt[1],ct=Te.get(p),lt=(0,m.useRef)();function ut(){x.Z.cancel(lt.current)}(0,m.useEffect)((function(){var e={};return ct&&(ee?(h?e.right=ct.right:e.left=ct.left,e.width=ct.width):(e.top=ct.top,e.height=ct.height)),ut(),lt.current=(0,x.Z)((function(){it(e)})),ut}),[ct,ee,h]),(0,m.useEffect)((function(){Je()}),[p,q(ct),q(Te),ee]),(0,m.useEffect)((function(){$e()}),[h]);var st,ft,dt,vt,mt=!!nt.length,bt="".concat(i,"-nav-wrap");return ee?h?(ft=ae>0,st=ae+Ie<Se):(st=ae<0,ft=-ae+Ie<Se):(dt=ce<0,vt=-ce+Ie<Se),m.createElement(C.default,{onResize:$e},m.createElement("div",{ref:(0,w.x1)(t,A),role:"tablist",className:u()("".concat(i,"-nav"),l),style:d,onKeyDown:function(){ze()}},m.createElement(W,{ref:z,position:"left",extra:Z,prefixCls:i}),m.createElement("div",{className:u()(bt,(n={},(0,a.Z)(n,"".concat(bt,"-ping-left"),st),(0,a.Z)(n,"".concat(bt,"-ping-right"),ft),(0,a.Z)(n,"".concat(bt,"-ping-top"),dt),(0,a.Z)(n,"".concat(bt,"-ping-bottom"),vt),n)),ref:F},m.createElement(C.default,{onResize:$e},m.createElement("div",{ref:H,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(ae,"px, ").concat(ce,"px)"),transition:_e?"none":void 0}},Qe,m.createElement(L,{ref:Y,prefixCls:i,locale:E,editable:g,style:(0,s.Z)((0,s.Z)({},0===Qe.length?void 0:Ue),{},{visibility:mt?"hidden":null})}),m.createElement("div",{className:u()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),b.inkBar)),style:ot})))),m.createElement(D,(0,r.Z)({},e,{removeAriaLabel:null===E||void 0===E?void 0:E.removeAriaLabel,ref:X,prefixCls:i,tabs:nt,className:!mt&&Le,tabMoving:!!_e})),m.createElement(W,{ref:G,position:"right",extra:Z,prefixCls:i})))}var G=m.forwardRef(z),F=["renderTabBar"],H=["label","key"];function X(e){var t=e.renderTabBar,n=(0,v.Z)(e,F),a=(0,m.useContext)(y).tabs;return t?t((0,s.Z)((0,s.Z)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,v.Z)(e,H);return m.createElement(Z,(0,r.Z)({tab:t,key:n,tabKey:n},a))}))}),G):m.createElement(G,n)}n(80334);var Y=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],J=0;function U(e,t){var n,o=e.id,i=e.prefixCls,c=void 0===i?"rc-tabs":i,l=e.className,h=e.items,Z=e.direction,g=e.activeKey,k=e.defaultActiveKey,x=e.editable,w=e.animated,C=e.tabPosition,P=void 0===C?"top":C,N=e.tabBarGutter,R=e.tabBarStyle,T=e.tabBarExtraContent,I=e.locale,S=e.moreIcon,M=e.moreTransitionName,B=e.destroyInactiveTabPane,O=e.renderTabBar,L=e.onChange,A=e.onTabClick,D=e.onTabScroll,j=e.getPopupContainer,K=e.popupClassName,q=(0,v.Z)(e,Y),W=m.useMemo((function(){return(h||[]).filter((function(e){return e&&"object"===(0,d.Z)(e)&&"key"in e}))}),[h]),_="rtl"===Z,V=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,s.Z)({inkBar:!0},"object"===(0,d.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),z=(0,m.useState)(!1),G=(0,f.Z)(z,2),F=G[0],H=G[1];(0,m.useEffect)((function(){H((0,b.Z)())}),[]);var U=(0,p.Z)((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:k}),Q=(0,f.Z)(U,2),$=Q[0],ee=Q[1],te=(0,m.useState)((function(){return W.findIndex((function(e){return e.key===$}))})),ne=(0,f.Z)(te,2),ae=ne[0],re=ne[1];(0,m.useEffect)((function(){var e,t=W.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,W.length-1)),ee(null===(e=W[t])||void 0===e?void 0:e.key));re(t)}),[W.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,p.Z)(null,{value:o}),ie=(0,f.Z)(oe,2),ce=ie[0],le=ie[1];(0,m.useEffect)((function(){o||(le("rc-tabs-".concat(J)),J+=1)}),[]);var ue={id:ce,activeKey:$,animated:V,tabPosition:P,rtl:_,mobile:F},se=(0,s.Z)((0,s.Z)({},ue),{},{editable:x,locale:I,moreIcon:S,moreTransitionName:M,tabBarGutter:N,onTabClick:function(e,t){null===A||void 0===A||A(e,t);var n=e!==$;ee(e),n&&(null===L||void 0===L||L(e))},onTabScroll:D,extra:T,style:R,panes:null,getPopupContainer:j,popupClassName:K});return m.createElement(y.Provider,{value:{tabs:W,prefixCls:c}},m.createElement("div",(0,r.Z)({ref:t,id:o,className:u()(c,"".concat(c,"-").concat(P),(n={},(0,a.Z)(n,"".concat(c,"-mobile"),F),(0,a.Z)(n,"".concat(c,"-editable"),x),(0,a.Z)(n,"".concat(c,"-rtl"),_),n),l)},q),undefined,m.createElement(X,(0,r.Z)({},se,{renderTabBar:O})),m.createElement(E,(0,r.Z)({destroyInactiveTabPane:B},ue,{animated:V}))))}var Q=m.forwardRef(U),$=n(53124),ee=n(97647),te=n(33603),ne={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ae=n(50344),re=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var oe=function(){return null},ie=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ce(e){var t,n=e.type,l=e.className,s=e.size,f=e.onEdit,v=e.hideAdd,b=e.centered,p=e.addIcon,h=e.children,y=e.items,Z=e.animated,g=ie(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,k=g.moreIcon,x=void 0===k?m.createElement(i.Z,null):k,w=m.useContext($.E_),C=w.getPrefixCls,P=w.direction,N=w.getPopupContainer,R=C("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===f||void 0===f||f("add"===e?a:n,e)},removeIcon:m.createElement(o.Z,null),addIcon:p||m.createElement(c.Z,null),showAdd:!0!==v});var T=C(),I=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,ae.Z)(t).map((function(e){if(m.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,o=re(n,["tab"]);return(0,r.Z)((0,r.Z)({key:String(t)},o),{label:a})}return null})))}(y,h),S=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,r.Z)({inkBar:!0},"object"===(0,d.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.Z)((0,r.Z)({},ne),{motionName:(0,te.mL)(e,"switch")})),t}(R,Z);return m.createElement(ee.Z.Consumer,null,(function(e){var o,i=void 0!==s?s:e;return m.createElement(Q,(0,r.Z)({direction:P,getPopupContainer:N,moreTransitionName:"".concat(T,"-slide-up")},g,{items:I,className:u()((o={},(0,a.Z)(o,"".concat(R,"-").concat(i),i),(0,a.Z)(o,"".concat(R,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(R,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(R,"-centered"),b),o),l),editable:t,moreIcon:x,prefixCls:R,animated:S}))}))}ce.TabPane=oe;var le=ce}}]);
//# sourceMappingURL=575-263525544d9a26fa.js.map