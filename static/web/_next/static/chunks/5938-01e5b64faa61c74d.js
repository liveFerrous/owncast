"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5938],{93645:function(t,n,r){r.d(n,{u:function(){return a}});var e={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function a(t){return t?e[t]:e.trunc}},49474:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(19013),a=r(13882);function o(t,n){(0,a.Z)(2,arguments);var r=(0,e.Z)(t),o=(0,e.Z)(n),u=r.getTime()-o.getTime();return u<0?-1:u>0?1:u}},59910:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(19013),a=r(13882);function o(t,n){return(0,a.Z)(2,arguments),(0,e.Z)(t).getTime()-(0,e.Z)(n).getTime()}},82161:function(t,n,r){r.d(n,{Z:function(){return c}});var e=r(19013),a=r(13882);function o(t,n){(0,a.Z)(2,arguments);var r=(0,e.Z)(t),o=(0,e.Z)(n),u=r.getFullYear()-o.getFullYear(),i=r.getMonth()-o.getMonth();return 12*u+i}var u=r(49474);function i(t){(0,a.Z)(1,arguments);var n=(0,e.Z)(t);return n.setHours(23,59,59,999),n}function f(t){(0,a.Z)(1,arguments);var n=(0,e.Z)(t),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(23,59,59,999),n}function s(t){(0,a.Z)(1,arguments);var n=(0,e.Z)(t);return i(n).getTime()===f(n).getTime()}function c(t,n){(0,a.Z)(2,arguments);var r,i=(0,e.Z)(t),f=(0,e.Z)(n),c=(0,u.Z)(i,f),l=Math.abs(o(i,f));if(l<1)r=0;else{1===i.getMonth()&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-c*l);var Z=(0,u.Z)(i,f)===-c;s((0,e.Z)(t))&&1===l&&1===(0,u.Z)(t,f)&&(Z=!1),r=c*(l-Number(Z))}return 0===r?0:r}},11699:function(t,n,r){r.d(n,{Z:function(){return u}});var e=r(59910),a=r(13882),o=r(93645);function u(t,n,r){(0,a.Z)(2,arguments);var u=(0,e.Z)(t,n)/1e3;return(0,o.u)(null===r||void 0===r?void 0:r.roundingMethod)(u)}},45938:function(t,n,r){r.d(n,{Z:function(){return m}});var e=r(84314),a=r(49474),o=r(82161),u=r(11699),i=r(86559),f=r(19013);function s(t,n){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}function c(t){return s({},t)}var l=r(24262),Z=r(13882),v=1440,d=43200;function h(t,n,r){var h,m;(0,Z.Z)(2,arguments);var M=(0,e.j)(),D=null!==(h=null!==(m=null===r||void 0===r?void 0:r.locale)&&void 0!==m?m:M.locale)&&void 0!==h?h:i.Z;if(!D.formatDistance)throw new RangeError("locale must contain formatDistance property");var g=(0,a.Z)(t,n);if(isNaN(g))throw new RangeError("Invalid time value");var p,T,X=s(c(r),{addSuffix:Boolean(null===r||void 0===r?void 0:r.addSuffix),comparison:g});g>0?(p=(0,f.Z)(n),T=(0,f.Z)(t)):(p=(0,f.Z)(t),T=(0,f.Z)(n));var b,w=(0,u.Z)(T,p),x=((0,l.Z)(T)-(0,l.Z)(p))/1e3,Y=Math.round((w-x)/60);if(Y<2)return null!==r&&void 0!==r&&r.includeSeconds?w<5?D.formatDistance("lessThanXSeconds",5,X):w<10?D.formatDistance("lessThanXSeconds",10,X):w<20?D.formatDistance("lessThanXSeconds",20,X):w<40?D.formatDistance("halfAMinute",0,X):w<60?D.formatDistance("lessThanXMinutes",1,X):D.formatDistance("xMinutes",1,X):0===Y?D.formatDistance("lessThanXMinutes",1,X):D.formatDistance("xMinutes",Y,X);if(Y<45)return D.formatDistance("xMinutes",Y,X);if(Y<90)return D.formatDistance("aboutXHours",1,X);if(Y<v){var y=Math.round(Y/60);return D.formatDistance("aboutXHours",y,X)}if(Y<2520)return D.formatDistance("xDays",1,X);if(Y<d){var S=Math.round(Y/v);return D.formatDistance("xDays",S,X)}if(Y<86400)return b=Math.round(Y/d),D.formatDistance("aboutXMonths",b,X);if((b=(0,o.Z)(T,p))<12){var E=Math.round(Y/d);return D.formatDistance("xMonths",E,X)}var N=b%12,k=Math.floor(b/12);return N<3?D.formatDistance("aboutXYears",k,X):N<9?D.formatDistance("overXYears",k,X):D.formatDistance("almostXYears",k+1,X)}function m(t,n){return(0,Z.Z)(1,arguments),h(t,Date.now(),n)}}}]);
//# sourceMappingURL=5938-01e5b64faa61c74d.js.map