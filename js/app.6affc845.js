(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-433bd1ee":"83ff1273"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-433bd1ee":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-433bd1ee":"47a37047"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/game/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3864:function(e,t,n){"use strict";n("4fc1")},"4fc1":function(e,t,n){},a4b1:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=n("2877"),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"home-title"},[e._v("PLAY FREE ONLINE GAMES ON MOBILE")]),r("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("ul",{staticClass:"list-wrap"},e._l(e.list,(function(t,n){return r("li",{key:n,staticClass:"list-item",on:{click:function(n){return e.onGoDetail(t)}}},[r("img",{attrs:{src:t.url,alt:""}}),r("div",{staticClass:"game-title"},[e._v(e._s(t.title))])])})),0),r("div",{staticClass:"loading__wrap",attrs:{slot:"loading"},slot:"loading"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:n("cf1c"),alt:""}})])]),r("div",{staticClass:"finished",attrs:{slot:"finished"},slot:"finished"},[e._v("没有更多数据了")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowTop,expression:"isShowTop"}],staticClass:"toTop",on:{click:e.toTop}},[r("van-icon",{attrs:{name:"back-top",size:"22",color:"#084b7b"}}),r("span",[e._v("Top")])],1)],1)},f=[],p=n("d4ec"),m=n("bee2"),h=n("262e"),v=n("2caf"),g=n("9ab4"),b=n("1b40"),y=n("bc3a"),j=n.n(y),w=(n("433b"),n("d399")),T=function(e){e.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return k(e.data),e.data}),(function(e){var t=e&&e.response&&e.response.status||null,n=e&&e.response&&e.response.statusText||"未知错误",r={code:t,error:t+":"+n};return k(r),Promise.reject(e)}))};function k(e){var t=e.code;if(0!==t&&"undefined"!==typeof t){var n=e.error;switch(t){case 401:O(n);break;default:O(n)}}}function O(e){Object(w["a"])(e)}var q=j.a.create({baseURL:"/",headers:{Accept:"application/json","X-Requested-With":"DM-Request","Cache-Control":"no-cache"},timeout:1e4,timeoutErrorMessage:"网络超时"});T(q);var _=q,C="/api/v1",x={getGameList:function(){return _.get("".concat(C))},getGameDetail:function(){return _.get("".concat(C))}},E=function(e){Object(h["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.list=[],e.loading=!1,e.finished=!1,e.isShowTop=!1,e.scrollTrigger=!1,e.scrollTop=0,e.demoList=[{gameUrl:"https://html5.gamemonetize.com/apq6vn2vd1iueahd9upn2uhe2gmihnjs/",url:"https://fnn-1300553828.cos.ap-beijing.myqcloud.com/images/ryezbmnv3mqjaqyfin2u3ifm.jpg",title:"aixiaochu"},{gameUrl:"https://html5.gamemonetize.com/lxjls7an8va1pnn300bmgvmpem6re87z/",url:"https://fnn-1300553828.cos.ap-beijing.myqcloud.com/images/efnmvqjqbbvmjejezq7vbnye.jpg",title:"coreball"},{gameUrl:"https://html5.gamemonetize.com/2zl80gyxb8wow5mthrawir5la9h52fa5/",url:"https://fnn-1300553828.cos.ap-beijing.myqcloud.com/images/n6baj3yrann2zfafvyuimmmq.jpg",title:"ChineseChess"},{gameUrl:"https://html5.gamemonetize.com/xsnm9j5pt4edsiibqgn1vd8i0twqrclp/",url:"https://fnn-1300553828.cos.ap-beijing.myqcloud.com/images/imqyjbufizvrrq3mzjreeeub.jpg",title:"hejindongwu"}],e}return Object(m["a"])(n,[{key:"onGoDetail",value:function(e){var t=e.gameUrl,n=e.url,r=e.title;this.$router.push({name:"gameDetail",query:{url:n,gameUrl:t,title:r}})}},{key:"onLoad",value:function(){var e=this;setTimeout((function(){for(var t=0;t<40;t++)e.list.push(e.demoList[t%4]);e.loading=!1,e.list.length>=200&&(e.finished=!0)}),1e3)}},{key:"toTop",value:function(){var e=this;if(!this.scrollTrigger)var t=this.scrollTop,n=t/2e3,r=setInterval((function(){e.scrollTrigger=!0,t-=n,n+=5,t<=0&&(clearInterval(r),e.scrollTrigger=!1),document.documentElement.scrollTop=t}),10)}},{key:"listenScroll",value:function(){var e=this;window.addEventListener("scroll",(function(){var t=window.scrollY;window.scrollY>500?e.isShowTop=!0:e.isShowTop=!1,e.scrollTop=t}))}},{key:"getGameList",value:function(){x.getGameList()}},{key:"mounted",value:function(){this.listenScroll()}}]),n}(b["b"]);E=Object(g["a"])([b["a"]],E);var S=E,L=S,P=(n("3864"),Object(i["a"])(L,d,f,!1,null,"a546936a",null)),z=P.exports;r["a"].use(u["a"]);var A=[{path:"/home",name:"Home",component:z,meta:{keepAlive:!0}},{path:"/detail",name:"gameDetail",component:function(){return n.e("chunk-433bd1ee").then(n.bind(null,"da18"))}},{path:"**",redirect:"/home"}],N=new u["a"]({mode:"history",routes:A,scrollBehavior:function(e,t,n){return console.log(n,"savedPosition"),n||{x:0,y:0}}}),D=N,M=n("2f62");r["a"].use(M["a"]);var U=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=(n("da02"),n("6b41")),B=(n("b342"),n("ad06")),I=(n("c625"),n("b650")),R=(n("3ec1"),n("7744")),$=(n("93b0"),n("2bdd")),Y=(n("d81d"),n("b0c0"),n("f5df1"),n("77ed"),n("f27b"),[$["a"],R["a"],I["a"],B["a"],G["a"]]);Y.map((function(e){return r["a"].component(e["name"],e)}));n("a4b1");r["a"].config.productionTip=!1,new r["a"]({router:D,store:U,render:function(e){return e(l)}}).$mount("#app")},cf1c:function(e,t,n){e.exports=n.p+"img/loading.8609659a.gif"}});