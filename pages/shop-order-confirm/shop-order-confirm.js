(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"132f":function(t,e,r){},"1f98":function(t,e,r){"use strict";var n=r("132f"),o=r.n(n);o.a},"27e5":function(t,e,r){"use strict";(function(t){r("6cdc");n(r("dda7"));var e=n(r("b1b8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("255a")["createPage"])},"65bd":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=(t._self._c,1!=t.seat?Object.keys(t.address):null);t.$mp.data=Object.assign({},{$root:{g0:r}})},a=[]},"83fd":function(t,e,r){"use strict";r.r(e);var n=r("e9d4"),o=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},b1b8:function(t,e,r){"use strict";r.r(e);var n=r("65bd"),o=r("83fd");for(var a in o)["default"].indexOf(a)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("1f98");var i,s=r("7702"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=u.exports},e9d4:function(t,e,r){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var t,e={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:$(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",y="suspendedYield",m="executing",b="completed",g={};function v(){}function x(){}function w(){}var G={};l(G,u,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(F([])));L&&L!==o&&a.call(L,u)&&(G=L);var j=w.prototype=v.prototype=Object.create(G);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,s,u){var c=h(t[o],t,i);if("throw"!==c.type){var d=c.arg,l=d.value;return l&&"object"==r(l)&&a.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(l).then((function(t){d.value=t,s(d)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function $(e,r,n){var o=p;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===b){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var u=O(s,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=h(e,r,n);if("normal"===c.type){if(o=n.done?b:y,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=b,n.method="throw",n.arg=c.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return x.prototype=w,i(j,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=l(w,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,d,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},S(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(j),l(j,d,"Generator"),l(j,u,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,u,"next",t)}function u(t){o(i,n,a,s,u,"throw",t)}s(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0,remark:""}},computed:{baseUrl:function(){return this.$base.url},totalPrice:function(){var t=0;return 1==this.seat?t=this.total:this.orderGoods.length&&this.orderGoods.forEach((function(e){t+=e.price*e.buynumber})),Number(t).toFixed(2)}},onLoad:function(){var e=a(n().mark((function e(r){var o;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.type=r.type,this.seat=r.seat,this.orderGoods=t.getStorageSync("orderGoods"),1!=this.seat)for(o=0;o<this.orderGoods.length;o++)0==this.total?this.total=parseFloat(this.orderGoods[o].price)*this.orderGoods[o].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[o].price)*this.orderGoods[o].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.changePrice(),this.total=this.total.toFixed(2);case 6:case"end":return e.stop()}}),e,this)})));function r(t){return e.apply(this,arguments)}return r}(),onShow:function(){var e=a(n().mark((function e(){var r,o,a;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(o=e.sent,this.user=o.data,1==this.seat){e.next=15;break}if(a=t.getStorageSync("address"),!a||this.user.id!=a.userid){e.next=11;break}this.address=t.getStorageSync("address"),e.next=15;break;case 11:return e.next=13,this.$api.defaultAddress(this.user.id);case 13:o=e.sent,null!=o.data?this.address=o.data:this.address={};case 15:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),methods:{changePrice:function(){var t=this,e=0;this.orderGoods.forEach((function(r){e=1==t.seat?r.total:r.price*r.buynumber,r.total=e.toFixed(2)})),this.$forceUpdate()},onSubmitTap:function(){var e=a(n().mark((function e(){var r,o;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=this,1==r.seat||r.address.address){e.next=4;break}return r.$utils.msg("请选择地址"),e.abrupt("return");case 4:o=t.getStorageSync("nowTable"),t.showModal({title:"提示",content:"是否确认支付",success:function(){var e=a(n().mark((function e(a){var i,s,u,c,d,l,f;return n().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.confirm){e.next=65;break}if(i=r.type,s=!0,u="已支付",1!=i){e.next=8;break}r.user.money-r.totalPrice<0&&(r.$utils.msg("余额不足，请先充值"),s=!1,u="未支付",setTimeout((function(){t.switchTab({url:"../center/center"})}),1500)),e.next=13;break;case 8:if(2!=i){e.next=13;break}if(!(r.user.jf-r.totalPrice<0)){e.next=13;break}return r.$utils.msg("积分不足，兑换商品失败"),s=!1,e.abrupt("return");case 13:c=0;case 14:if(!(c<r.orderGoods.length)){e.next=51;break}if("ershoushangcheng"!=r.orderGoods[c].tablename){e.next=40;break}return e.next=18,r.$api.info("ershoushangcheng",r.orderGoods[c].goodid);case 18:if(d=e.sent,!(d.data.onelimittimes>0)){e.next=24;break}if(!(r.orderGoods[c].buynumber>d.data.onelimittimes)){e.next=24;break}return r.$utils.msg("".concat(r.orderGoods[c].goodname,"超过可购买数量")),s=!1,e.abrupt("break",51);case 24:if(!(d.data.alllimittimes<r.orderGoods[c].buynumber)){e.next=30;break}return r.$utils.msg("".concat(r.orderGoods[c].goodname,"已售罄")),s=!1,e.abrupt("break",51);case 30:if(1==r.seat){e.next=36;break}return d.data.alllimittimes=d.data.alllimittimes-r.orderGoods[c].buynumber,e.next=34,r.$api.update("ershoushangcheng",d.data);case 34:e.next=40;break;case 36:if(d.data.selected=d.data.selected+","+r.orderGoods[c].activeSeat,!s){e.next=40;break}return e.next=40,r.$api.update("ershoushangcheng",d.data);case 40:return l={orderid:r.$utils.genTradeNo(),tablename:r.orderGoods[c].tablename,userid:r.user.id,goodid:r.orderGoods[c].goodid,goodname:r.orderGoods[c].goodname,picture:r.orderGoods[c].picture,buynumber:r.orderGoods[c].buynumber,discountprice:r.orderGoods[c].price,price:r.orderGoods[c].price,total:r.orderGoods[c].total,discounttotal:r.orderGoods[c].total,type:i,remark:r.remark,sfsh:"",role:o,address:r.address.address,tel:r.address.phone,consignee:r.address.name,shangjiazhanghao:r.orderGoods[c].shangjiazhanghao,goodtype:r.orderGoods[c].goodtype,status:u},1==r.seat&&(l["address"]=r.address,f=r.address.split(",").length,l["buynumber"]=f,l["total"]=r.orderGoods[c].total,l["discounttotal"]=r.orderGoods[c].total),e.next=44,r.$api.add("orders",l);case 44:if(!r.orderGoods[c].id){e.next=48;break}return e.next=47,r.$api.del("cart",JSON.stringify([r.orderGoods[c].id]));case 47:t.removeStorageSync("cart".concat(r.orderGoods[c].goodid).concat(r.user.id));case 48:c++,e.next=14;break;case 51:if(!s){e.next=65;break}if(1!=i){e.next=60;break}return r.$utils.msgBack("支付成功"),r.user.money=Number((Number(r.user.money)-Number(r.totalPrice)).toFixed(2)),(r.user.jf||0==r.user.jf)&&(r.user.jf=Number((Number(r.user.jf)+Number(r.totalPrice)).toFixed(2))),e.next=58,r.$api.update(o,r.user);case 58:e.next=65;break;case 60:if(2!=i){e.next=65;break}return r.$utils.msgBack("兑换成功"),r.user.jf=Number((Number(r.user.jf)-Number(r.totalPrice)).toFixed(2)),e.next=65,r.$api.update(o,r.user);case 65:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 6:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}}}).call(this,r("255a")["default"])}},[["27e5","common/runtime","common/vendor"]]]);