(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d77":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery"},[a("h1",[t._v("Gallery")]),t._l(t.gallery_images,(function(t,e){return a("div",{key:e},[a("GalleryImage",{attrs:{title:t.data.title[0].text,description:t.data.description[0].text,image:t.data.image.url,alt:t.data.image.alt}})],1)}))],2)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-image"},[a("img",{attrs:{src:t.image,alt:t.alt}}),a("div",[a("h2",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.description))])])])},l=[],s={name:"Album",props:{title:String,description:String,image:String,alt:String},data:function(){return{}}},c=s,u=(a("abb0"),a("2877")),o=Object(u["a"])(c,r,l,!1,null,"5dfba271",null),g=o.exports,m={name:"gallery",components:{GalleryImage:g},data:function(){return{gallery_images:[]}},methods:{getContent:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.at("document.type","gallery_image")).then((function(e){t.gallery_images=e.results}))}},created:function(){this.getContent()}},d=m,f=Object(u["a"])(d,n,i,!1,null,"14c6e956",null);e["default"]=f.exports},"918a":function(t,e,a){},abb0:function(t,e,a){"use strict";var n=a("918a"),i=a.n(n);i.a},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],r=a("2877"),l={},s=Object(r["a"])(l,n,i,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.4c274944.js.map