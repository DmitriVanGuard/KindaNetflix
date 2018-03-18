!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){process.nextTick(function(){throw e})},r.w={},r(r.s=16)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return c});var n=r(11),o=r.n(n),a=r(5);function i(e){return{type:a.b,payload:e}}function c(e){var t,r,n=this;return t=regeneratorRuntime.mark(function t(r){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("http://localhost:3000/"+e);case 3:i=t.sent,r((n=i.data,{type:a.a,payload:n})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Fetching rating error ->",t.t0);case 10:case"end":return t.stop()}var n},t,n,[[0,7]])}),r=function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,a){try{var i=e[o](a),c=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});t(c)}("next")})},function(e){return r.apply(this,arguments)}}},function(e,t){e.exports=require("styled-components")},function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});var n="SET_SEARCH_TERM",o="ADD_API_DATA"},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(2),i=r(1),c=r(3),s=function(e){var t=void 0;return t=e.showSearch?o.a.createElement("input",{type:"text",value:e.searchTerm,onChange:e.handleSearchTermStateChange,placeholder:"Search"}):o.a.createElement("h2",null,o.a.createElement(i.Link,{to:"/search",href:"/search"},"Back")),o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(i.Link,{to:"/",href:"/"},"KindaNetflix")),t)};s.defaultProps={showSearch:!1};t.a=Object(a.connect)(function(e){return{searchTerm:e.searchTerm}},function(e){return{handleSearchTermStateChange:function(t){e(Object(c.b)(t.currentTarget.value))}}})(s)},function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(4),i=r.n(a),c=l(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto{\n\t\ttransform: rotate(360deg);\n\t}\n"],["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto{\n\t\ttransform: rotate(360deg);\n\t}\n"]),s=l(["\n\tanimation: "," 4s infinite linear;\n"],["\n\tanimation: "," 4s infinite linear;\n"]);function l(e,t){return e.raw=t,e}var u=Object(a.keyframes)(c),p=i.a.img(s,u);t.a=function(){return o.a.createElement(p,{src:"/public/img/loading.png",alt:"loading indicator"})}},function(e){e.exports={shows:[{title:"Atlanta",year:"2008–2013",description:"Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; \"Earnest 'Earn' Marks,\" an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.",poster:"a.jpg",imdbID:"tt4288182",trailer:"MpEdJ-mmTlY"},{title:"Billions",year:"2016–",description:'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',poster:"b.jpg",imdbID:"tt4270492",trailer:"_raEUMLL-ZI"},{title:"Black Mirror",year:"2011–",description:"A television anthology series that shows the dark side of life and technology.",poster:"bm.jpg",imdbID:"tt2085059",trailer:"jDiYGjp5iFg"},{title:"Breaking Bad",year:"2008–2013",description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",poster:"bb.jpg",imdbID:"tt0903747",trailer:"XZ8daibM3AE"},{title:"Game of Thrones",year:"2011–",description:"Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",poster:"got.jpg",imdbID:"tt0944947",trailer:"giYeaKsXnsI"},{title:"Homeland",year:"2011–",description:"A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.",poster:"h.jpg",imdbID:"tt1796960",trailer:"KyFmS3wRPCQ"},{title:"House of Cards",year:"2013–",description:"A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",poster:"hoc.jpg",imdbID:"tt1856010",trailer:"NTzycsqxYJ0"},{title:"Master of None",year:"2015–",description:"The personal and professional life of Dev, a 30-year-old actor in New York.",poster:"mon.jpg",imdbID:"tt4635276",trailer:"6bFvb3WKISk"},{title:"Narcos",year:"2015–",description:"A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",poster:"n.jpg",imdbID:"tt2707408",trailer:"U7elNhHwgBU"},{title:"Orange Is the New Black",year:"2013–",description:"The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.",poster:"oitnb.jpg",imdbID:"tt2372162",trailer:"th8WT_pxGqg"},{title:"Silicon Valley",year:"2014–",description:"Follows the struggle of Richard Hendricks, a silicon valley engineer trying to build his own company called Pied Piper.",poster:"sv.jpg",imdbID:"tt2575988",trailer:"69V__a49xtw"},{title:"Stranger Things",year:"2016–",description:"When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",poster:"st.jpg",imdbID:"tt4574334",trailer:"9Egf5U8xLo8"},{title:"The Americans",year:"2013–",description:"Two Soviet intelligence agents pose as a married couple to spy on the American government.",poster:"ta.jpg",imdbID:"tt2149175",trailer:"HjuUkbhsI24"},{title:"Veep",year:"2012–",description:"Former Senator Selina Meyer finds that being Vice President of the United States is nothing like she hoped and everything that everyone ever warned her about.",poster:"v.jpg",imdbID:"tt1759761",trailer:"I2HoCG_iyhU"},{title:"Westworld",year:"2016–",description:"Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",poster:"ww.jpg",imdbID:"tt0475784",trailer:"eX3u0IlBBO4"}]}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";r.r(t);var n=r(10),o=r.n(n),a=r(0),i=r.n(a),c=r(15),s=r.n(c),l=r(1),u=r(14),p=r.n(u),f=r(13),h=r.n(f),d=r(2),m=r(6),b=r(12),g=r.n(b),y=r(5),w=Object(m.combineReducers)({searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return t.type===y.b?t.payload:e},apiData:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments[1];return r.type===y.a?Object.assign({},t,((e={})[r.payload.imdbID]=r.payload,e)):t}}),v=Object(m.createStore)(w,Object(m.compose)(Object(m.applyMiddleware)(g.a))),E=r(8);function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var j=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=x(this,e.call.apply(e,[this].concat(a))),n.state={loaded:!1},n.component=null,x(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.loadingPromise.then(function(t){e.component=t.default,e.setState({loaded:!0})})},t.prototype.render=function(){return this.state.loaded?i.a.createElement(this.component,this.props.props):i.a.createElement(E.a,null)},t}(a.Component),O=r(9),T=function(){return i.a.createElement("h1",null,"404")},S=function(){return i.a.createElement(d.Provider,{store:v},i.a.createElement("div",{className:"app"},i.a.createElement(l.Switch,null,i.a.createElement(l.Route,{exact:!0,path:"/",component:function(e){return i.a.createElement(j,{props:e,loadingPromise:Promise.resolve().then(r.bind(null,19))})}}),i.a.createElement(l.Route,{path:"/search",component:function(e){return i.a.createElement(j,{props:Object.assign({shows:O.shows},e),loadingPromise:Promise.resolve().then(r.bind(null,17))})}}),i.a.createElement(l.Route,{path:"/details/:id",component:function(e){return i.a.createElement(j,{props:{show:O.shows.find(function(t){return t.imdbID===e.match.params.id})},loadingPromise:Promise.resolve().then(r.bind(null,18))})}}),i.a.createElement(l.Route,{component:T}))))},D=h.a.readFileSync("./index.html"),I=p.a.template(D),P=o()();P.use("/public",o.a.static("./public")),P.use(function(e,t){console.log(e.url);var r={},n=s.a.renderToString(i.a.createElement(l.StaticRouter,{location:e.url,context:r},i.a.createElement(S)));r.url&&t.redirect(r.url),t.write(I({body:n})),t.end()}),console.log("listening on 8080"),P.listen(8080)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),i=r(4),c=r.n(i),s=r(1),l=p(["\n\twidth: 32%;\n\tborder: 2px solid #333;\n\tborder-radius: 4px;\n\tmargin-bottom: 25px;\n\tpadding-right: 10px;\n\toverflow: hidden;\n\tcolor: black;\n\ttext-decoration: none;\n"],["\n\twidth: 32%;\n\tborder: 2px solid #333;\n\tborder-radius: 4px;\n\tmargin-bottom: 25px;\n\tpadding-right: 10px;\n\toverflow: hidden;\n\tcolor: black;\n\ttext-decoration: none;\n"]),u=p(["\n\twidth: 46%;\n\tfloat: left;\n\tmargin-right: 10px;\n"],["\n\twidth: 46%;\n\tfloat: left;\n\tmargin-right: 10px;\n"]);function p(e,t){return e.raw=t,e}var f=c()(s.Link)(l),h=c.a.img(u),d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return o.a.createElement(f,{className:"show-card",to:"/details/"+this.props.imdbID,href:"/details/"+this.props.imdbID},o.a.createElement(h,{src:"/public/img/posters/"+this.props.poster,alt:this.props.title+" Show Poster"}),o.a.createElement("div",null,o.a.createElement("h3",null,this.props.title),o.a.createElement("h4",null,"(",this.props.year,")"),o.a.createElement("p",null,this.props.description)))},t}(n.Component),m=r(7);r.d(t,"Unwrapped",function(){return y});var b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g=function(e){return o.a.createElement("div",{className:"search"},o.a.createElement(m.a,{showSearch:!0}),o.a.createElement("div",null,e.shows.filter(function(t){return(t.title+" "+t.description).toUpperCase().includes(e.searchTerm.toUpperCase())}).map(function(e){return o.a.createElement(d,b({key:e.imdbID},e))})))},y=g;t.default=Object(a.connect)(function(e){return{searchTerm:e.searchTerm}})(g)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),i=r(3),c=r(7),s=r(8);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.rating&&"no rating"!==this.props.rating||this.props.getAPIData()},t.prototype.render=function(){var e=this.props.show,t=e.title,r=e.description,n=e.year,a=e.poster,i=e.trailer,l=void 0;return l=this.props.rating?o.a.createElement("h3",null,this.props.rating):o.a.createElement(s.a,null),o.a.createElement("div",{className:"details"},o.a.createElement(c.a,null),o.a.createElement("section",null,o.a.createElement("h1",null,t),o.a.createElement("h2",null,"(",n,")"),l,o.a.createElement("img",{src:"/public/img/posters/"+a,alt:"Poster for "+t}),o.a.createElement("p",null,r)),o.a.createElement("div",null,o.a.createElement("iframe",{src:"https://www.youtube-nocookie.com/embed/"+i+"?rel=0&amp;controls=0&showinfo=0",frameBorder:"0",allowFullScreen:!0,title:"Trailer for "+t})))},t}(n.Component);t.default=Object(a.connect)(function(e,t){return{rating:(e.apiData[t.show.imdbID]?e.apiData[t.show.imdbID]:{}).rating||"no rating"}},function(e,t){return{getAPIData:function(){e(Object(i.a)(t.show.imdbID))}}})(l)},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),i=r(1),c=r(3);function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=n=s(this,e.call.apply(e,[this].concat(a))),n.goToSearch=function(e){e.preventDefault(),n.props.history.push("/search")},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"landing"},o.a.createElement("h1",null,"KindaNetflix"),o.a.createElement("form",{onSubmit:this.goToSearch},o.a.createElement("input",{value:this.props.searchTerm,type:"text",onChange:this.props.handleSearchTermStateChange,placeholder:"Search"})),o.a.createElement(i.Link,{href:"/search",to:"/search"},"or Browse All"))},t}(n.Component);t.default=Object(a.connect)(function(e){return{searchTerm:e.searchTerm}},function(e){return{handleSearchTermStateChange:function(t){e(Object(c.b)(t.currentTarget.value))}}})(l)}]);