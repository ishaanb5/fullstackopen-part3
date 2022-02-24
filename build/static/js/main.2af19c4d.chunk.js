(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(18),c=n.n(r),a=n(8),o=n(4),u=n(3),i=n(1),s=n(0),d=function(e){return Object(s.jsxs)("div",{children:["filter shown with",Object(s.jsx)("input",{type:"text",onChange:function(t){return e.handleInput(t)}})]})},b=function(e){return Object(s.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(s.jsxs)("div",{children:["name:",Object(s.jsx)("input",{type:"text",onChange:e.handleContactInput,value:e.contactData.name,name:"name"})]}),Object(s.jsxs)("div",{children:["number:",Object(s.jsx)("input",{type:"tel",onChange:e.handleContactInput,value:e.contactData.number,name:"number"})]}),Object(s.jsx)("button",{type:"submit",children:"add"})]})},l=function(e){return Object(s.jsxs)("div",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:e.delete,children:"delete"})]})},f=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Numbers"}),e.list.map((function(t){return Object(s.jsx)(l,{name:t.name,number:t.number,delete:function(){return e.delete(t.id)}},t.id)}))]})},m=n(5),j=n.n(m),h="/api/persons",p={getAll:function(){return j.a.get(h).then((function(e){return e.data}))},create:function(e){return j.a.post(h,e).then((function(e){return e.data}))},update:function(e,t){return j.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},deleteContact:function(e){return j.a.delete("".concat(h,"/").concat(e))}},O=function(e){var t=e.notification;if(null===t)return null;var n=t.message,r=t.type;return n?(n=n.replace(".",".\n"),Object(s.jsx)("div",{style:"success"===r?{color:"green",background:"lightgrey",border:"5px solid",borderRadius:5,padding:10,fontSize:20,marginBottom:15,whiteSpace:"pre-line"}:{color:"red",background:"lightgrey",border:"5px solid",borderRadius:5,padding:10,fontSize:20,marginBottom:15,whiteSpace:"pre-line"},children:n})):null},g=function(){var e,t=Object(i.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(i.useState)({name:"",number:""}),m=Object(u.a)(l,2),j=m[0],h=m[1],g=Object(i.useState)(""),x=Object(u.a)(g,2),v=x[0],y=x[1],w=Object(i.useState)([]),S=Object(u.a)(w,2),C=S[0],k=S[1],I=Object(i.useState)(null),E=Object(u.a)(I,2),D=E[0],R=E[1];return Object(i.useEffect)((function(){p.getAll().then((function(e){return c(e)}))}),[]),Object(i.useEffect)((function(){var e=new RegExp(v,"i");k(v?r.filter((function(t){return e.test(t.name)})):r)}),[v,r]),Object(i.useEffect)((function(){setTimeout((function(){return R(null)}),5e3)}),[D]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(O,{notification:D}),Object(s.jsx)(d,{handleInput:function(e){y(e.target.value)}}),Object(s.jsx)("h3",{children:"add a new"}),Object(s.jsx)(b,{handleSubmit:function(t){t.preventDefault();var n={name:j.name,number:j.number};if(r.some((function(t){return c=n,(r=t).name.toLowerCase()===c.name.toLowerCase()&&(e=r,!0);var r,c}))){if(window.confirm("".concat(e.name," is already added to the phonebook, replace the old number with a new one?"))){var a=Object(o.a)(Object(o.a)({},n),{},{number:j.number});p.update(e.id,a).then((function(t){return c(r.map((function(n){return n.id!==e.id?n:t}))),t})).then((function(e){return R({message:"Updated number for ".concat(e.name),type:"success"})})).catch((function(e){return R({message:e.response.data.message,type:"error"})}))}}else p.create(n).then((function(e){c(r.concat(e))})).then((function(){return R({message:"Added ".concat(n.name),type:"success"})})).catch((function(e){console.log(e),R({message:e.response.data.error,type:"error"})}));Object.getOwnPropertyNames(j).forEach((function(e){return j[e]=""}))},handleContactInput:function(e){h(Object(o.a)(Object(o.a)({},j),{},Object(a.a)({},e.target.name,e.target.value)))},contactData:j}),Object(s.jsx)(f,{list:C,delete:function(e){var t=r.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name))&&p.deleteContact(e).then((function(){c(r.filter((function(t){return t.id!==e}))),R({message:"Removed ".concat(t.name),type:"alert"})})).catch((function(){return R({message:"Information of ".concat(t.name," has already been removed from the server."),type:"error"})}))}})]})};n(42);c.a.render(Object(s.jsx)(g,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2af19c4d.chunk.js.map