webpackJsonp([4],{142:function(e,n,A){function t(e){A(300)}var a=A(17)(A(182),A(293),t,null,null);e.exports=a.exports},181:function(e,n,A){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},182:function(e,n,A){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=A(290),a=A.n(t);n.default={components:{Greeting:a.a}}},196:function(e,n,A){n=e.exports=A(47)(!0),n.push([e.i,'@font-face{font-family:Avenir;font-weight:400;font-style:normal;src:url("/avenir-400.woff2") format("woff2");font-display:swap}body{background:#e1e7ea;max-width:1180px;margin:0 auto;font-family:Avenir,Tahoma,Arial,Helvetica,sans-serif;font-size:16px;line-height:1.65;color:#373f49}.wrapper{padding:2em 0;max-width:80%;margin:0 auto}.header{background:#f7f9fa}.page-bar{max-width:100%;padding:2em 10%}.blog.header h2,.tag-page.header h2{text-align:center;padding:2.5em 0;color:#a0a0a0}img{display:block;width:100%}h1,h2,h3{font-size:2em}.body-container{background:#fff}.items-list{overflow:hidden}.item{padding:1em 3em 1em 0}@media (min-width:600px){.item{float:left;width:50%}}@media (min-width:900px){.item{width:33.333%}}.tiny{text-transform:uppercase;font-size:10px;letter-spacing:1px;color:#a0a0a0}[class*=-bar]{border-bottom:1px solid #ebebeb}',"",{version:3,sources:["/Users/feathers/Projects/Apps/VueApps/nuxt-contentful-blog-example/blog-in-5-minutes/layouts/default.vue"],names:[],mappings:"AACA,WACE,mBAAsB,AACtB,gBAAiB,AACjB,kBAAmB,AACnB,6CAA8C,AAC9C,iBAAmB,CACpB,AACD,KACE,mBAAoB,AACpB,iBAAkB,AAClB,cAAe,AACf,qDAA4D,AAC5D,eAAgB,AAChB,iBAAkB,AAClB,aAAe,CAChB,AACD,SACE,cAAe,AACf,cAAe,AACf,aAAe,CAChB,AACD,QACE,kBAAoB,CACrB,AACD,UACE,eAAgB,AAChB,eAAiB,CAClB,AACD,oCAEE,kBAAmB,AACnB,gBAAiB,AACjB,aAAe,CAChB,AACD,IACE,cAAe,AACf,UAAY,CACb,AACD,SAGE,aAAe,CAChB,AAGD,gBACE,eAAoB,CACrB,AACD,YACE,eAAiB,CAClB,AACD,MACE,qBAAuB,CACxB,AACD,yBACA,MACI,WAAY,AACZ,SAAW,CACd,CACA,AACD,yBACA,MACI,aAAe,CAClB,CACA,AAGD,MACE,yBAA0B,AAC1B,eAAgB,AAChB,mBAAoB,AACpB,aAAe,CAChB,AACD,cACE,+BAAiC,CAClC",file:"default.vue",sourcesContent:['\n@font-face {\n  font-family: "Avenir";\n  font-weight: 400;\n  font-style: normal;\n  src: url("/avenir-400.woff2") format("woff2");\n  font-display: swap;\n}\nbody {\n  background: #E1E7EA;\n  max-width: 1180px;\n  margin: 0 auto;\n  font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  line-height: 1.65;\n  color: #373F49;\n}\n.wrapper {\n  padding: 2em 0;\n  max-width: 80%;\n  margin: 0 auto;\n}\n.header {\n  background: #F7F9FA;\n}\n.page-bar {\n  max-width: 100%;\n  padding: 2em 10%;\n}\n.blog.header h2,\n.tag-page.header h2 {\n  text-align: center;\n  padding: 2.5em 0;\n  color: #A0A0A0;\n}\nimg {\n  display: block;\n  width: 100%;\n}\nh1,\nh2,\nh3 {\n  font-size: 2em;\n}\n\n/* Copy section */\n.body-container {\n  background: #ffffff;\n}\n.items-list {\n  overflow: hidden;\n}\n.item {\n  padding: 1em 3em 1em 0;\n}\n@media all and (min-width: 600px) {\n.item {\n    float: left;\n    width: 50%;\n}\n}\n@media all and (min-width: 900px) {\n.item {\n    width: 33.333%;\n}\n}\n\n/* Shared */\n.tiny {\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: #A0A0A0;\n}\n*[class*="-bar"] {\n  border-bottom: 1px solid #EBEBEB;\n}\n\n'],sourceRoot:""}])},198:function(e,n,A){n=e.exports=A(47)(!0),n.push([e.i,".greeting{background:#fff;border:1px solid #489cf1;margin:2em 0}.message{overflow:hidden;padding:3em 0}.message p{margin-bottom:2em}code{border-radius:3px;background:#e1e7ea;padding:3px 5px}@media (min-width:900px){.message p{float:left;max-width:70%;margin-bottom:0}}.message .cta{font-size:inherit;background:#489cf1;border:0;border-radius:3px;color:#fff;padding:1em 2em;text-decoration:none}@media (min-width:900px){.message .cta{float:right;max-width:20%}}","",{version:3,sources:["/Users/feathers/Projects/Apps/VueApps/nuxt-contentful-blog-example/blog-in-5-minutes/components/greeting.vue"],names:[],mappings:"AACA,UACE,gBAAiB,AACjB,yBAA0B,AAC1B,YAAc,CACf,AACD,SACE,gBAAiB,AACjB,aAAe,CAChB,AACD,WACE,iBAAmB,CACpB,AACD,KACE,kBAAmB,AACnB,mBAAoB,AACpB,eAAiB,CAClB,AACD,yBACA,WACI,WAAY,AACZ,cAAe,AACf,eAAiB,CACpB,CACA,AACD,cACE,kBAAmB,AACnB,mBAAoB,AACpB,SAAU,AACV,kBAAmB,AACnB,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,yBACA,cACI,YAAa,AACb,aAAe,CAClB,CACA",file:"greeting.vue",sourcesContent:["\n.greeting {\n  background: #fff;\n  border: 1px solid #489CF1;\n  margin: 2em 0;\n}\n.message {\n  overflow: hidden;\n  padding: 3em 0;\n}\n.message p {\n  margin-bottom: 2em;\n}\ncode {\n  border-radius: 3px;\n  background: #E1E7EA;\n  padding: 3px 5px;\n}\n@media all and (min-width: 900px) {\n.message p {\n    float: left;\n    max-width: 70%;\n    margin-bottom: 0;\n}\n}\n.message .cta {\n  font-size: inherit;\n  background: #489CF1;\n  border: 0;\n  border-radius: 3px;\n  color: #fff;\n  padding: 1em 2em;\n  text-decoration: none;\n}\n@media all and (min-width: 900px) {\n.message .cta {\n    float: right;\n    max-width: 20%;\n}\n}\n\n"],sourceRoot:""}])},290:function(e,n,A){function t(e){A(302)}var a=A(17)(A(181),A(295),t,null,null);e.exports=a.exports},293:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,A=e._self._c||n;return A("div",{staticClass:"container"},[A("main",{attrs:{role:"main"}},[A("nuxt")],1)])},staticRenderFns:[]}},295:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,A=e._self._c||n;return A("section",{staticClass:"greeting"},[A("div",{staticClass:"message wrapper"},[A("p",[e._v("\n      There you go! You just set up a Contentful account and a custom app. Now go ahead and "),A("a",{attrs:{href:"https://app.contentful.com/",target:"_blank"}},[e._v("try the Web App")]),e._v(" or head over to the "),A("a",{attrs:{href:"http://contentful.com/developers/docs",target:"_blank"}},[e._v("Documentation")]),e._v(" to learn more about building with Contentful. If you want to remove this message, delete line "),A("code",[e._v("3")]),e._v(" in "),A("code",[e._v("layouts/default.vue")]),e._v(".\n    ")]),A("a",{staticClass:"cta",attrs:{href:"https://app.contentful.com/",target:"_blank"}},[e._v("Try the Web App")])])])}]}},300:function(e,n,A){var t=A(196);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);A(48)("37c764c4",t,!0)},302:function(e,n,A){var t=A(198);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);A(48)("c5a79c50",t,!0)}});