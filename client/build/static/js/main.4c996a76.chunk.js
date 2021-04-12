(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(75)},50:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(24),r=n.n(l),c=n(5),i=n(28),s=n(8),u=n(9),m=n(11),h=n(10),d=n(12),f=(n(50),function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),E=function(e){var t=e.children;return o.a.createElement("div",{style:{clear:"both"},className:"jumbotron"},t)},p=n(7),b=n.n(p),v={getBooks:function(){return b.a.get("/api/books")},getBook:function(e){return b.a.get("/api/books/"+e)},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return b.a.post("/api/books",e)}},k=function(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)},g=function(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)},N=function(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)},y=(n(70),function(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}),B=function(e){return o.a.createElement("p",{className:"list-group-item"},e.children)},j=function(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))},w=function(e){return o.a.createElement("button",Object.assign({},e,{style:{marginBottom:10}}),e.children)},O=(n(72),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:""},n.loadBooks=function(){v.getBooks().then(function(e){return n.setState({books:e.data,title:"",author:""})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){v.deleteBook(e).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(i.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.title&&n.state.author&&v.saveBook({title:n.state.title,author:n.state.author}).then(function(e){return n.loadBooks()}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(g,{fluid:!0},o.a.createElement(N,null,o.a.createElement(k,{size:"md-6"},o.a.createElement(E,null,o.a.createElement("h1",{className:"title"},"My Shopping List")),o.a.createElement("form",null,o.a.createElement(j,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"item",className:"inputField"}),o.a.createElement(j,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"quantity",className:"inputField"}),o.a.createElement(w,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit,className:"buttonSubmit"},"Add to List"))),o.a.createElement(k,{size:"md-6 sm-12"},o.a.createElement(E,null,o.a.createElement("h1",{className:"title"},"My List")),this.state.books.length?o.a.createElement(y,null,this.state.books.map(function(t){return o.a.createElement(B,{key:t._id,className:"list"},o.a.createElement(c.b,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," x ",t.author)),o.a.createElement(f,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display")))))}}]),t}(a.Component)),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(g,{fluid:!0},o.a.createElement(N,null,o.a.createElement(k,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(N,null,o.a.createElement(k,{size:"md-2"},o.a.createElement(c.b,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(a.Component),S=function(){return o.a.createElement(g,{fluid:!0},o.a.createElement(N,null,o.a.createElement(k,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},z=function(){return o.a.createElement("nav",{className:"navbar navbar-inverse navbar-top"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"navbar-header"})))},F=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(c.d,null,o.a.createElement(c.c,{exact:!0,path:"/",component:O}),o.a.createElement(c.c,{exact:!0,path:"/books",component:O}),o.a.createElement(c.c,{exact:!0,path:"/books/:id",component:C}),o.a.createElement(c.c,{component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.4c996a76.chunk.js.map