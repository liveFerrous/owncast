(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2239],{8888:function(e,t,i){"use strict";i.r(t),i.d(t,{OwncastPlayer:function(){return x},default:function(){return S}});var n=i(85893),s=i(67294),r=i(4480),a=i(46977),o=i(85215),l=i(76161),h=i.n(l);i(27901);const c=e=>{let{options:t,onReady:i}=e;const r=s.useRef(null),a=s.useRef(null);return s.useEffect((()=>{if(!a.current){const e=r.current,n=a.current=(0,o.Z)(e,t,(()=>(console.debug("player is ready"),i&&i(n,o.Z))));n.autoplay(t.autoplay),n.src(t.sources)}o.Z.Vhs.xhr.beforeRequest=e=>{if(e.uri.match("m3u8")){const t=Math.random().toString(16).substr(2,8);e.uri="".concat(e.uri,"?cachebust=").concat(t)}return e}}),[t,r]),(0,n.jsx)("div",{"data-vjs-player":!0,children:(0,n.jsx)("video",{ref:r,className:"video-js vjs-big-play-centered vjs-show-big-play-button-on-pause ".concat(h().player," vjs-owncast")})})};var u=class{start(){this.stop(),this.timer=setInterval((()=>{!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()}),4e3)}stop(){clearInterval(this.timer)}};const d={position:"absolute",width:"100%",height:"100%"},m=e=>{let{src:t="",width:i,height:r,objectFit:a="fill",duration:o="1s"}=e;const l=(0,s.useMemo)((()=>({display:"inline-block",position:"relative",width:i,height:r})),[i,r]),h=(0,s.useMemo)((()=>[{...d,objectFit:a,opacity:0,transition:"opacity ".concat(o)},{...d,objectFit:a,opacity:1,transition:"opacity ".concat(o)},{...d,objectFit:a,opacity:0}]),[a,o]),[c,u]=(0,s.useState)(0),[m,f]=(0,s.useState)(["",""]),g=t!==m[1]?t:"",p=()=>{u((c+1)%3),f([m[1],g])};return(0,n.jsx)("span",{style:l,children:[...m,g].map(((e,t)=>""!==e&&(0,n.jsx)("img",{src:e,alt:"",style:h[t],onLoad:2===t?p:void 0},e)))})};m.defaultProps={objectFit:"fill",duration:"3s"};var f=i(70034),g=i.n(f);const p=e=>{let t,{online:i,initialSrc:r,src:a}=e;const[o,l]=(0,s.useState)(r),[h,c]=(0,s.useState)("0s");return(0,s.useEffect)((()=>{clearInterval(t),t=setInterval((()=>{"0s"===h&&c("3s"),l("".concat(a,"?").concat(Date.now()))}),2e4)}),[]),(0,n.jsxs)("div",{className:g().poster,children:[!i&&(0,n.jsx)("img",{src:r,alt:"logo"}),i&&(0,n.jsx)(m,{src:o,duration:h,objectFit:"cover",width:"100%",height:"100%"})]})};var y=i(72581),b=i(77466);var v=class{stop(){clearInterval(this.sendMetricsTimer),this.player.off()}setClockSkew(e){this.clockSkewMs=e}videoJSReady(){const e=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!e,e.on("usage",(e=>{"vhs-unknown-waiting"===e.name&&this.setIsBuffering(!0),"vhs-rendition-change-abr"===e.name&&this.incrementQualityVariantChanges()}));this.player.textTracks().addEventListener("cuechange",(()=>{this.incrementQualityVariantChanges()}))}handlePlaying(){clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval((()=>{this.collectPlaybackMetrics()}),5e3)}handleEnded(){clearInterval(this.collectPlaybackMetricsTimer)}handleBuffering(){this.incrementErrorCount(1),this.setIsBuffering(!0)}handleNoLongerBuffering(){this.setIsBuffering(!1)}handleError(){this.incrementErrorCount(1)}incrementErrorCount(e){this.errors+=e}incrementQualityVariantChanges(){this.hasPerformedInitialVariantChange?this.qualityVariantChanges++:this.hasPerformedInitialVariantChange=!0}setIsBuffering(e){this.isBuffering=e,e?this.bufferingDurationTimer=setTimeout((()=>{this.incrementErrorCount(1)}),500):clearTimeout(this.bufferingDurationTimer)}trackSegmentDownloadTime(e){this.segmentDownloadTime.push(e)}trackBandwidth(e){this.bandwidthTracking.push(e)}trackLatency(e){this.latencyTracking.push(e)}collectPlaybackMetrics(){const e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs)return;if(this.player.paused())return;if(2!==this.player.networkState())return;const t=e.vhs.systemBandwidth;this.trackBandwidth(t);try{const t=function(e){const t=e.vhs.playlists.media(),i=e.currentTime();let n;for(let s=0,r=t.segments.length;s<r;s++)if(i<t.segments[s].end){n=t.segments[s];break}return n||([n]=t.segments),n}(e);if(!t||!t.dateTimeObject)return;const i=t.dateTimeObject.getTime(),n=(new Date).getTime()+this.clockSkewMs-i;if(n<0||n/1e3>=40)return;this.trackLatency(n)}catch(i){console.warn(i)}}async send(){if(0===this.segmentDownloadTime.length)return;if(!this.player||this.player.paused())return;const e=this.errors;let t;if(this.supportsDetailedMetrics){const i=e=>e.reduce(((e,t)=>e+t),0)/e.length,n=i(this.segmentDownloadTime)/1e3,s=Math.round(1e3*n)/1e3,r=i(this.bandwidthTracking)/1e3,a=Math.round(1e3*r)/1e3,o=i(this.latencyTracking)/1e3;t={bandwidth:a,latency:Math.round(1e3*o)/1e3,downloadDuration:s,errors:e+(this.isBuffering?1:0),qualityVariantChanges:this.qualityVariantChanges}}else t={errors:e+(this.isBuffering?1:0)};this.errors=0,this.qualityVariantChanges=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[];const i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};try{await fetch("/api/metrics/playback",i)}catch(n){console.error(n)}}constructor(e,t){var i=this;this.player=e,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.sendMetricsTimer=0,this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);const n=t.xhr;t.Vhs.xhr=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];if(t[0].uri.match(".ts")){const e=new Date,n=t[1];t[1]=(t,s,r)=>{const a=(new Date).getTime()-e.getTime();i.trackSegmentDownloadTime(a),n(t,s,r)}}return n(...t)},this.videoJSReady(),this.sendMetricsTimer=setInterval((()=>{this.send()}),1e4)}};var T=function(e,t,i,n){const s=t.getComponent("MenuItem"),r=t.getComponent("MenuItem"),a=t.getComponent("MenuButton"),o=new r(e,{selectable:!0});o.setAttribute("class","latency-toggle-item"),o.on("click",(()=>{n()}));const l=new class extends s{createEl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=super.createEl(e,t,i);return n.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',n}constructor(e,t){super(e,t)}}(e,{selectable:!1});class h extends a{createItems(){const t=e.tech({IWillNotUseThisInPlugins:!0}),n=new r(e,{selectable:!0,label:"Auto"}),s=i.map((i=>{const n=new r(e,{selectable:!0,label:i.name});return n.on("click",(()=>{t?(t.vhs.representations().forEach(((e,t)=>{e.enabled(t===i.index)})),n.selected(!1)):console.warn("Invalid attempt to access null player tech")})),n}));n.on("click",(()=>{t.vhs.representations().forEach((e=>{e.enabled(!0)})),n.selected(!1)}));const a=!!t&&!!t.vhs;return i.length<2&&a?[o]:i.length>1&&a?[n,...s,l,o]:a||1!==i.length?[n,...s]:[]}constructor(){super(e)}}const c=new h,u=e.tech({IWillNotUseThisInPlugins:!0});return c.addClass("vjs-quality-selector"),t.registerComponent("MenuButton",h),u.vhs?(!(i.length<2)||u&&u.vhs,c):c};var k=class{setClockSkew(e){this.clockSkewMs=e}check(){if((new Date).getTime()-this.startupTime.getTime()<1e4)return;if(this.player.paused())return;if(this.player.seeking())return;if(this.inTimeout)return;if(!this.enabled)return;const e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs)return;if(2!==this.player.networkState())return;let t=0;try{if(0===e.vhs.stats.buffered.length)return void this.timeout();e.vhs.stats.buffered.forEach((e=>{t+=e.end-e.start}))}catch(s){console.error(s)}const i=e.vhs.playlists.media().attributes.BANDWIDTH,n=e.vhs.systemBandwidth/i;try{const i=function(e){const t=e.vhs.playlists.media(),i=e.currentTime();let n;for(let s=0,r=t.segments.length;s<r;s++)if(i<t.segments[s].end){n=t.segments[s];break}return n||([n]=t.segments),n}(e);if(!i)return;if(n<1.8&&t<6*i.duration)return void this.timeout();const s=Math.max(4e3,1e3*i.duration*1.8),r=this.bufferedAtLatency.concat([s]),a=r.reduce(((e,t)=>e+t),0)/r.length;let o=Math.max(1.4*a,Math.min(1e3*i.duration*2.6,15e3));a>=o&&(o=a+3e3);const l=i.dateTimeObject.getTime(),h=(new Date).getTime()+this.clockSkewMs-l;if(this.currentLatency=h,Math.abs(h)>8e4)return void this.timeout();if(h>o){if(this.shouldJumpToLive()&&h>o+5e3){const t=h/1e3-3*i.duration,n=this.player.currentTime()+t;console.info("latency",h/1e3,"jumping",t,"to live from ",this.player.currentTime()," to ",n);const s=e.vhs.stats.buffered[0].end;if(n>e.vhs.stats.buffered[0].start<s)return void this.jump(n)}let t=.33*n;t=Math.max(Math.min(t,1.08),1),t>this.playbackRate+.02&&(t=this.playbackRate+.02),t=Math.round(1e3*t)/1e3,this.start(t)}else h<=a&&this.stop();console.info("latency",h/1e3,"min",a/1e3,"max",o/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(r){}}shouldJumpToLive(){if(this.bufferingCounter>1)return!1;return(new Date).getTime()-this.lastJumpOccurred>2e4}jump(e){this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout((()=>{this.jumpingToLiveIgnoreBuffer=!1}),5e3)}setPlaybackRate(e){this.playbackRate=e,this.player.playbackRate(e)}start(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}stop(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}enable(){this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval((()=>{this.check()}),3e3)}disable(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}timeout(){this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout((()=>{this.endTimeout()}),3e4))}endTimeout(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}handlePlaying(){const e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}handlePause(){this.playing=!1}handleEnded(){this.enabled&&this.disable()}handleError(){this.enabled&&this.timeout()}countBufferingEvent(){this.bufferingCounter+=1,this.bufferingCounter>4?this.disable():(this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout((()=>{this.bufferingCounter>0&&(this.bufferingCounter-=1)}),18e4))}handleBuffering(){this.enabled&&!this.inTimeout&&(this.jumpingToLiveIgnoreBuffer?this.jumpingToLiveIgnoreBuffer=!1:(this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout((()=>{this.countBufferingEvent()}),200)))}constructor(e){this.player=e,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}},w=i(83360),B=i.n(w);const C="owncast_volume",I="latencyCompensatorEnabled",j=new u;let P=null,M=null,E=!1;const x=e=>{let{source:t,online:i,initiallyMuted:o=!1}=e;const l=s.useRef(null),[h,u]=(0,r.FV)(b.We),d=(0,r.sJ)(b.g8),m=()=>{(0,y.qQ)(C,l.current.muted()?0:l.current.volume())},f=e=>{const t=document.querySelector(".latency-toggle-item > .vjs-menu-item-text");t&&(t.innerHTML=e)},g=()=>{M&&M.stop(),E=!0,M=new k(l.current),M.setClockSkew(d),M.enable(),(0,y.qQ)(I,!0),f("disable minimized latency")},w=()=>{M&&M.disable(),M=null,E=!1,(0,y.qQ)(I,!1),f('<span style="font-size: 0.8em">enable minimized latency (experimental)</span>')},x=()=>{E?w():g()},S=async(e,t)=>{const i=await async function(){let e=[];try{const t=await fetch("/api/video/variants");e=await t.json()}catch(t){console.error(t)}return e}(),n=T(e,t,i,x);e.controlBar.addChild(n,{},e.controlBar.children_.length-2),(e=>{const t=e.tech({IWillNotUseThisInPlugins:!0});if(!t||!t.vhs)return;"true"===(0,y.$o)(I)&&t&&t.vhs?g():w()})(e)},L=(e,t)=>{if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){const i=t.getComponent("Button");class n extends i{handleClick(){try{document.getElementsByTagName("video")[0].webkitShowPlaybackTargetPicker()}catch(e){console.error(e)}}constructor(){super(e)}}const s=new n;e.controlBar.addChild(s).addClass("vjs-airplay")}};(0,a.y1)("space",(e=>{e.preventDefault(),l.current.paused()?l.current.play():l.current.pause()})),(0,a.y1)("f",(()=>{l.current.isFullscreen()?l.current.exitFullscreen():l.current.requestFullscreen()}),{enableOnContentEditable:!1}),(0,a.y1)("m",(()=>{l.current.muted()||0===l.current.volume()?l.current.volume(.7):l.current.volume(0)}),{enableOnContentEditable:!1}),(0,a.y1)("0",(()=>l.current.volume(l.current.volume()+.1)),{enableOnContentEditable:!1}),(0,a.y1)("9",(()=>l.current.volume(l.current.volume()-.1)),{enableOnContentEditable:!1});const D={autoplay:!1,controls:!0,responsive:!0,fluid:!1,playsinline:!0,liveui:!0,preload:"auto",muted:o,controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:t,type:"application/x-mpegURL"}]};return(0,s.useEffect)((()=>{P&&P.setClockSkew(d)}),[d]),(0,s.useEffect)((()=>()=>{w(),null===P||void 0===P||P.stop()}),[]),(0,n.jsxs)("div",{className:B().container,children:[i&&(0,n.jsx)("div",{className:B().player,children:(0,n.jsx)(c,{options:D,onReady:(e,t)=>{l.current=e,(()=>{try{l.current.volume((0,y.$o)(C)||1)}catch(e){console.warn(e)}})(),L(e,t),e.on("waiting",(()=>{console.debug("player is waiting")})),e.on("dispose",(()=>{console.debug("player will dispose"),j.stop()})),e.on("playing",(()=>{console.debug("player is playing"),j.start(),u(!0)})),e.on("pause",(()=>{console.debug("player is paused"),j.stop(),u(!1)})),e.on("ended",(()=>{console.debug("player is ended"),j.stop(),u(!1)})),t.hookOnce(),e.on("volumechange",m),P=new v(e,t),P.setClockSkew(d),S(e,t)}})}),(0,n.jsx)("div",{className:B().poster,children:!h&&(0,n.jsx)(p,{online:i,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})};var S=x},83360:function(e){e.exports={container:"OwncastPlayer_container__YfgRy",player:"OwncastPlayer_player__R7XKJ",poster:"OwncastPlayer_poster__8RqUC"}},76161:function(e){e.exports={player:"VideoJS_player__GT8FN"}},70034:function(e){e.exports={poster:"VideoPoster_poster__RDkSk"}},25893:function(){}}]);
//# sourceMappingURL=2239-98ba6b02b4079884.js.map