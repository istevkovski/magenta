(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(3),c=t.n(l),r=(t(16),function(){return s.a.createElement("div",{className:"person-description"},s.a.createElement("h2",null,"Ivan Stevkovski"),s.a.createElement("p",null,"Experienced Frontend Developer and ",s.a.createElement("br",null)," UI/UX Design Enthusiast."))}),i=function(e){return s.a.createElement("button",{className:"button-hire"},e.children,s.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))},o=function(){return s.a.createElement("nav",{className:"header-navigation"},s.a.createElement("a",{href:"/",className:"brand"},"Magenta."),s.a.createElement("a",{href:"/",className:"link"},"About"),s.a.createElement("a",{href:"/",className:"link"},"Learn More"),s.a.createElement("a",{href:"/",className:"link"},"Contact"))},m=function(e){return s.a.createElement("div",{className:"social-links ".concat(e.marginPosition)},e.children)},u=function(e){var a=void 0!=e.socialMedia?e.socialMedia:"";return s.a.createElement("button",{className:"button-circle ".concat(a," ").concat(e.className)},s.a.createElement("i",{className:void 0!=e.material?"material-icons":"fab"},void 0!=e.material?e.material:""))},d=t(1),E=t.n(d),p=t(4),h=t(5),b=t(6),f=t(8),v=t(7),k=t(9),N=function(){return s.a.createElement("div",{className:"sk-cube-grid"},s.a.createElement("div",{className:"sk-cube sk-cube1"}),s.a.createElement("div",{className:"sk-cube sk-cube2"}),s.a.createElement("div",{className:"sk-cube sk-cube3"}),s.a.createElement("div",{className:"sk-cube sk-cube4"}),s.a.createElement("div",{className:"sk-cube sk-cube5"}),s.a.createElement("div",{className:"sk-cube sk-cube6"}),s.a.createElement("div",{className:"sk-cube sk-cube7"}),s.a.createElement("div",{className:"sk-cube sk-cube8"}),s.a.createElement("div",{className:"sk-cube sk-cube9"}))},g=function(e){return console.log(e),console.log(e.postsPulled),s.a.createElement("div",{className:"feature-display-card ".concat(e.className)},e.postsPulled>0?e.children:s.a.createElement(N,null))},w=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).state={posts:[],postsPulled:0},t}return Object(k.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(E.a.mark(function e(){var a=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(e){a.setState({posts:e,postsPulled:1}),console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"side-display"},s.a.createElement(g,{className:"padding-default",postsPulled:this.state.postsPulled},s.a.createElement("h2",{className:"margin-default-half-bottom"},this.state.posts.length>0?this.state.posts[0].title:""),s.a.createElement("p",null,this.state.posts.length>0?this.state.posts[0].body:"")),s.a.createElement(g,{className:"padding-default",postsPulled:this.state.postsPulled},s.a.createElement("i",{className:"fas fa-globe-europe fa-3x margin-default-half-bottom"}),s.a.createElement("h4",null,"Nearly 200 countries worldwide, because freelance has no limits!")),s.a.createElement(g,{className:"padding-default active",postsPulled:this.state.postsPulled},s.a.createElement("h2",{className:"margin-default-half-bottom"},this.state.posts.length>0?this.state.posts[1].title:""),s.a.createElement("p",null,this.state.posts.length>0?this.state.posts[1].body:"")),s.a.createElement("div",{className:"slide-buttons"},s.a.createElement(u,{material:"keyboard_arrow_up",className:"prev"}),s.a.createElement(u,{material:"keyboard_arrow_down",className:"next"})))}}]),a}(n.Component),y=function(){return s.a.createElement("div",{className:"home main-view"},s.a.createElement("div",null,s.a.createElement(o,null),s.a.createElement(r,null),s.a.createElement(i,null,"Hire Me!"),s.a.createElement(m,{marginPosition:"both"},s.a.createElement(u,{socialMedia:"linkedin"}),s.a.createElement(u,{socialMedia:"facebook"}),s.a.createElement(u,{socialMedia:"instagram"}))),s.a.createElement(w,null))};c.a.render(s.a.createElement(function(){return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement("footer",null,"2019 copyright \xa9 Ivan Stevkovski"))},null),document.querySelector("#root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.b8ba0014.chunk.js.map