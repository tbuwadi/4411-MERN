(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(75)},50:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),i=n(5),o=n(28),m=n(8),s=n(9),u=n(11),d=n(10),h=n(12),f=(n(50),function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),E=function(e){var t=e.children;return l.a.createElement("div",{style:{clear:"both"},className:"jumbotron"},t)},p=n(7),v=n.n(p),b={getItems:function(){return v.a.get("/api/items")},getItem:function(e){return v.a.get("/api/items/"+e)},deleteItem:function(e){return v.a.delete("/api/items/"+e)},saveItem:function(e){return v.a.post("/api/items",e)}},g=function(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)},y=function(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)},N=function(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)},I=(n(70),function(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}),w=function(e){return l.a.createElement("p",{className:"list-group-item"},e.children)},j=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))},k=function(e){return l.a.createElement("button",Object.assign({},e,{style:{marginBottom:10}}),e.children)},O=(n(72),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={items:[],item:"",quantity:""},n.loadItems=function(){b.getItems().then(function(e){return n.setState({items:e.data,item:"",quantity:""})}).catch(function(e){return console.log(e)})},n.deleteItem=function(e){b.deleteItem(e).then(function(e){return n.loadItems()}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(o.a)({},a,l))},n.handleFormSubmit=function(e){e.preventDefault(),n.state.item&&n.state.quantity&&b.saveItem({item:n.state.item,quantity:n.state.quantity}).then(function(e){return n.loadItems()}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"wrapper"},l.a.createElement(y,{fluid:!0},l.a.createElement(N,null,l.a.createElement(g,{size:"md-6"},l.a.createElement(E,null,l.a.createElement("h1",{className:"title"},"Shopping List")),l.a.createElement("form",null,l.a.createElement(j,{value:this.state.item,onChange:this.handleInputChange,name:"item",placeholder:"item",className:"inputField"}),l.a.createElement(j,{value:this.state.quantity,onChange:this.handleInputChange,name:"quantity",placeholder:"quantity",className:"inputField"}),l.a.createElement(k,{disabled:!(this.state.quantity&&this.state.item),onClick:this.handleFormSubmit,className:"buttonSubmit"},"Add to List"))),l.a.createElement(g,{size:"md-6 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",{className:"title"},"My List")),this.state.items.length?l.a.createElement(I,null,this.state.items.map(function(t){return l.a.createElement(w,{key:t._id,className:"list"},l.a.createElement(i.b,{to:"/items/"+t._id},l.a.createElement("strong",null,t.item," x ",t.quantity)),l.a.createElement(f,{onClick:function(){return e.deleteItem(t._id)}}))})):l.a.createElement("h3",null,"No Results to Display")))))}}]),t}(a.Component)),q=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={item:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.getItem(this.props.match.params.id).then(function(t){return e.setState({item:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(y,{fluid:!0},l.a.createElement(N,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,this.state.item.item," by ",this.state.item.quantity)))),l.a.createElement(N,null,l.a.createElement(g,{size:"md-2"},l.a.createElement(i.b,{to:"/"},"\u2190 Back to Shopping List"))))}}]),t}(a.Component),C=function(){return l.a.createElement(y,{fluid:!0},l.a.createElement(N,null,l.a.createElement(g,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found")))))},S=function(){return l.a.createElement("nav",{className:"navbar navbar-inverse navbar-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"})))},z=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(i.d,null,l.a.createElement(i.c,{exact:!0,path:"/",component:O}),l.a.createElement(i.c,{exact:!0,path:"/books",component:O}),l.a.createElement(i.c,{exact:!0,path:"/books/:id",component:q}),l.a.createElement(i.c,{component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.1148ce09.chunk.js.map