(this.webpackJsonpbiblioteca=this.webpackJsonpbiblioteca||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.c42aeac8.svg"},39:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),o=a.n(r),l=a(7),i=(a(44),a(45),a(28)),m=a(29),s=a(37),u=a(30),d=a(38),E=a(8),p=a(31),f=a.n(p),h=a(32),g=a.n(h),v=(a(63),function(){return c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"inicio"},c.a.createElement("div",{className:"wrapper fadeInDown"},c.a.createElement("div",{id:"formContent"},c.a.createElement("div",{className:"fadeIn first"},c.a.createElement("img",{src:g.a,id:"icon",alt:"Instituto Mexicano del Cemento y del Concreto A.C.",title:"Instituto Mexicano del Cemento y del Concreto A.C.",style:{width:"200px",margin:"15px"}}),c.a.createElement("h3",null,"BIBLIOTECA DIGITAL"),c.a.createElement("p",null,"Instituto Mexicano del Cemento y del Concreto A.C.")),c.a.createElement("form",null,c.a.createElement("input",{type:"text",id:"login",className:"fadeIn second",name:"login",placeholder:"Usuario"}),c.a.createElement("input",{type:"text",id:"password",className:"fadeIn third",name:"login",placeholder:"Contrase\xf1a"}),c.a.createElement(l.c,{to:"/buscador",className:"fadeIn fourth"},"INGRESAR")),c.a.createElement("div",{id:"formFooter"})))))}),I=a(35),b=a(16),C=a(12),y=(a(69),function(e){return c.a.createElement("div",{className:"Buscador"},c.a.createElement(I.a,{fluid:!0},c.a.createElement(b.a,null,c.a.createElement(C.a,{md:12,className:"text-center"},c.a.createElement("h3",null,"BIBLIOTECA DIGITAL"),c.a.createElement("p",null,"Instituto Mexicano del Cemento y del Concreto A.C."),c.a.createElement("hr",null))),c.a.createElement(b.a,null,c.a.createElement(C.a,{md:3},c.a.createElement("ul",{className:"categorias"},e.categorias.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(l.c,{to:"/"},e))})))),c.a.createElement(C.a,{md:9}))))}),w=(a(70),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={categorias:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://imcyc.com/biblioteca/categorias.php").then((function(t){var a=t.data;e.setState({categorias:a})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(l.b,{basename:"/"},c.a.createElement("div",null,c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(v,e)}}),c.a.createElement(E.a,{exact:!0,path:"/buscador",render:function(t){return c.a.createElement(y,Object.assign({},t,{categorias:e.state.categorias}))}}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l.a,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1bb1bb46.chunk.js.map