(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(3),c=t.n(s),r=(t(17),function(){return l.a.createElement("div",{className:"person-description"},l.a.createElement("h2",null,"Ivan Stevkovski"),l.a.createElement("p",null,"Experienced Frontend Developer and ",l.a.createElement("br",null)," UI/UX Design Enthusiast."))}),i=function(e){return l.a.createElement("button",{className:"button-hire"},e.children,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right"))},o=function(){return l.a.createElement("nav",{className:"header-navigation"},l.a.createElement("a",{href:"/",className:"brand"},"Magenta."),l.a.createElement("a",{href:"/",className:"link"},"About"),l.a.createElement("a",{href:"/",className:"link"},"Learn More"),l.a.createElement("a",{href:"/",className:"link"},"Contact"))},m=function(e){return l.a.createElement("div",{className:"social-links ".concat(e.marginPosition)},e.children)},u=function(e){var a=void 0!=e.socialMedia?e.socialMedia:"";return l.a.createElement("button",{className:"button-circle ".concat(a," ").concat(e.className)},l.a.createElement("i",{className:void 0!=e.material?"material-icons":"fab"},void 0!=e.material?e.material:""))},d=t(1),E=t.n(d),f=t(4),b=t(5),p=t(6),v=t(8),h=t(7),k=t(9),N=function(){return l.a.createElement("div",{className:"sk-cube-grid"},l.a.createElement("div",{className:"sk-cube sk-cube1"}),l.a.createElement("div",{className:"sk-cube sk-cube2"}),l.a.createElement("div",{className:"sk-cube sk-cube3"}),l.a.createElement("div",{className:"sk-cube sk-cube4"}),l.a.createElement("div",{className:"sk-cube sk-cube5"}),l.a.createElement("div",{className:"sk-cube sk-cube6"}),l.a.createElement("div",{className:"sk-cube sk-cube7"}),l.a.createElement("div",{className:"sk-cube sk-cube8"}),l.a.createElement("div",{className:"sk-cube sk-cube9"}))},g=function(e){return console.log(e),console.log(e.postsPulled),l.a.createElement("div",{className:"feature-display-card ".concat(e.className)},e.postsPulled>0?e.children:l.a.createElement(N,null))},w=function(e){function a(e){var t;return Object(b.a)(this,a),(t=Object(v.a)(this,Object(h.a)(a).call(this,e))).state={posts:[],postsPulled:0},t}return Object(k.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(E.a.mark(function e(){var a=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(e){a.setState({posts:e,postsPulled:1}),console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"side-display"},l.a.createElement(g,{className:"padding-default",postsPulled:this.state.postsPulled},l.a.createElement("i",{className:"fas fa-globe-europe fa-3x margin-default-half-bottom"}),l.a.createElement("h4",null,"Nearly 200 countries worldwide, because freelance has no limits!")),l.a.createElement(g,{className:"padding-default",postsPulled:this.state.postsPulled},l.a.createElement("i",{className:"fab fa-internet-explorer fa-3x margin-default-half-bottom"}),l.a.createElement("h4",null,"Support all platforms!")),l.a.createElement(g,{className:"padding-default",postsPulled:this.state.postsPulled},l.a.createElement("img",{src:"./assets/icons/brain.svg",alt:"brain.svg",className:"margin-default-half-bottom",style:{filter:"invert(28%) sepia(14%) saturate(0%) hue-rotate(185deg) brightness(100%) contrast(89%)"}}),l.a.createElement("h4",null,"Don't think, hire a professional!")),l.a.createElement("div",{className:"slide-buttons"},l.a.createElement(u,{material:"keyboard_arrow_up",className:"prev"}),l.a.createElement(u,{material:"keyboard_arrow_down",className:"next"})))}}]),a}(n.Component),y=(t(10),function(){return l.a.createElement("div",{className:"home main-view"},l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement("div",{className:"wrapper-flex margin-default-bottom",style:{alignItems:"center"}},l.a.createElement(r,null)),l.a.createElement(i,null,"Hire Me!"),l.a.createElement(m,{marginPosition:"both"},l.a.createElement(u,{socialMedia:"linkedin"}),l.a.createElement(u,{socialMedia:"facebook"}),l.a.createElement(u,{socialMedia:"instagram"}))),l.a.createElement(w,null))});c.a.render(l.a.createElement(function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("footer",null,"2019 copyright \xa9 Ivan Stevkovski"))},null),document.querySelector("#root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.da1c491f.chunk.js.map