webpackJsonp([2],{146:function(t,e,n){function s(t){n(303)}var i=n(17)(n(186),n(296),s,null,null);t.exports=i.exports},150:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{}}},151:function(t,e,n){e=t.exports=n(47)(!0),e.push([t.i,".person-name:link,.person-name:visited{width:50%;display:inline-block;font-size:2em;text-decoration:none;color:#373f49}.top-nav{width:50%;text-align:right}.menu,.menu li,.top-nav{display:inline-block}.menu li{margin-left:1em}.menu a:link,.menu a:visited{color:#373f49;text-decoration:none}","",{version:3,sources:["/Users/feathers/Projects/Apps/VueApps/sbgithub_nuxt-test/components/navigation.vue"],names:[],mappings:"AACA,uCAEE,UAAW,AACX,qBAAsB,AACtB,cAAe,AACf,qBAAsB,AACtB,aAAe,CAChB,AACD,SACE,UAAW,AAEX,gBAAkB,CACnB,AAID,wBANE,oBAAsB,CASvB,AAHD,SAEE,eAAiB,CAClB,AACD,6BAEE,cAAe,AACf,oBAAsB,CACvB",file:"navigation.vue",sourcesContent:["\n.person-name:link,\n.person-name:visited {\n  width: 50%;\n  display: inline-block;\n  font-size: 2em;\n  text-decoration: none;\n  color: #373F49;\n}\n.top-nav {\n  width: 50%;\n  display: inline-block;\n  text-align: right;\n}\n.menu {\n  display: inline-block;\n}\n.menu li {\n  display: inline-block;\n  margin-left: 1em;\n}\n.menu a:link,\n.menu a:visited {\n  color: #373F49;\n  text-decoration: none;\n}\n\n"],sourceRoot:""}])},152:function(t,e,n){function s(t){n(154)}var i=n(17)(n(150),n(153),s,null,null);t.exports=i.exports},153:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"top-nav",attrs:{role:"navigation"}},[n("ul",{staticClass:"menu"},t._l(this.$router.options.routes,function(e){return/\/.*?\/.*/.test(e.path)?t._e():n("li",[n("nuxt-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.name.charAt(0).toUpperCase()+e.name.slice(1)))])],1)}))])},staticRenderFns:[]}},154:function(t,e,n){var s=n(151);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(48)("76f1a566",s,!0)},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["post"],components:{}}},156:function(t,e,n){e=t.exports=n(47)(!0),e.push([t.i,".thumbnail{margin-bottom:1em}.title{text-decoration:none;font-size:22px;color:#373f49}.tags{padding:1em 0;margin-bottom:2em}.tag:link,.tag:visited{color:#a0a0a0;text-decoration:none;display:inline-block;padding:.33333rem .5rem;line-height:1;border-radius:2px;border:1px solid #a0a0a0;margin-right:.5em}.tag:active,.tag:focus,.tag:hover{color:#606060;border-color:#606060}","",{version:3,sources:["/Users/feathers/Projects/Apps/VueApps/sbgithub_nuxt-test/components/article-preview.vue"],names:[],mappings:"AACA,WACE,iBAAmB,CACpB,AAGD,OACE,qBAAsB,AACtB,eAAgB,AAChB,aAAe,CAChB,AACD,MACE,cAAgB,AAChB,iBAAmB,CACpB,AACD,uBAEE,cAAe,AACf,qBAAsB,AACtB,qBAAsB,AACtB,wBAAyB,AACzB,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,kCAGE,cAAe,AACf,oBAAsB,CACvB",file:"article-preview.vue",sourcesContent:["\n.thumbnail {\n  margin-bottom: 1em;\n}\n.date {\n}\n.title {\n  text-decoration: none;\n  font-size: 22px;\n  color: #373F49;\n}\n.tags {\n  padding : 1em 0;\n  margin-bottom: 2em;\n}\n.tag:link,\n.tag:visited {\n  color: #A0A0A0;\n  text-decoration: none;\n  display: inline-block;\n  padding: .33333rem .5rem;\n  line-height: 1;\n  border-radius: 2px;\n  border: 1px solid #A0A0A0;\n  margin-right: .5em;\n}\n.tag:active,\n.tag:hover,\n.tag:focus {\n  color: #606060;\n  border-color: #606060;\n}\n\n"],sourceRoot:""}])},158:function(t,e,n){function s(t){n(160)}var i=n(17)(n(155),n(159),s,null,null);t.exports=i.exports},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.heroImage.fields.file.url+"?fit=scale&w=350&h=196",srcset:t.post.fields.heroImage.fields.file.url+"?w=350&h=196&fit=fill 350w, "+t.post.fields.heroImage.fields.file.url+"?w=1000&h=562&fit=fill 1000w, "+t.post.fields.heroImage.fields.file.url+"?w=2000&h=1125&fit=fill 2000w",sizes:"(min-width: 1024px) 400px, 100vw"}}),n("time",{staticClass:"tiny date"},[t._v(t._s(new Date(t.post.fields.publishDate).toDateString()))]),n("h4",[n("nuxt-link",{staticClass:"title",attrs:{to:{name:"blog-slug",params:{slug:t.post.fields.slug}}}},[t._v(t._s(t.post.fields.title))])],1),n("p",[t._v(t._s(t.post.fields.description))]),n("div",{staticClass:"tags"},t._l(t.post.fields.tags,function(e){return n("nuxt-link",{key:e,staticClass:"tag",attrs:{to:{name:"tags-tag",params:{tag:e}}}},[t._v(t._s(e))])}))])},staticRenderFns:[]}},160:function(t,e,n){var s=n(156);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(48)("b7adae72",s,!0)},186:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(68),i=(n.n(s),n(152)),a=n.n(i),o=n(158),r=n.n(o);e.default={transition:"fade",asyncData:function(t){var e=t.params;return s.cdaClient.getEntries({content_type:"blogPost","fields.tags[in]":e.tag,order:"-sys.createdAt"}).then(function(t){return{posts:t.items,tag:e.tag}})},components:{ArticlePreview:r.a,Navigation:a.a}}},199:function(t,e,n){e=t.exports=n(47)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_tag.vue",sourceRoot:""}])},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"tag-page header"},[n("div",{staticClass:"foreground"},[n("div",{staticClass:"page-bar wrapper"},[n("a",{staticClass:"person-name",attrs:{href:"/"}},[t._v("John Doe")]),n("Navigation")],1),n("div",{staticClass:"page-info wrapper"},[n("h2",[t._v("#"+t._s(t.tag))])])])]),n("section",{staticClass:"body-container"},[n("div",{staticClass:"items-bar wrapper"},[n("h2",[t._v("All articles tagged #"+t._s(t.tag)+" ("+t._s(t.posts.length)+")")])]),n("ul",{staticClass:"items-list wrapper"},t._l(t.posts,function(t){return n("li",{staticClass:"item"},[n("article-preview",{attrs:{post:t}})],1)}))])])},staticRenderFns:[]}},303:function(t,e,n){var s=n(199);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(48)("d7b38ca6",s,!0)}});