(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/friend/detail"],{"3b97":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.userid&&t.isAuth("friend","私聊")),r=!t.userid&&t.isAuthFront("friend","私聊");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r}})},o=[]},"5b2a":function(t,e,n){"use strict";var r=n("5ca7"),i=n.n(r);i.a},"5ca7":function(t,e,n){},"7fd3":function(t,e,n){"use strict";(function(t){n("6cdc");r(n("dda7"));var e=r(n("b030"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("255a")["createPage"])},abce:function(t,e,n){"use strict";n.r(e);var r=n("b3c2"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},b030:function(t,e,n){"use strict";n.r(e);var r=n("3b97"),i=n("abce");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("5b2a");var a,c=n("7702"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},b3c2:function(t,e,n){"use strict";(function(t){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,o=Object.create(i.prototype),c=new C(r||[]);return a(o,"_invoke",{value:T(t,n,c)}),o}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function x(){}var S={};f(S,s,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(N([])));k&&k!==i&&o.call(k,s)&&(S=k);var j=x.prototype=b.prototype=Object.create(S);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(i,a,c,s){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}})}function T(e,n,r){var i=d;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===m){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var s=$(c,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var u=p(e,n,r);if("normal"===u.type){if(i=r.done?m:y,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=m,r.method="throw",r.arg=u.arg)}}}function $(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(n(e)+" is not iterable")}return w.prototype=x,a(j,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},E(O.prototype),f(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new O(h(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),f(j,l,"Generator"),f(j,s,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return c.type="throw",c.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){i(a,r,o,c,s,"next",t)}function s(t){i(a,r,o,c,s,"throw",t)}c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null,title:""}},components:{},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=o(r().mark((function e(n){var i,o;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:o=e.sent,this.user=o.data,this.id=n.id,n.userid&&(this.userid=n.userid),this.init();case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),onShareAppMessage:function(){var t={title:this.title,imageUrl:this.swiperList[0]?this.baseUrl+this.swiperList[0]:""};return t},onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var e=o(r().mark((function e(n){var i,o,a;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(o=e.sent,this.user=o.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),a=t.getStorageSync("crossCleanType"),!a){e.next=13;break}return t.removeStorageSync("crossCleanType"),e.next=11,this.$api.info("friend",this.id);case 11:o=e.sent,this.detail=o.data;case 13:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{callClick:function(e){t.makePhoneCall({phoneNumber:e})},onPayTap:function(){var e=this;if(!this.user)return this.$utils.msg("请先登录"),setTimeout((function(){e.$utils.jump("../login/login")}),1500),!1;t.setStorageSync("paytable","friend"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onAcrossTap:function(){var e=o(r().mark((function e(n,i,o,a,c,s){var u,l,f,h=arguments;return r().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(h.length>6&&void 0!==h[6]?h[6]:1,u=this,this.user){e.next=6;break}return this.$utils.msg("请先登录"),setTimeout((function(){u.$utils.jump("../login/login")}),1500),e.abrupt("return",!1);case 6:if(t.setStorageSync("crossTable","friend"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",a),t.setStorageSync("statusColumnValue",s),t.setStorageSync("tips",c),""==a||a.startsWith("[")){e.next=21;break}l=t.getStorageSync("crossObj"),e.t0=r().keys(l);case 14:if((e.t1=e.t0()).done){e.next=21;break}if(f=e.t1.value,f!=a||l[f]!=s){e.next=19;break}return this.$utils.msg(c),e.abrupt("return");case 19:e.next=14;break;case 21:this.$utils.jump("../".concat(n,"/add-or-update?cross=true"));case 22:case"end":return e.stop()}}),e,this)})));function n(t,n,r,i,o,a){return e.apply(this,arguments)}return n}(),init:function(){var t=o(r().mark((function t(){var e,n,i=arguments;return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,this.timer&&clearInterval(this.timer),t.next=4,this.$api.info("friend",this.id);case 4:if(n=t.sent,this.detail=n.data,2!=e){t.next=10;break}return this.detail.discussnum++,t.next=10,this.$api.update("friend",this.detail);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=o(r().mark((function t(e){return r().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),t.saveFile({tempFilePath:e.tempFilePath,success:function(e){t.showToast({icon:"success",mask:!0,title:"下载成功",duration:2e3}),setTimeout((function(){console.log("obj.savedFilePath",e.savedFilePath);var n=e.savedFilePath;t.openDocument({filePath:n,showMenu:!0,success:function(t){console.log("打开文档成功")}})}),2e3)}}))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")}}}}).call(this,n("255a")["default"])}},[["7fd3","common/runtime","common/vendor"]]]);