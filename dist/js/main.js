(function(e){function t(t){for(var r,i,u=t[0],c=t[1],f=t[2],s=0,l=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={main:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var f=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=f;a.push(["2a24","chunk-vendors"]),n()})({"034f":function(e,t,n){"use strict";n.r(t);var r=n("e2a1");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},"2a24":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("5df3");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"app"},u=i,c=n("2877");function f(e){var t=n("034f");t.__inject__&&t.__inject__(e)}var s=Object(c["a"])(u,o,a,!1,f,null,"6bbd9a78"),p=s.exports;r["a"].mixin({beforeMount:function(){var e=this.$options.asyncData;e&&(this.dataPromise=e({store:this.$store,route:this.$route}))}});var l=n("bc3a"),d=n.n(l);r["a"].prototype.http=d.a;var v=n("31bd"),h=n("2909"),m=n("8c4f"),b=(n("8e6e"),n("456d"),n("ade3"));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(b["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home";return{component:function(){return n("bd62")("./".concat(e,"/index.vue"))}}}var w=[g(g({path:"/home"},O()),{},{children:[g({path:"vue",name:"vue"},O("home/vue")),g({path:"vuex",name:"vuex"},O("home/vuex")),g({path:"vueCli3",name:"vueCli3"},O("home/vueCli3")),g({path:"vueSSR",name:"vueSSR"},O("home/vueSSR"))]})];function j(){return new m["a"]({mode:"history",routes:[{path:"*",redirect:"/home/vue"}].concat(Object(h["a"])(w))})}r["a"].use(m["a"]);var _=n("2f62");r["a"].use(_["a"]);var x="https://adm.hqboke.cn";function P(e){return d.a.post(x+"/cms/i1/user_info")}function S(){return new _["a"].Store({state:{items:{}},actions:{fetchItem:function(e,t){var n=e.commit;return P(t).then((function(e){n("setItem",{id:t,item:e})}))}},mutations:{setItem:function(e,t){var n=t.id,o=t.item;r["a"].set(e.items,n,o.data)}}})}function k(){var e=j(),t=S();Object(v["sync"])(t,e);var n=new r["a"]({router:e,store:t,render:function(e){return e(p)}});return{app:n,router:e,store:t}}console.log(x),r["a"].config.productionTip=!1;var T=k(),E=T.app,M=T.router,C=T.store;window.__INITIAL_STATE__&&C.replaceState(window.__INITIAL_STATE__),M.onReady((function(){M.beforeResolve((function(e,t,n){var r=M.getMatchedComponents(e),o=M.getMatchedComponents(t),a=!1,i=r.filter((function(e,t){return a||(a=o[t]!==e)}));if(!i.length)return n();Promise.all(i.map((function(t){if(t.asyncData)return t.asyncData({store:C,route:e})}))).then((function(){n()})).catch(n)})),E.$mount("#app")}))},"3f8c":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#app,#app>*,body,html{width:100%;height:100%}body{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;font-size:16px;margin:0;overflow-x:hidden}img{width:200px}",""])},bd62:function(e,t,n){var r={"./home/index.vue":["f5b8","chunk-47687292"],"./home/vue/index.vue":["0bee","chunk-8b260224"],"./home/vueCli3/index.vue":["9494","chunk-6a7afb35"],"./home/vueSSR/index.vue":["3c7f","chunk-488f303e"],"./home/vuex/index.vue":["42b3","chunk-7cc3dd4e"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="bd62",e.exports=o},e2a1:function(e,t,n){var r=n("3f8c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("1f50beb8",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=main.js.map