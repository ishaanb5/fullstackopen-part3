(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(18),r=n.n(c),a=n(7),o=n(9),u=n(3),i=n(1),s=n(0),d=function(e){return Object(s.jsxs)("div",{children:["filter shown with",Object(s.jsx)("input",{type:"text",onChange:function(t){return e.handleInput(t)}})]})},l=function(e){return Object(s.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(s.jsxs)("div",{children:["name:",Object(s.jsx)("input",{type:"text",onChange:e.handleContactInput,value:e.contactData.name,name:"name"})]}),Object(s.jsxs)("div",{children:["number:",Object(s.jsx)("input",{type:"tel",onChange:e.handleContactInput,value:e.contactData.number,name:"number"})]}),Object(s.jsx)("button",{type:"submit",children:"add"})]})},b=function(e){return Object(s.jsxs)("div",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:e.delete,children:"delete"})]})},j=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Numbers"}),e.list.map((function(t){return Object(s.jsx)(b,{name:t.name,number:t.number,delete:function(){return e.delete(t.id)}},t.id)}))]})},f=n(4),m=n.n(f),h="/api/persons",O={getAll:function(){return m.a.get(h).then((function(e){return e.data}))},create:function(e){return m.a.post(h,e).then((function(e){return e.data}))},update:function(e,t){return m.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},deleteContact:function(e){return m.a.delete("".concat(h,"/").concat(e))}},p=function(e){var t=e.notification;if(null===t)return null;var n=t.message,c=t.type;return null===n?null:Object(s.jsx)("div",{style:"success"===c?{color:"green",background:"lightgrey",border:"5px solid",borderRadius:5,padding:10,fontSize:20,marginBottom:15}:{color:"red",background:"lightgrey",border:"5px solid",borderRadius:5,padding:10,fontSize:20,marginBottom:15},children:n})},g=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)({name:"",number:""}),b=Object(u.a)(r,2),f=b[0],m=b[1],h=Object(i.useState)(""),g=Object(u.a)(h,2),x=g[0],v=g[1],y=Object(i.useState)([]),S=Object(u.a)(y,2),w=S[0],C=S[1],k=Object(i.useState)(null),I=Object(u.a)(k,2),E=I[0],D=I[1];return Object(i.useEffect)((function(){O.getAll().then((function(e){return c(e)}))}),[]),Object(i.useEffect)((function(){var e=new RegExp(x,"i");C(x?n.filter((function(t){return e.test(t.name)})):n)}),[x,n]),Object(i.useEffect)((function(){setTimeout((function(){return D(null)}),5e3)}),[E]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(p,{notification:E}),Object(s.jsx)(d,{handleInput:function(e){v(e.target.value)}}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(l,{handleSubmit:function(e){e.preventDefault();var t={name:f.name,number:f.number};O.create(t).then((function(e){c(n.concat(e))})).then((function(){return D({message:"Added ".concat(t.name),type:"success"})})).catch((function(e){console.log(e),D({message:e.response.data.error,type:"error"})})),Object.getOwnPropertyNames(f).forEach((function(e){return f[e]=""}))},handleContactInput:function(e){m(Object(o.a)(Object(o.a)({},f),{},Object(a.a)({},e.target.name,e.target.value)))},contactData:f}),Object(s.jsx)(j,{list:w,delete:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name))&&O.deleteContact(e).then((function(){c(n.filter((function(t){return t.id!==e}))),D({message:"Removed ".concat(t.name),type:"alert"})})).catch((function(){return D({message:"Information of ".concat(t.name," has already been removed from the server."),type:"error"})}))}})]})};n(42);r.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3152cc64.chunk.js.map