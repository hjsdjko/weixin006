(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gongyilan/detail"],{"644d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.swiperList,(function(e,n){var r=t.__get_orig(e),i=e.substring(0,4);return{$orig:r,g0:i}}))),r=t.userid&&t.isAuth("gongyilan","捐赠"),i=!t.userid&&t.isAuthFront("gongyilan","捐赠"),o=t.userid&&t.isAuth("gongyilan","私聊"),a=!t.userid&&t.isAuthFront("gongyilan","私聊");t.$mp.data=Object.assign({},{$root:{l0:n,m0:r,m1:i,m2:o,m3:a}})},o=[]},7618:function(t,e,n){"use strict";n.r(e);var r=n("644d"),i=n("f7e0");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("8e57");var a,s=n("7702"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"8e57":function(t,e,n){"use strict";var r=n("e9c1"),i=n.n(r);i.a},af63:function(t,e,n){"use strict";(function(t){n("6cdc");r(n("dda7"));var e=r(n("7618"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("255a")["createPage"])},e945:function(t,e,n){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),s=new C(r||[]);return a(o,"_invoke",{value:O(t,n,s)}),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",y="suspendedYield",g="executing",v="completed",m={};function w(){}function b(){}function x(){}var S={};h(S,u,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(F([])));k&&k!==i&&o.call(k,u)&&(S=k);var j=x.prototype=w.prototype=Object.create(S);function _(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,a,s,u){var c=p(t[i],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==n(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,s,u)}),(function(t){r("throw",t,s,u)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,u)}))}u(c.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}})}function O(e,n,r){var i=d;return function(o,a){if(i===g)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var u=T(s,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=g;var c=p(e,n,r);if("normal"===c.type){if(i=r.done?v:y,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=v,r.method="throw",r.arg=c.arg)}}}function T(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=p(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return b.prototype=x,a(j,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},_(E.prototype),h(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(j),h(j,l,"Generator"),h(j,u,(function(){return this})),h(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=F,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function i(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,u,"next",t)}function u(t){i(a,r,o,s,u,"throw",t)}s(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null,title:""}},components:{},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=o(r().mark((function e(n){var i,o;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:o=e.sent,this.user=o.data,this.id=n.id,n.userid&&(this.userid=n.userid),this.init();case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onShareAppMessage:function(){var t={title:this.title,imageUrl:this.swiperList[0]?this.baseUrl+this.swiperList[0]:""};return t},onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var e=o(r().mark((function e(n){var i,o,a;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(o=e.sent,this.user=o.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),a=t.getStorageSync("crossCleanType"),!a){e.next=14;break}return t.removeStorageSync("crossCleanType"),e.next=11,this.$api.info("gongyilan",this.id);case 11:o=e.sent,this.detail=o.data,this.title=this.detail.xueshengxingming;case 14:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{callClick:function(e){t.makePhoneCall({phoneNumber:e})},onPayTap:function(){var e=this;if(!this.user)return this.$utils.msg("请先登录"),setTimeout((function(){e.$utils.jump("../login/login")}),1500),!1;t.setStorageSync("paytable","gongyilan"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onAcrossTap:function(){var e=o(r().mark((function e(n,i,o,a,s,u){var c,l,h,f=arguments;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(f.length>6&&void 0!==f[6]?f[6]:1,c=this,this.user){e.next=6;break}return this.$utils.msg("请先登录"),setTimeout((function(){c.$utils.jump("../login/login")}),1500),e.abrupt("return",!1);case 6:if(t.setStorageSync("crossTable","gongyilan"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",u),t.setStorageSync("tips",s),""==a||a.startsWith("[")){e.next=21;break}l=t.getStorageSync("crossObj"),e.t0=r().keys(l);case 14:if((e.t1=e.t0()).done){e.next=21;break}if(h=e.t1.value,h!=a||l[h]!=u){e.next=19;break}return this.$utils.msg(s),e.abrupt("return");case 19:e.next=14;break;case 21:this.$utils.jump("../".concat(n,"/add-or-update?cross=true"));case 22:case"end":return e.stop()}}),e,this)})));function n(t,n,r,i,o,a){return e.apply(this,arguments)}return n}(),init:function(){var t=o(r().mark((function t(){var e,n,i=arguments;return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,this.timer&&clearInterval(this.timer),t.next=4,this.$api.info("gongyilan",this.id);case 4:if(n=t.sent,this.detail=n.data,this.title=this.detail.xueshengxingming,this.swiperList=this.detail.xueshengzhaopian?this.detail.xueshengzhaopian.split(","):[],2!=e){t.next=12;break}return this.detail.discussnum++,t.next=12,this.$api.update("gongyilan",this.detail);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=o(r().mark((function t(e){return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),t.saveFile({tempFilePath:e.tempFilePath,success:function(e){t.showToast({icon:"success",mask:!0,title:"下载成功",duration:2e3}),setTimeout((function(){console.log("obj.savedFilePath",e.savedFilePath);var n=e.savedFilePath;t.openDocument({filePath:n,showMenu:!0,success:function(t){console.log("打开文档成功")}})}),2e3)}}))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")}}}}).call(this,n("255a")["default"])},e9c1:function(t,e,n){},f7e0:function(t,e,n){"use strict";n.r(e);var r=n("e945"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a}},[["af63","common/runtime","common/vendor"]]]);