"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1559],{51559:function(e,t,o){o.r(t),o.d(t,{EmojiPicker:function(){return r}});var n=o(85893),c=o(67294),s=o(57741);const r=e=>{let{onEmojiSelect:t,onCustomEmojiSelect:o}=e;const[r,i]=(0,c.useState)([]),u=(0,c.useRef)();return(0,c.useEffect)((()=>{(async()=>{try{const e=await fetch("/api/emoji"),t=await e.json();i(t)}catch(e){console.error("cannot fetch custom emoji",e)}})()}),[]),(0,c.useEffect)((()=>{const e=r.map((e=>({emoji:e.name,label:e.name,url:e.url})));(0,s.wU)({rootElement:u.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0}).addEventListener("emoji:select",(e=>{e.url?o(e.name,e.url):t(e.emoji)}))}),[r]),(0,n.jsx)("div",{ref:u})}}}]);
//# sourceMappingURL=1559.3b18423c6b87df59.js.map