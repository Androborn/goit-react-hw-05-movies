"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[11],{9011:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t,i,a=r(8479),o=r(4672),u=r(8423),c=r(6931),s=r(168),f=r(5751),d=f.ZP.div(t||(t=(0,s.Z)([""]))),l=f.ZP.h1(i||(i=(0,s.Z)([""]))),v=r(184);function h(){var e=(0,c.k)("/trending/movie/day"),n=e.fetchedMovies,r=e.loading,t=e.error;return a.ZP.error(null===t||void 0===t?void 0:t.message),(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{children:"Trending today"}),t&&(0,v.jsx)(a.x7,{}),(0,v.jsx)(o.Z,{fetchedMovies:n}),r&&(0,v.jsx)(u.a,{})]})}},4672:function(e,n,r){r.d(n,{Z:function(){return p}});var t,i,a,o=r(6871),u=r(2005),c=r(168),s=r(501),f=r(5751),d=f.ZP.ol(t||(t=(0,c.Z)([""]))),l=f.ZP.li(i||(i=(0,c.Z)(["\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n"]))),v=(0,f.ZP)(s.rU)(a||(a=(0,c.Z)([""]))),h=r(184);function p(e){var n,r=e.fetchedMovies,t=(0,o.TH)();return(0,h.jsx)(d,{children:null===r||void 0===r||null===(n=r.results)||void 0===n?void 0:n.map((function(e){var n=e.id,r=e.title;return(0,h.jsx)(l,{children:(0,h.jsx)(v,{to:"/movies/".concat(n),state:{from:t},children:r})},(0,u.x0)())}))})}},6931:function(e,n,r){r.d(n,{k:function(){return f}});var t=r(5861),i=r(885),a=r(7757),o=r.n(a),u=r(2791),c=r(4569),s=function(e,n){return c.defaults.baseURL="https://api.themoviedb.org",c.get("".concat("3","/").concat(e),{params:{api_key:"f979c5d182d240e48ce15515a9f4d973",language:"en-US",include_adult:false,query:n,append_to_response:"credits,reviews"}}).then((function(e){var n=e.data;if(n)return n;throw new Error("Search error")}))},f=function(e,n){var r=(0,u.useState)(null),a=(0,i.Z)(r,2),c=a[0],f=a[1],d=(0,u.useState)(!1),l=(0,i.Z)(d,2),v=l[0],h=l[1],p=(0,u.useState)(null),Z=(0,i.Z)(p,2),g=Z[0],m=Z[1];return(0,u.useEffect)((function(){function r(){return(r=(0,t.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(h(!0),r.prev=1,null!==n){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,s(e,n);case 6:return t=r.sent,r.abrupt("return",f(t));case 10:r.prev=10,r.t0=r.catch(1),m(r.t0);case 13:return r.prev=13,h(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,10,13,16]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e,n]),{fetchedMovies:c,loading:v,error:g}}},8423:function(e,n,r){r.d(n,{a:function(){return t.Z}});var t=r(9700)},2005:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",r=crypto.getRandomValues(new Uint8Array(e));e--;){var t=63&r[e];n+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return n}}}]);
//# sourceMappingURL=11.a3b3c536.chunk.js.map