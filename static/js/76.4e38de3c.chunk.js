"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{8076:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(885),a=n(1083),c=n(2791),s=n(6871),u=n(2743),i="Cast_CastList__2oQ+0",o="Cast_ListItems__7rdG3",p=n(184),f=function(){var t=(0,s.bx)(),e=(0,c.useState)([]),n=(0,r.Z)(e,2),f=n[0],h=n[1];return(0,c.useEffect)((function(){a.Z.fetchActorsList(t).then((function(t){return h(t.cast)}))}),[t]),(0,p.jsx)("ul",{className:i,children:f.map((function(t){var e=t.profile_path,n=t.name,r=t.id,a=t.character;return(0,p.jsxs)("li",{className:o,children:[e?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:n,width:"200"}):(0,p.jsx)("img",{src:u,alt:n,width:"200"}),(0,p.jsx)("p",{children:a})]},r)}))})}},1083:function(t,e,n){var r=n(5861),a=n(7757),c=n.n(a),s=n(4569),u=n.n(s);u().defaults.baseURL="https://api.themoviedb.org/3";var i="2defa68d74572c770c8e2770c2623d03";function o(){return(o=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d={fetchTrendingMovie:function(){return o.apply(this,arguments)},searchFilms:function(t){return p.apply(this,arguments)},fetchActorsList:function(t){return f.apply(this,arguments)},fetchReviews:function(t){return h.apply(this,arguments)},fetchDetailsMovie:function(t){return l.apply(this,arguments)}};e.Z=d},2743:function(t,e,n){t.exports=n.p+"static/media/defaultImg.64e8cef3084907a7cecd.png"}}]);
//# sourceMappingURL=76.4e38de3c.chunk.js.map