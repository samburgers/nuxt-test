webpackJsonp([6],{126:function(t,e,n){e=t.exports=n(47)(!0),e.push([t.i,".error-page[data-v-3c29dfb6]{color:#000;background:#fff;top:0;bottom:0;left:0;right:0;position:absolute;font-family:SF UI Text,Helvetica Neue,Lucida Grande;text-align:center;padding-top:20%}.error-code[data-v-3c29dfb6]{display:inline-block;font-size:24px;font-weight:500;vertical-align:top;border-right:1px solid rgba(0,0,0,.298039);margin:0 20px 0 0;padding:10px 23px}.error-wrapper-message[data-v-3c29dfb6]{display:inline-block;text-align:left;line-height:49px;height:49px;vertical-align:middle}.error-message[data-v-3c29dfb6]{font-size:14px;font-weight:400;margin:0;padding:0}.error-link[data-v-3c29dfb6]{color:#00bcd4;font-weight:400;text-decoration:none;font-size:14px}","",{version:3,sources:["/Users/feathers/Projects/Apps/VueApps/nuxt-contentful-blog-example/blog-in-5-minutes/.nuxt/components/nuxt-error.vue"],names:[],mappings:"AACA,6BACE,WAAY,AACZ,gBAAiB,AACjB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,kBAAmB,AACnB,oDAA6D,AAC7D,kBAAmB,AACnB,eAAiB,CAClB,AACD,6BACE,qBAAsB,AACtB,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,2CAAgD,AAChD,kBAAyB,AACzB,iBAAmB,CACpB,AACD,wCACE,qBAAsB,AACtB,gBAAiB,AACjB,iBAAkB,AAClB,YAAa,AACb,qBAAuB,CACxB,AACD,gCACE,eAAgB,AAChB,gBAAoB,AACpB,SAAY,AACZ,SAAa,CACd,AACD,6BACE,cAAe,AACf,gBAAoB,AACpB,qBAAsB,AACtB,cAAgB,CACjB",file:"nuxt-error.vue",sourcesContent:['\n.error-page[data-v-3c29dfb6] {\n  color: #000;\n  background: #fff;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";\n  text-align: center;\n  padding-top: 20%;\n}\n.error-code[data-v-3c29dfb6] {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: 500;\n  vertical-align: top;\n  border-right: 1px solid rgba(0, 0, 0, 0.298039);\n  margin: 0px 20px 0px 0px;\n  padding: 10px 23px;\n}\n.error-wrapper-message[data-v-3c29dfb6] {\n  display: inline-block;\n  text-align: left;\n  line-height: 49px;\n  height: 49px;\n  vertical-align: middle;\n}\n.error-message[data-v-3c29dfb6] {\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0px;\n  padding: 0px;\n}\n.error-link[data-v-3c29dfb6] {\n  color: #00BCD4;\n  font-weight: normal;\n  text-decoration: none;\n  font-size: 14px;\n}\n'],sourceRoot:""}])},127:function(t,e,n){e=t.exports=n(47)(!0),e.push([t.i,".progress[data-v-4f87c76a]{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}","",{version:3,sources:["/Users/feathers/Projects/Apps/VueApps/nuxt-contentful-blog-example/blog-in-5-minutes/.nuxt/components/nuxt-loading.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,MAAS,AACT,OAAU,AACV,QAAW,AACX,WAAY,AACZ,QAAU,AACV,iCAAqC,AACrC,UAAW,AACX,yBAA0B,AAC1B,cAAgB,CACjB",file:"nuxt-loading.vue",sourcesContent:["\n.progress[data-v-4f87c76a] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],sourceRoot:""}])},130:function(t,e,n){var r=n(17)(n(75),n(135),null,null,null);t.exports=r.exports},131:function(t,e,n){function r(t){n(138)}var o=n(17)(n(77),n(134),r,"data-v-4f87c76a",null);t.exports=o.exports},132:function(t,e,n){var r=n(17)(n(78),n(136),null,null,null);t.exports=r.exports},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",[n("h1",{staticClass:"error-code"},[t._v(t._s(t.error.statusCode))]),n("div",{staticClass:"error-wrapper-message"},[n("h2",{staticClass:"error-message"},[t._v(t._s(t.error.message))])]),404===t.error.statusCode?n("p",[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])])},staticRenderFns:[]}},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.layout,{tag:"component"}):t._e()],1)},staticRenderFns:[]}},136:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child")},staticRenderFns:[]}},137:function(t,e,n){var r=n(126);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(48)("6a6eefee",r,!0)},138:function(t,e,n){var r=n(127);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(48)("c9ff1a46",r,!0)},140:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=140},40:function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.options.data||S;t.options.data=function(){var t=n.call(this);return $()({},t,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=k.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return B()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return B()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return B()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/",env:{CTF_PERSON_ID:"15jwOBqpxqSAOy2eOO4S0m",CTF_BLOG_POST_TYPE_ID:"blogPost",CTF_SPACE_ID:"he83vgal9b69",CTF_CDA_ACCESS_TOKEN:"23e5246c2983860670bcc6e3f2eeb70a24a4f61806837168156d4c1f77056d12",CTF_CMA_ACCESS_TOKEN:"CFPAT-d4eff85e5ca45f22610a613f894d4b4cda2d14970696652ca9aab433e1dcc27c"},hotReload:t.hotReload||!1},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":w()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),n}function c(t,e){return!t.length||e._redirected?y.a.resolve():f(t[0],e).then(function(){return c(t.slice(1),e)})}function f(t,e){var n=void 0;return n=2===t.length?new y.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof y.a||"function"==typeof n.then)||(n=y.a.resolve(n)),n}function l(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function d(t,e){return m(p(t,e))}function p(t,e){for(var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";null!=(n=O.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],d=n[2],p=n[3],h=n[4],A=n[5],m=n[6],C=n[7];i&&(r.push(i),i="");var g=null!=d&&null!=l&&l!==d,_="+"===m||"*"===m,y="?"===m||"*"===m,b=n[2]||s,w=h||A;r.push({name:p||o++,prefix:d||"",delimiter:b,optional:y,repeat:_,partial:g,asterisk:!!C,pattern:w?x(w):C?".*":"[^"+v(b)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===w()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+g()(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=s(l[d]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+g()(f)+"`");o+=(0===d?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?A(l):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function v(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function x(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.e=r,e.g=o,e.b=a,e.i=i,e.f=s,e.a=u,e.h=c,e.d=f,e.j=l,e.c=d;var C=n(79),g=n.n(C),_=n(10),y=n.n(_),b=n(42),w=n.n(b),E=n(80),B=n.n(E),T=n(52),$=n.n(T),k=n(3),S=function(){return{}},O=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},51:function(t,e,n){"use strict";var r=(n(3),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;a.nuxtChildDepth=u;var c=i[u]||s,f={};r.forEach(function(t){void 0!==c[t]&&(f[t]=c[t])});var l={};return o.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t])}),t("transition",{props:f,on:l},[t("router-view",a)])}}},65:function(t,e,n){function r(t){n(137)}var o=n(17)(n(76),n(133),r,"data-v-3c29dfb6",null);t.exports=o.exports},66:function(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n(43),o=n.n(r),a=n(27),i=n.n(a),s=n(52),u=n.n(s),c=n(10),f=n.n(c),l=n(41),d=n.n(l),p=n(3),h=n(44),A=n.n(h),m=n(73),v=n(74),x=n(51),C=n(72),g=n(65),_=n.n(g),y=n(132),b=n.n(y),w=n(130),E=n.n(w),B=n(40);n.d(e,"a",function(){return _.a});var T=function(){var t=d()(o.a.mark(function t(e){var r,a,s,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.i(v.a)(),a=n.i(m.a)(),!e||!e.url){t.next=5;break}return t.next=5,new f.a(function(t,n){a.push(e.url,t,n)});case 5:if(window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),s=u()({router:a,store:r,_nuxt:{defaultTransition:k,transitions:[k],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?i()({},k,{name:t}):i()({},k,t):k}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){return t=t||null,"string"==typeof t&&(t={statusCode:500,message:t}),this.$options._nuxt.dateErr=Date.now(),this.$options._nuxt.err=t,t}}},E.a),c=n.i(B.a)({isServer:!!e,isClient:!e,route:a.currentRoute,store:r,req:e?e.req:void 0,res:e?e.res:void 0},s),delete c.redirect,delete c.error,"function"!=typeof $){t.next=13;break}return t.next=13,$(c);case 13:return t.abrupt("return",{app:s,router:a,store:r});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var $=n(68);$=$.default||$,p.default.component(x.a.name,x.a),p.default.component(C.a.name,C.a),p.default.component(b.a.name,b.a),p.default.use(A.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var k={name:"page",mode:"out-in"}},67:function(t,e,n){"use strict";var r=n(49),o=n.n(r),a=n(70),i=a.keys(),s={},u=!0,c=!1,f=void 0;try{for(var l,d=o()(i);!(u=(l=d.next()).done);u=!0){var p=l.value;s[p.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=a(t);return e.default?e.default:e}(p)}}catch(t){c=!0,f=t}finally{try{!u&&d.return&&d.return()}finally{if(c)throw f}}e.a=s},68:function(t,e,n){var r=void 0;try{r=n(69)}catch(t){if("MODULE_NOT_FOUND"!==t.code)throw t;r={CTF_PERSON_ID:"15jwOBqpxqSAOy2eOO4S0m",CTF_BLOG_POST_TYPE_ID:"blogPost",CTF_SPACE_ID:"he83vgal9b69",CTF_CDA_ACCESS_TOKEN:"23e5246c2983860670bcc6e3f2eeb70a24a4f61806837168156d4c1f77056d12",CTF_CMA_ACCESS_TOKEN:"CFPAT-d4eff85e5ca45f22610a613f894d4b4cda2d14970696652ca9aab433e1dcc27c"}}var o=n(84),a=n(83),i=o.createClient({space:r.CTF_SPACE_ID,accessToken:r.CTF_CDA_ACCESS_TOKEN}),s=a.createClient({accessToken:r.CTF_CMA_ACCESS_TOKEN});t.exports={cdaClient:i,cmaClient:s,config:r}},69:function(t,e){t.exports={CTF_PERSON_ID:"15jwOBqpxqSAOy2eOO4S0m",CTF_BLOG_POST_TYPE_ID:"blogPost",CTF_SPACE_ID:"he83vgal9b69",CTF_CDA_ACCESS_TOKEN:"23e5246c2983860670bcc6e3f2eeb70a24a4f61806837168156d4c1f77056d12",CTF_CMA_ACCESS_TOKEN:"CFPAT-d4eff85e5ca45f22610a613f894d4b4cda2d14970696652ca9aab433e1dcc27c"}},70:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=70},71:function(t,e,n){"use strict";function r(t,e,n){return t.map(function(t){var r=t.options.transition;return"function"==typeof r?r(e,n):r})}function o(t,e,r){var o=this,a=n.i(_.f)(t,function(t,e,r,o){return"function"!=typeof t||t.options?(t=n.i(_.g)(t),r.components[o]=t,r.components[o]):new v.a(function(e,a){var i=function(t){t=n.i(_.g)(t),r.components[o]=t,e(t)};t().then(i).catch(a)})}),i=e.fullPath.split("#")[0],s=t.fullPath.split("#")[0];this._hashChanged=i===s,this._hashChanged||this.$loading.start&&this.$loading.start(),v.a.all(a).then(function(){return r()}).catch(function(t){var e=t.statusCode||t.status||t.response&&t.response.status||500;o.error({statusCode:e,message:t.message}),r(!1)})}function a(t,e,r){var o=this,a=[],i=!1;if(void 0!==r&&(a=[],r.middleware&&(a=a.concat(r.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"!=typeof C.a[t]&&(i=!0,o.error({statusCode:500,message:"Unknown middleware "+t})),C.a[t]}),!i)return n.i(_.h)(a,e)}function i(t,e){n.i(_.f)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":l()(t))||t.options||(t=x.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function s(t,e){var r=this;this._hashChanged||x.default.nextTick(function(){var e=n.i(_.i)(t);E=e.map(function(t,e){if(!t)return"";if(w[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)x.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),r._hadError&&r._dateLastError===r.$options._nuxt.dateErr&&r.error();var o=r.$options._nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof o&&(o=o(r._context)),r.setLayout(o),setTimeout(function(){return u(r)},100)})}function u(t){return}function c(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),T.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var f=n(42),l=n.n(f),d=n(43),p=n.n(d),h=n(41),A=n.n(h),m=n(10),v=n.n(m),x=n(3),C=n(67),g=n(66),_=n(40),y=this,b=function(){var t=A()(p.a.mark(function t(e,o,i){var s,u,c,f,l,d,h,A=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",i());case 2:if(s=void 0,u=!1,c=function(t){this.$loading.finish&&this.$loading.finish(),u||(u=!0,i(t))},f=n.i(_.a)({to:e,store:$,isClient:!0,next:c.bind(this),error:this.error.bind(this)},B),l=n.i(_.b)(e),this._context=f,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,l.length){t.next=24;break}return t.next=13,a.call(this,l,f);case 13:if(!f._redirected){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout(f):g.a.layout);case 17:return s=t.sent,t.next=20,a.call(this,l,f,s);case 20:if(!f._redirected){t.next=22;break}return t.abrupt("return");case 22:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",i());case 24:return l.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(r(l,e,o)),t.prev=26,t.next=29,a.call(this,l,f);case 29:if(!f._redirected){t.next=31;break}return t.abrupt("return");case 31:return s=l[0].options.layout,"function"==typeof s&&(s=s(f)),t.next=35,this.loadLayout(s);case 35:return s=t.sent,t.next=38,a.call(this,l,f,s);case 38:if(!f._redirected){t.next=40;break}return t.abrupt("return");case 40:if(d=!0,l.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:f.store}))}),d){t.next=45;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",i());case 45:return t.next=47,v.a.all(l.map(function(t,r){if(t._path=n.i(_.c)(e.matched[r].path)(e.params),!A._hadError&&t._path===w[r]&&r+1!==l.length)return v.a.resolve();var o=[];if(t.options.asyncData&&"function"==typeof t.options.asyncData){var a=n.i(_.d)(t.options.asyncData,f);a.then(function(e){n.i(_.e)(t,e),A.$loading.increase&&A.$loading.increase(30)}),o.push(a)}if(t.options.fetch){var i=t.options.fetch(f);i&&(i instanceof v.a||"function"==typeof i.then)||(i=v.a.resolve(i)),i.then(function(){return A.$loading.increase&&A.$loading.increase(30)}),o.push(i)}return v.a.all(o)}));case 47:w=l.map(function(t,r){return n.i(_.c)(e.matched[r].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),u||i(),t.next=59;break;case 52:t.prev=52,t.t0=t.catch(26),w=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=g.a.layout,"function"==typeof h&&(h=h(f)),this.loadLayout(h).then(function(){A.error(t.t0),i(!1)});case 59:case"end":return t.stop()}},t,this,[[26,52]])}));return function(e,n,r){return t.apply(this,arguments)}}(),w=[],E=[],B=void 0,T=void 0,$=void 0,k=window.__NUXT__||{};if(!k)throw new Error("[nuxt.js] cannot find the global variable __NUXT__, make sure the server is working.");var S=function(t){var e=n.i(_.j)(t.options.base);return n.i(_.f)(t.match(e),function(t,e,r,o,a){return"function"!=typeof t||t.options?(t=n.i(_.g)(t),r.components[o]=t,t):new v.a(function(e,i){var s=function(t){t=n.i(_.g)(t),k.serverRendered&&n.i(_.e)(t,k.data[a]),r.components[o]=t,e(t)};t().then(s).catch(i)})})};n.i(g.b)().then(function(){var t=A()(p.a.mark(function t(e){var a,f,l,d;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=e.app,T=e.router,$=e.store,t.next=5,v.a.all(S(T));case 5:return a=t.sent,f=new x.default(B),l=k.layout||"default",t.next=10,f.loadLayout(l);case 10:if(f.setLayout(l),d=function(){f.$mount("#__nuxt"),x.default.nextTick(function(){u(f),c(f)})},f.setTransitions=f.$options._nuxt.setTransitions.bind(f),a.length&&(f.setTransitions(r(a,T.currentRoute)),w=T.currentRoute.matched.map(function(t){return n.i(_.c)(t.path)(T.currentRoute.params)}),E=a.map(function(t){return t.options.__file})),f.error=f.$options._nuxt.error.bind(f),f.$loading={},k.error&&f.error(k.error),T.beforeEach(o.bind(f)),T.beforeEach(b.bind(f)),T.afterEach(i),T.afterEach(s.bind(f)),!k.serverRendered){t.next=24;break}return d(),t.abrupt("return");case 24:b.call(f,T.currentRoute,T.currentRoute,function(t){if(t){var e=!1;return T.afterEach(function(){e||(e=!0,d())}),void T.push(t)}i(T.currentRoute,T.currentRoute),s.call(f,T.currentRoute,T.currentRoute),d()});case 25:case"end":return t.stop()}},t,y)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){console.error("[nuxt.js] Cannot load components",t)})},72:function(t,e,n){"use strict";n(3);e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},73:function(t,e,n){"use strict";function r(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:f,routes:[{path:"/",component:i,name:"index"},{path:"/blog",component:s,name:"blog"},{path:"/tags/:tag?",component:u,name:"tags-tag"},{path:"/blog/:slug",component:c,name:"blog-slug"}]})}e.a=r;var o=n(3),a=n(45);o.default.use(a.default);var i=function(){return n.e(1).then(n.bind(null,145))},s=function(){return n.e(3).then(n.bind(null,144))},u=function(){return n.e(2).then(n.bind(null,146))},c=function(){return n.e(0).then(n.bind(null,143))},f=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},74:function(t,e,n){"use strict";function r(t){var e=l(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function o(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},o(t.modules[n],e)}n.d(e,"a",function(){return b});var a=n(27),i=n.n(a),s=n(49),u=n.n(s),c=n(3),f=n(46);c.default.use(f.default);var l=n(140),d=l.keys(),p={},h=d.find(function(t){return t.includes("./index.")});if(h&&(p=r(h)),"function"!=typeof p){p.modules||(p.modules={});var A=!0,m=!1,v=void 0;try{for(var x,C=u()(d);!(A=(x=C.next()).done);A=!0){var g=x.value,_=g.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==_){var y=_.split(/\//),t=o(p,y);_=y.pop(),t[_]=r(g),t[_].namespaced=!0}}}catch(t){m=!0,v=t}finally{try{!A&&C.return&&C.return()}finally{if(m)throw v}}}var b=p instanceof Function?p:function(){return new f.default.Store(i()({},p,{state:p.state instanceof Function?p.state():{}}))}},75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),o=n.n(r),a=n(131),i=n.n(a),s={_default:function(){return n.e(4).then(n.bind(null,142))}};e.default={head:{title:"Custom app with Contentful",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Custom app in under 5 minutes"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.png"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/minireset.css/0.0.2/minireset.min.css"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&s["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=s[e],this.layout},loadLayout:function(t){var e=this;t&&s["_"+t]||(t="default");var n="_"+t;return"function"!=typeof s[n]?o.a.resolve(s[n]):s[n]().then(function(t){return s[n]=t,s[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message});console.error(t)})}},components:{NuxtLoading:i.a}}},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},77:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3);e.default={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#2199e8",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n(51),a=n(65),i=n.n(a);e.default={name:"nuxt",beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},components:{NuxtChild:o.a,NuxtError:i.a}}}},[71]);