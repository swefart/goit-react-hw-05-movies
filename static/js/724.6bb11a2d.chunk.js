/*! For license information please see 724.6bb11a2d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[724],{546:function(t,e,r){r.d(e,{v:function(){return i}});var n=r(243);n.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="739de7fbd1b92eaba75889325353e1e0",i={getTrendMovies:function(){return n.Z.get("trending/movie/day?api_key=".concat(o))},getMoviesByQuery:function(t){return n.Z.get("search/movie?query=".concat(t,"&api_key=").concat(o))},getMovieByID:function(t){return n.Z.get("movie/".concat(t,"?api_key=").concat(o))},getCreditsMovie:function(t){return n.Z.get("movie/".concat(t,"/credits?api_key=").concat(o))},getReviewsMovie:function(t){return n.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o))}}},724:function(t,e,r){r.r(e),r.d(e,{default:function(){return B}});var n,o,i,a,c,u,s,l,h,f,p,d,v=r(413),g=r(861),y=r(439),m=r(791),x=r(689),w=r(168),b=r(867),j=r(87),_=(0,b.zo)(j.rU)(n||(n=(0,w.Z)(["\ndisplay: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 4px;\n  margin-bottom: 10px;\n\n  background-color: #f5f5f5;\n  color: black;\n\n  border: 1px solid black;\n  border-radius: 4px;\n\n  text-decoration: none;\n\n  &:active {\n    background-color: pink;\n    color: white;\n  }\n"]))),L=b.zo.div(o||(o=(0,w.Z)(["\ndisplay:flex;\ngap: 20px;\npadding: 20px 0;\n"]))),k=b.zo.img(i||(i=(0,w.Z)(["\ndisplay: block;\nwidth: 17%;\n"]))),E=b.zo.div(a||(a=(0,w.Z)(["\n"]))),Z=b.zo.h1(c||(c=(0,w.Z)(["\n    margin-bottom: 12px;\n"]))),O=b.zo.h2(u||(u=(0,w.Z)(["\n    margin-bottom: 12px;   \n"]))),z=b.zo.h3(s||(s=(0,w.Z)(["\n    margin-bottom: 12px;   \n"]))),N=b.zo.p(l||(l=(0,w.Z)(["\n    margin-bottom: 12px;   \n"]))),G=b.zo.ul(h||(h=(0,w.Z)([""]))),S=b.zo.li(f||(f=(0,w.Z)(["\nmargin-bottom: 10px;\n"]))),M=(0,b.zo)(j.rU)(p||(p=(0,w.Z)(["\nfont-size: 18px;\nfont-weight: 600;\n\ntext-decoration: none;\n"]))),F=b.zo.h2(d||(d=(0,w.Z)(["\n    font-size: 16px;\n    margin-bottom: 10px;\n"]))),T=r(546),P=r(185),I=r(184);function U(){U=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(Z){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(E([])));y&&y!==e&&r.call(y,i)&&(v=y);var m=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var B=function(){var t,e,r=(0,m.useState)(null),n=(0,y.Z)(r,2),o=n[0],i=n[1],a=(0,x.UO)().movieId,c=(0,x.TH)(),u=(0,m.useRef)(null!==(t=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");(0,m.useEffect)((function(){function t(){return(t=(0,g.Z)(U().mark((function t(){var e,r;return U().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.v.getMovieByID(a);case 3:e=t.sent,r=e.data,i((0,v.Z)({},r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(new Error);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]);if(o){var s,l,h,f=o.poster_path,p=o.title,d=o.release_date,w=o.vote_average,b=o.overview,j=o.genres;return(0,I.jsx)(I.Fragment,{children:o&&(0,I.jsxs)(I.Fragment,{children:[" ",(0,I.jsxs)("div",{className:"container",children:[(0,I.jsxs)(_,{to:u.current,children:[(0,I.jsx)(P.i1r,{}),"Go Back"]}),(0,I.jsxs)(L,{children:[(0,I.jsx)(k,{src:(h=f,h?"https://image.tmdb.org/t/p/w500/"+h:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Movietime.svg/1920px-Movietime.svg.png")}),(0,I.jsxs)(E,{children:[(0,I.jsxs)(Z,{children:[p," (",(l=d,new Date(l).getFullYear()),")"]}),(0,I.jsxs)(N,{children:[" User Score: ",function(t){return"".concat(Math.round(10*t),"%")}(w)]}),(0,I.jsx)(O,{children:"Overview"}),(0,I.jsx)(N,{children:b}),(0,I.jsx)(z,{children:"Genres"}),(0,I.jsx)(N,{children:(s=j,s.map((function(t){return t.name})).join(" "))})]})]})]}),(0,I.jsxs)("div",{className:"container",children:[(0,I.jsx)(F,{children:"Additional information"}),(0,I.jsxs)(G,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(M,{to:"cast",children:"Cast"})}),(0,I.jsx)(S,{children:(0,I.jsx)(M,{to:"reviews",children:"Reviews"})})]})]}),(0,I.jsx)("div",{className:"container",children:(0,I.jsx)(m.Suspense,{children:(0,I.jsx)(x.j3,{})})})]})})}}}}]);
//# sourceMappingURL=724.6bb11a2d.chunk.js.map