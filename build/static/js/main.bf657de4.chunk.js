(this["webpackJsonpreact-gallery-app"]=this["webpackJsonpreact-gallery-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=(a(37),a(10)),s=a(11),u=a(13),i=a(12),h=a(14),m=a(7),d=a(1),p=a(30),f=a.n(p),E=(a(55),function(e){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/mountain"},"mountain")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/forest"},"forest")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/beach"},"beach"))),r.a.createElement("ul",null,r.a.createElement("li",{className:"random"},r.a.createElement(m.b,{to:"/search/:random"},"feeling random"))))}),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",query:a.props.match.params.query},a.onSearchChange=function(e){a.setState({searchText:e.target.value}),console.log(a.query.value)},a.handleSubmit=function(e){e.preventDefault();var t=a.query.value;a.props.onSearch(a.query.value);var n="/search/".concat(t);a.props.history.push(n),e.currentTarget.reset()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"heading"},"photo search"),r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"Search",required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))))}}]),t}(r.a.Component),b=Object(d.g)(g),v=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:""}))},S=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"You search did not return any results. Please try again."))},y=function(e,t){t.match;var a=e.data;console.log(a);var n=" ",o=e.query;return n=a.length>0?a.map((function(e){return r.a.createElement(v,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id})})):r.a.createElement(S,null),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,'"',o,'"'),r.a.createElement("ul",null,n))},w=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h2",null,"Not Found"))},q=a(61);console.log(q());var j=window.location;console.log(j);var k=new URL(j).searchParams.get("search");console.log(k);var N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).performSearch=function(e){f.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("adf8e835e70c5cce9208376d343d7ab8","&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(t){a.setState({query:e,loading:!1}),"mountain"===e?a.setState({mountain:t.data.photos.photo}):"forest"===e?a.setState({forest:t.data.photos.photo}):"beach"===e?a.setState({beach:t.data.photos.photo}):e===q()?a.setState({random:t.data.photos.photo}):a.setState({pictures:t.data.photos.photo})})).catch((function(e){console.log("Error fetching data",e)}))},a.state={pictures:[],mountain:[],forest:[],beach:[],random:[],query:"",search:k,loading:!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(e){this.performSearch("mountain"),this.performSearch("forest"),this.performSearch("beach"),this.performSearch(q()),null!=k&&this.performSearch(k)}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(b,{onSearch:this.performSearch}),r.a.createElement(E,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/mountain"})}}),r.a.createElement(d.b,{path:"/mountain",render:function(){return r.a.createElement(y,{data:e.state.mountain,onSearch:e.performSearch,loading:e.state.loading,query:"mountain"})}}),r.a.createElement(d.b,{path:"/forest",render:function(){return r.a.createElement(y,{data:e.state.forest,onSearch:e.performSearch,loading:e.state.loading,query:"forest"})}}),r.a.createElement(d.b,{path:"/beach",render:function(){return r.a.createElement(y,{data:e.state.beach,onSearch:e.performSearch,loading:e.state.loading,query:"beach"})}}),r.a.createElement(d.b,{path:"/search/:random",render:function(){return r.a.createElement(y,{data:e.state.random,onSearch:e.performSearch,loading:e.state.loading,query:e.state.random})}}),r.a.createElement(d.b,{path:"/?search=:query",render:function(){return r.a.createElement(y,{data:e.state.pictures,onSearch:e.performSearch,loading:e.state.loading,query:e.state.query})}}),r.a.createElement(d.b,{component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.bf657de4.chunk.js.map