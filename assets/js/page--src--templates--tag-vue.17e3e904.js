(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{162:function(t,s,e){"use strict";var a={name:"Footer"},r=e(29),n=Object(r.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"text-gray-700 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"},[this._m(0),s("div",{staticClass:"w-full sm:w-1/2"},[s("nav",[s("ul",{staticClass:"flex sm:justify-end -mx-2"},[s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{to:"/"}},[this._v("Home")])],1),s("li",{staticClass:"px-2"},[s("g-link",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{to:"/about/"}},[this._v("About")])],1),this._m(1),this._m(2)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"w-full sm:w-1/2 mb-4 sm:mb-0"},[s("p",[this._v("Template from "),s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{href:"https://github.com/cossssmin/gridsome-starter-bleda"}},[this._v("Bleda")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{href:"/sitemap.xml"}},[this._v("Sitemap")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"px-2"},[s("a",{staticClass:"border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{href:"/feed.xml"}},[this._v("RSS Feed")])])}],!1,null,null,null);s.a=n.exports},295:function(t,s,e){"use strict";var a=e(4),r=e(74).includes,n=e(123);a({target:"Array",proto:!0,forced:!e(31)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},296:function(t,s,e){"use strict";e(30),e(70),e(69),e(73),e(25),e(71),e(72);var a=e(161),r=e.n(a),n={props:["post"],computed:{formattedPublishDate:function(){return r()(this.post.datetime).format("DD MMMM, YYYY")}},methods:{formatPublishDate:function(t){return r()(t).format("DD MMMM, YYYY")},excerpt:function(t,s,e){if(t.excerpt)return t.excerpt;s=s||280,e=e||" ...";var a=t.content.replace(/<pre(.|\n)*?<\/pre>/gm,"").replace(/<[^>]+>/gm,"");return a.length>s?"".concat(a.slice(0,s)).concat(e):a},titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}}},o=e(29),i=Object(o.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",[e("div",{staticClass:"mx-auto max-w-3xl px-6"},[e("div",{staticClass:"py-8 sm:py-20 border-b border-gray-300"},[e("header",{staticClass:"text-center mb-8"},[e("time",{staticClass:"text-gray-700 text-xs mb-2 uppercase",attrs:{datetime:t.post.datetime}},[t._v(t._s(t.formatPublishDate(t.post.datetime)))]),e("h2",{staticClass:"text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2"},[e("g-link",{staticClass:"text-black font-bold",attrs:{to:t.post.path+"/"}},[t._v(t._s(t.post.title))])],1),e("p",{staticClass:"text-gray-700 leading-normal text-sm sm:text-base"},[t.post.author?e("span",[t._v("by "),t.post.author?e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{to:t.post.author.path+"/"}},[t._v(t._s(t.titleCase(t.post.author.title)))]):t._e()],1):t._e(),t.post.tags&&t.post.tags.length>0?e("span",[t._v(" in "),e("g-link",{staticClass:"text-gray-700 capitalize border-b border-transparent hover:border-gray-400 transition-colors duration-300",attrs:{to:t.post.tags[0].path+"/"}},[t._v(t._s(t.titleCase(t.post.tags[0].title)))])],1):t._e(),t.post.author||t.post.tags&&t.post.tags.length>0?e("span",[t._v(" HERE ")]):t._e(),e("span",[t._v(t._s(t.post.timeToRead)+" min read")])])]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"leading-normal text-gray-700 text-lg px-2 sm:px-4 md:px-10",domProps:{innerHTML:t._s(t.excerpt(t.post,280," ..."))}})])])])}),[],!1,null,null,null);s.a=i.exports},297:function(t,s,e){"use strict";e(30),e(295);var a={props:["base","info"],methods:{previousPage:function(t){return[0,1].includes(t-1)?"".concat(this.basePath,"/"):"".concat(this.basePath,"/").concat(t-1,"/")},nextPage:function(t,s){return s>t?"".concat(this.basePath,"/").concat(t+1,"/"):"".concat(this.basePath,"/").concat(t,"/")}},computed:{basePath:function(){return this.base||""}}},r=e(29),n=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"border-b border-gray-300 mx-auto max-w-3xl px-6 md:px-8 py-16"},[e("nav",{attrs:{role:"navigation","aria-label":"pagination"}},[e("ul",{staticClass:"flex items-center justify-between sm:text-lg lg:text-xl"},[e("li",{staticClass:"lg:w-1/5"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-colors duration-300",class:{"pointer-events-none opacity-0":1==t.info.currentPage},attrs:{to:t.previousPage(t.info.currentPage),rel:1==t.info.currentPage?"nofollow":"prev"}},[t._v("\n          ← Previous\n        ")])],1),e("li",{staticClass:"hidden md:flex w-auto text-center text-gray-600 text-base"},[t._v("Page "+t._s(t.info.currentPage)+" of "+t._s(t.info.totalPages))]),e("li",{staticClass:"lg:w-1/5 text-right"},[e("g-link",{staticClass:"text-gray-700 hover:text-black px-4 py-2 transition-colors duration-300",class:{"pointer-events-none opacity-0":t.info.currentPage==t.info.totalPages},attrs:{to:t.nextPage(t.info.currentPage,t.info.totalPages),rel:t.info.currentPage==t.info.totalPages?"nofollow":"next"}},[t._v("\n          Next →\n        ")])],1)])])])}),[],!1,null,null,null);s.a=n.exports},298:function(t,s,e){var a={"./af":163,"./af.js":163,"./ar":164,"./ar-dz":165,"./ar-dz.js":165,"./ar-kw":166,"./ar-kw.js":166,"./ar-ly":167,"./ar-ly.js":167,"./ar-ma":168,"./ar-ma.js":168,"./ar-sa":169,"./ar-sa.js":169,"./ar-tn":170,"./ar-tn.js":170,"./ar.js":164,"./az":171,"./az.js":171,"./be":172,"./be.js":172,"./bg":173,"./bg.js":173,"./bm":174,"./bm.js":174,"./bn":175,"./bn.js":175,"./bo":176,"./bo.js":176,"./br":177,"./br.js":177,"./bs":178,"./bs.js":178,"./ca":179,"./ca.js":179,"./cs":180,"./cs.js":180,"./cv":181,"./cv.js":181,"./cy":182,"./cy.js":182,"./da":183,"./da.js":183,"./de":184,"./de-at":185,"./de-at.js":185,"./de-ch":186,"./de-ch.js":186,"./de.js":184,"./dv":187,"./dv.js":187,"./el":188,"./el.js":188,"./en-au":189,"./en-au.js":189,"./en-ca":190,"./en-ca.js":190,"./en-gb":191,"./en-gb.js":191,"./en-ie":192,"./en-ie.js":192,"./en-il":193,"./en-il.js":193,"./en-in":194,"./en-in.js":194,"./en-nz":195,"./en-nz.js":195,"./en-sg":196,"./en-sg.js":196,"./eo":197,"./eo.js":197,"./es":198,"./es-do":199,"./es-do.js":199,"./es-us":200,"./es-us.js":200,"./es.js":198,"./et":201,"./et.js":201,"./eu":202,"./eu.js":202,"./fa":203,"./fa.js":203,"./fi":204,"./fi.js":204,"./fil":205,"./fil.js":205,"./fo":206,"./fo.js":206,"./fr":207,"./fr-ca":208,"./fr-ca.js":208,"./fr-ch":209,"./fr-ch.js":209,"./fr.js":207,"./fy":210,"./fy.js":210,"./ga":211,"./ga.js":211,"./gd":212,"./gd.js":212,"./gl":213,"./gl.js":213,"./gom-deva":214,"./gom-deva.js":214,"./gom-latn":215,"./gom-latn.js":215,"./gu":216,"./gu.js":216,"./he":217,"./he.js":217,"./hi":218,"./hi.js":218,"./hr":219,"./hr.js":219,"./hu":220,"./hu.js":220,"./hy-am":221,"./hy-am.js":221,"./id":222,"./id.js":222,"./is":223,"./is.js":223,"./it":224,"./it-ch":225,"./it-ch.js":225,"./it.js":224,"./ja":226,"./ja.js":226,"./jv":227,"./jv.js":227,"./ka":228,"./ka.js":228,"./kk":229,"./kk.js":229,"./km":230,"./km.js":230,"./kn":231,"./kn.js":231,"./ko":232,"./ko.js":232,"./ku":233,"./ku.js":233,"./ky":234,"./ky.js":234,"./lb":235,"./lb.js":235,"./lo":236,"./lo.js":236,"./lt":237,"./lt.js":237,"./lv":238,"./lv.js":238,"./me":239,"./me.js":239,"./mi":240,"./mi.js":240,"./mk":241,"./mk.js":241,"./ml":242,"./ml.js":242,"./mn":243,"./mn.js":243,"./mr":244,"./mr.js":244,"./ms":245,"./ms-my":246,"./ms-my.js":246,"./ms.js":245,"./mt":247,"./mt.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl-be":252,"./nl-be.js":252,"./nl.js":251,"./nn":253,"./nn.js":253,"./oc-lnc":254,"./oc-lnc.js":254,"./pa-in":255,"./pa-in.js":255,"./pl":256,"./pl.js":256,"./pt":257,"./pt-br":258,"./pt-br.js":258,"./pt.js":257,"./ro":259,"./ro.js":259,"./ru":260,"./ru.js":260,"./sd":261,"./sd.js":261,"./se":262,"./se.js":262,"./si":263,"./si.js":263,"./sk":264,"./sk.js":264,"./sl":265,"./sl.js":265,"./sq":266,"./sq.js":266,"./sr":267,"./sr-cyrl":268,"./sr-cyrl.js":268,"./sr.js":267,"./ss":269,"./ss.js":269,"./sv":270,"./sv.js":270,"./sw":271,"./sw.js":271,"./ta":272,"./ta.js":272,"./te":273,"./te.js":273,"./tet":274,"./tet.js":274,"./tg":275,"./tg.js":275,"./th":276,"./th.js":276,"./tl-ph":277,"./tl-ph.js":277,"./tlh":278,"./tlh.js":278,"./tr":279,"./tr.js":279,"./tzl":280,"./tzl.js":280,"./tzm":281,"./tzm-latn":282,"./tzm-latn.js":282,"./tzm.js":281,"./ug-cn":283,"./ug-cn.js":283,"./uk":284,"./uk.js":284,"./ur":285,"./ur.js":285,"./uz":286,"./uz-latn":287,"./uz-latn.js":287,"./uz.js":286,"./vi":288,"./vi.js":288,"./x-pseudo":289,"./x-pseudo.js":289,"./yo":290,"./yo.js":290,"./zh-cn":291,"./zh-cn.js":291,"./zh-hk":292,"./zh-hk.js":292,"./zh-mo":293,"./zh-mo.js":293,"./zh-tw":294,"./zh-tw.js":294};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id=298},299:function(t,s){},305:function(t,s,e){"use strict";var a=e(299),r=e.n(a);s.default=r.a},323:function(t,s,e){"use strict";e.r(s);e(30),e(70),e(69),e(25),e(71),e(72),e(161);var a=e(5),r=e(296),n=e(162),o=e(297),i={components:{PostItem:r.a,Pagination:o.a,SiteFooter:n.a},metaInfo:function(){return{title:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"'),meta:[{key:"description",name:"description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:type",content:"website"},{property:"og:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{property:"og:url",content:"".concat(this.config.siteUrl).concat(this.$page.tag.path)},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:'Posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:description",content:'Browse posts tagged "'.concat(this.titleCase(this.$page.tag.title),'"')},{name:"twitter:site",content:"@cossssmin"},{name:"twitter:creator",content:"@cossssmin"},{name:"twitter:image",content:this.ogImageUrl}]}},methods:{titleCase:function(t){return t.replace("-"," ").split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.substring(1)})).join(" ")}},computed:{config:function(){return a.a},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/bleda-card.png")}}},l=e(29),c=e(305),g=Object(l.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("main",[e("header",[e("div",{staticClass:"max-w-xl md:max-w-3xl xl:max-w-4xl flex flex-col-reverse mx-auto text-center px-6 pt-24 pb-10 md:py-32 border-b border-gray-300"},[e("p",{staticClass:"text-gray-700 leading-normal"},[t._v(t._s(t.$page.tag.belongsTo.totalCount)+" posts in total")]),e("h1",{staticClass:"text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-2 capitalize"},[t._v(t._s(t.titleCase(t.$page.tag.title)))]),e("svg",{staticClass:"w-5 sm:w-6 fill-current text-gray-500 mx-auto mb-1",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",role:"img","aria-labelledby":"tagIcon"}},[e("title",{attrs:{id:"tagIcon"}},[t._v("Posts tagged")]),e("path",{attrs:{d:"M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}})])]),e("nav",{staticClass:"absolute top-0 left-0 z-20 mt-6 ml-6"},[e("g-link",{staticClass:"text-sm border text-gray-900 border-gray-400 opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300",attrs:{to:"/"}},[t._v("← Home")])],1)]),e("section",t._l(t.$page.tag.belongsTo.edges,(function(t){return e("post-item",{key:t.node.id,attrs:{post:t.node}})})),1),t.$page.tag.belongsTo.pageInfo.totalPages>1?e("pagination",{attrs:{base:""+t.$page.tag.path,info:t.$page.tag.belongsTo.pageInfo}}):t._e(),e("site-footer",{staticClass:"py-8 sm:py-16"})],1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(g);s.default=g.exports}}]);