(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(20),t(14)),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e)).then((function(e){console.log(e)}))},p=function(e){var n=e.filter,t=e.handleFilterChange;return r.a.createElement("p",null,"Search for a person: ",r.a.createElement("input",{value:n,onChange:t}))},E=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("h3",null,"Add new:"),"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"add"))},g=function(e){var n=e.persons,t=e.setPersons,a=e.filter,u=e.setMessage;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){return r.a.createElement("li",{key:e.name},e.name,": ",e.number," ",r.a.createElement("button",{onClick:(a=e.id,function(){window.confirm("Really, delete the person?")&&b(a).then((function(){t(n.filter((function(e){return e.id!==a}))),u("Number removed from the phonebook."),setTimeout((function(){return u(null)}),3e3)}))})},"Delete"));var a})))},v=function(e){var n=e.message;if(null===n)return null;return r.a.createElement("div",{style:{width:400,padding:10,border:"1px solid #ccc"}},n)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],s=i[1],b=Object(a.useState)(""),w=Object(l.a)(b,2),j=w[0],C=w[1],O=Object(a.useState)(""),N=Object(l.a)(O,2),S=N[0],k=N[1],y=Object(a.useState)(null),P=Object(l.a)(y,2),T=P[0],x=P[1];Object(a.useEffect)((function(){f().then((function(e){return u(e)}))}),[]);var B=function(){s(""),C("")},D=function(e){return function(n){return e(n.target.value)}};return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:T}),r.a.createElement(p,{filter:S,handleFilterChange:D(k)}),r.a.createElement(E,{addPerson:function(e){if(e.preventDefault(),m&&j)if(t.some((function(e){return e.name===m}))){if(window.confirm("Update the number of ".concat(m,"?"))){var n=t.find((function(e){return e.name===m}));h(n.id,Object(c.a)({},n,{number:j})).then((function(e){u(t.map((function(n){return n.id!==e.id?n:e}))),B(),x("The number of ".concat(n.name," was updated.")),setTimeout((function(){return x(null)}),3e3)}))}}else d({name:m,number:j}).then((function(e){u(t.concat(e)),B(),x("The number for ".concat(e.name," was added.")),setTimeout((function(){return x(null)}),3e3)}));else alert("Both name and number are required.")},newName:m,handleNameChange:D(s),newNumber:j,handleNumberChange:D(C)}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(g,{persons:t,setPersons:u,filter:S,setMessage:x}))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fb6e27ad.chunk.js.map