(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xiaoxitongzhi/add-or-update"],{"4f6c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.ruleForm.tongzhifengmian?t.ruleForm.tongzhifengmian.split(","):null);t.$mp.data=Object.assign({},{$root:{g0:n}})},o=[]},5539:function(t,e,n){"use strict";n.r(e);var r=n("aa27"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"57c1":function(t,e,n){},aa27:function(t,e,n){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),u=new _(r||[]);return a(o,"_invoke",{value:E(t,n,u)}),o}function g(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",m="suspendedYield",d="executing",y="completed",x={};function v(){}function b(){}function w(){}var z={};l(z,s,(function(){return this}));var S=Object.getPrototypeOf,k=S&&S(S(P([])));k&&k!==n&&o.call(k,s)&&(z=k);var F=w.prototype=v.prototype=Object.create(z);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(i,a,u,s){var c=g(t[i],t,a);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==r(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):e.resolve(l).then((function(t){h.value=t,u(h)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}})}function E(e,n,r){var i=p;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var u=r.delegate;if(u){var s=$(u,r);if(s){if(s===x)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===p)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=d;var c=g(e,n,r);if("normal"===c.type){if(i=r.done?y:m,c.arg===x)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=y,r.method="throw",r.arg=c.arg)}}}function $(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,$(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var o=g(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,x;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=w,a(F,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,h,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,h,"GeneratorFunction")),t.prototype=Object.create(F),t},e.awrap=function(t){return{__await:t}},L(j.prototype),l(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new j(f(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(F),l(F,h,"Generator"),l(F,s,(function(){return this})),l(F,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},e}function o(t,e,n,r,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(t){o(a,r,i,u,s,"next",t)}function s(t){o(a,r,i,u,s,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("e2b1"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/xia-editor/xia-editor").then(function(){return resolve(n("064f"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/momo-multipleSelect/momo-multipleSelect").then(function(){return resolve(n("bd56"))}.bind(null,n)).catch(n.oe)};e.default={data:function(){return{cross:"",ruleForm:{tongzhibianhao:this.getUUID(),tongzhibiaoti:"",tongzhishijian:"",tongzhifengmian:"",tongzhineirong:"",xueshengzhanghao:"",xueshengxingming:""},xueshengzhanghaoOptions:[],xueshengzhanghaoIndex:0,user:{},ro:{tongzhibianhao:!1,tongzhibiaoti:!1,tongzhishijian:!1,tongzhifengmian:!1,tongzhineirong:!1,xueshengzhanghao:!1,xueshengxingming:!1}}},components:{wPicker:u,xiaEditor:s,multipleSelect:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=a(i().mark((function e(n){var r,o,a,u,s=this;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.tongzhishijian=this.$utils.getCurDateTime(),r=t.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:return o=e.sent,this.user=o.data,e.next=8,this.$api.option("xuesheng","xueshengzhanghao",{});case 8:if(o=e.sent,this.xueshengzhanghaoOptions=o.data,this.ruleForm.userid=t.getStorageSync("appUserid"),n.refid&&(this.ruleForm.refid=Number(n.refid),this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=18;break}return this.ruleForm.id=n.id,e.next=16,this.$api.info("xiaoxitongzhi",this.ruleForm.id);case 16:o=e.sent,this.ruleForm=o.data;case 18:if(this.cross=n.cross,!n.cross){e.next=54;break}a=t.getStorageSync("crossObj"),e.t0=i().keys(a);case 22:if((e.t1=e.t0()).done){e.next=54;break}if(u=e.t1.value,"tongzhibianhao"!=u){e.next=28;break}return this.ruleForm.tongzhibianhao=a[u],this.ro.tongzhibianhao=!0,e.abrupt("continue",22);case 28:if("tongzhibiaoti"!=u){e.next=32;break}return this.ruleForm.tongzhibiaoti=a[u],this.ro.tongzhibiaoti=!0,e.abrupt("continue",22);case 32:if("tongzhishijian"!=u){e.next=36;break}return this.ruleForm.tongzhishijian=a[u],this.ro.tongzhishijian=!0,e.abrupt("continue",22);case 36:if("tongzhifengmian"!=u){e.next=40;break}return this.ruleForm.tongzhifengmian=a[u].split(",")[0],this.ro.tongzhifengmian=!0,e.abrupt("continue",22);case 40:if("tongzhineirong"!=u){e.next=44;break}return this.ruleForm.tongzhineirong=a[u],this.ro.tongzhineirong=!0,e.abrupt("continue",22);case 44:if("xueshengzhanghao"!=u){e.next=48;break}return this.ruleForm.xueshengzhanghao=a[u],this.ro.xueshengzhanghao=!0,e.abrupt("continue",22);case 48:if("xueshengxingming"!=u){e.next=52;break}return this.ruleForm.xueshengxingming=a[u],this.ro.xueshengxingming=!0,e.abrupt("continue",22);case 52:e.next=22;break;case 54:this.styleChange(),this.$forceUpdate(),t.getStorageSync("raffleType")&&null!=t.getStorageSync("raffleType")&&(t.removeStorageSync("raffleType"),setTimeout((function(){s.onSubmitTap()}),300));case 57:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xueshengzhanghaoChange:function(){var t=a(i().mark((function t(e){var n;return i().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.xueshengzhanghaoIndex=e.target.value,this.ruleForm.xueshengzhanghao=this.xueshengzhanghaoOptions[this.xueshengzhanghaoIndex],t.next=4,this.$api.follow("xuesheng","xueshengzhanghao",{columnValue:this.ruleForm.xueshengzhanghao});case 4:n=t.sent,n.data.xueshengxingming&&(this.ruleForm.xueshengxingming=n.data.xueshengxingming);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),tongzhishijianConfirm:function(t){console.log(t),this.ruleForm.tongzhishijian=t.result,this.$forceUpdate()},tongzhifengmianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tongzhifengmian="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(i().mark((function e(){var n,r,o,a,u,s,c,h,l,f;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.tongzhibianhao&&(this.ruleForm.tongzhibianhao=String(this.ruleForm.tongzhibianhao)),!this.cross){e.next=18;break}if(t.setStorageSync("crossCleanType",!0),u=t.getStorageSync("statusColumnName"),s=t.getStorageSync("statusColumnValue"),""==u){e.next=18;break}if(n||(n=t.getStorageSync("crossObj")),u.startsWith("[")){e.next=14;break}for(c in n)c==u&&(n[c]=s);return h=t.getStorageSync("crossTable"),e.next=12,this.$api.update("".concat(h),n);case 12:e.next=18;break;case 14:r=Number(t.getStorageSync("appUserid")),o=n["id"],a=t.getStorageSync("statusColumnName"),a=a.replace(/\[/,"").replace(/\]/,"");case 18:if(!o||!r){e.next=41;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=o,l={page:1,limit:10,crossuserid:r,crossrefid:o},e.next=24,this.$api.list("xiaoxitongzhi",l);case 24:if(f=e.sent,!(f.data.total>=a)){e.next=31;break}return this.$utils.msg(t.getStorageSync("tips")),t.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 31:if(!this.ruleForm.id){e.next=36;break}return e.next=34,this.$api.update("xiaoxitongzhi",this.ruleForm);case 34:e.next=38;break;case 36:return e.next=38,this.$api.add("xiaoxitongzhi",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:e.next=49;break;case 41:if(!this.ruleForm.id){e.next=46;break}return e.next=44,this.$api.update("xiaoxitongzhi",this.ruleForm);case 44:e.next=48;break;case 46:return e.next=48,this.$api.add("xiaoxitongzhi",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){if(this.ro[t])return!1;this.$refs[t].show()}}}}).call(this,n("255a")["default"])},b89f:function(t,e,n){"use strict";(function(t){n("6cdc");r(n("dda7"));var e=r(n("f632"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("255a")["createPage"])},f561:function(t,e,n){"use strict";var r=n("57c1"),i=n.n(r);i.a},f632:function(t,e,n){"use strict";n.r(e);var r=n("4f6c"),i=n("5539");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f561");var a,u=n("7702"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"2bbcfc22",null,!1,r["a"],a);e["default"]=s.exports}},[["b89f","common/runtime","common/vendor"]]]);