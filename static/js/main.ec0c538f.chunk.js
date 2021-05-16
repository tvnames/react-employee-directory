(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{47:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(16),c=r.n(n),s=(r(26),r(6)),i=r(3),o=r.n(i),l=r(5),u=r(17),d=r(18),h=r(21),j=r(20),p=r(19),m=r.n(p),b={search:function(){return m.a.get("https://randomuser.me/api/?results=20")}},f=r(0);var O=function(e){return Object(f.jsx)("form",{children:Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search here",id:"search"})})})};var x=function(){return Object(f.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"display-4",children:"React Employee Directory"}),Object(f.jsx)("p",{className:"lead",children:"Employee List"})]})})},v=r(4);var y=function(e){var t=e.results;return Object(f.jsxs)("table",{className:"table align-middle table-primary table-hover table-striped table-bordered",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"profilePic"}),Object(f.jsx)("th",Object(v.a)(Object(v.a)({"data-name":"first"},e.handleSort),{},{children:"First Name"})),Object(f.jsx)("th",Object(v.a)(Object(v.a)({"data-name":"last"},e.handleSort),{},{children:"Last Name"})),Object(f.jsx)("th",Object(v.a)(Object(v.a)({"data-name":"email"},e.handleSort),{},{children:"Email"}))]})}),Object(f.jsx)("tbody",{children:t.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"d-flex justify-content-center",children:Object(f.jsx)("img",{alt:"".concat(e.first," ").concat(e.last),src:e.profilePic,className:"rounded-circle"})}),Object(f.jsx)("td",{children:e.first}),Object(f.jsx)("td",{children:e.last}),Object(f.jsx)("td",{children:e.email})]},"".concat(e.first," ").concat(e.last," ").concat(e.date))}))})]})},w=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(u.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[],employees:[],first:1,last:1,email:1},e.componentDidMount=Object(l.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.employeeSelection();case 2:return r=t.sent,t.next=5,e.setState({results:r,employees:r});case 5:case"end":return t.stop()}}),t)}))),e.employeeSelection=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,b.search().then((function(e){t=e.data.results.map((function(e){return{first:e.name.first,last:e.name.last,email:e.email,phone:e.phone,profilePic:e.picture.medium}}))})).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),e.handleSort=function(){var t=Object(l.a)(o.a.mark((function t(r){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r.target.getAttribute("data-name"),(n=e.state.employees.map((function(e){return e}))).sort((function(t,r){return t[a]>r[a]?1*e.state[a]:t[a]<r[a]?-1*e.state[a]:0})),e.setState(Object(s.a)({employees:n},a,-1*e.state[a]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInputChange=function(){var t=Object(l.a)(o.a.mark((function t(r){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.target.value,t.next=3,e.state.results.filter((function(e){return e.first.toLowerCase().includes(a.toLowerCase())||e.last.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())}));case 3:return n=t.sent,t.next=6,e.setState({search:a,employees:n});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(r,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(x,{}),Object(f.jsx)(O,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(f.jsx)(y,{results:this.state.employees,handleSort:this.handleSort})]})}}]),r}(a.Component);var g=function(){return Object(f.jsx)(w,{})};c.a.render(Object(f.jsx)(g,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ec0c538f.chunk.js.map