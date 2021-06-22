(this["webpackJsonpgoit-react-hw-08"]=this["webpackJsonpgoit-react-hw-08"]||[]).push([[0],{103:function(t,e,n){t.exports={newEntrySection:"InputForm_newEntrySection__3416G",newEntryButton:"InputForm_newEntryButton__l87D5"}},104:function(t,e,n){t.exports={filter:"Filter_filter__3MnCm","filter-label":"Filter_filter-label__23nJq","filter-input":"Filter_filter-input__1eze-"}},105:function(t,e,n){t.exports={entry:"PbookList_entry__3UiHW",pbookList:"PbookList_pbookList__3PN4E",pbookHeader:"PbookList_pbookHeader__2S3sS",controlBtnContainer:"PbookList_controlBtnContainer__1QYul",entryControlBtn:"PbookList_entryControlBtn__11hXX"}},110:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var c=n(0),r=n(3),a=n(15),i=n(92),s=n(100),o=(n(101),n(102),n(10)),u=n(19),l=n.n(u),b=n(9),j=n(23),d=function(t){return t.contacts.items.entries},m=Object(j.a)([d,function(t){return t.contacts.filter}],(function(t,e){return t.filter((function(t){return t.name.includes(e)}))})),f=n(103),O=n.n(f),h=n(1);function p(){var t=Object(o.c)(),e=Object(o.d)(d),n=Object(c.useState)({name:"",number:""}),u=Object(i.a)(n,2),j=u[0],m=u[1],f=function(t){var e=t.target.name,n=t.target.value;m((function(t){return Object(a.a)(Object(a.a)({},t),{},Object(r.a)({},e,n))}))};return Object(h.jsx)("section",{className:O.a.newEntrySection,children:Object(h.jsxs)("form",{className:"inputForm",onSubmit:function(n){if(n.preventDefault(),e.find((function(t){return t.name===j.name})))return Object(s.error)({title:"Error!",text:"Notice me, senpai! It's me, ".concat(j.name,", I'm already in the list!"),icons:"brighttheme"}),void n.target.reset();var c;t((c=j,function(t){t(Object(b.b)()),l.a.post("/contacts",c).then((function(t){return t.data})).then((function(e){return t(Object(b.c)(e))})).catch((function(e){t(Object(b.a)(e.message))}))})),n.target.reset()},children:[Object(h.jsxs)("label",{className:"inputLabel",children:["First / Last name :",Object(h.jsx)("input",{name:"name",className:"inputField",type:"text",onChange:f,required:!0})]}),Object(h.jsxs)("label",{className:"inputLabel",children:["Phone number :",Object(h.jsx)("input",{name:"number",className:"inputField",type:"tel",onChange:f,required:!0})]}),Object(h.jsx)("button",{className:O.a.newEntryButton,type:"submit",children:"Add entry"})]})})}var x=n(35),_=n(104),y=n.n(_);function N(){var t=o.c;return Object(h.jsx)("div",{className:y.a.filter,children:Object(h.jsxs)("label",{className:y.a["filter-label"],children:["Find contacts by name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:y.a["filter-input"],type:"text",onChange:function(e){t(Object(x.a)(e.target.value))}})]})})}var v=n(105),g=n.n(v);function k(){var t=Object(o.c)();Object(c.useEffect)((function(){return t((function(t){t(Object(b.h)()),l.a.get("/contacts").then((function(e){return t(Object(b.i)(e.data))})).catch((function(e){return t(Object(b.g)(e.message))}))}))}),[t]);var e=Object(o.d)(m),n=function(e){return t((n=e.target.dataset.id,function(t){t(Object(b.e)()),l.a.delete("/contacts/".concat(n)).then((function(){return t(Object(b.f)(n))})).catch((function(e){return t(Object(b.d)(e.message))}))}));var n};return Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{className:"".concat(g.a.entry," ").concat(g.a.pbookHeader),children:[Object(h.jsx)("span",{children:"Name"}),Object(h.jsx)("span",{children:"Phone number"}),Object(h.jsx)("span",{children:"Actions"})]}),Object(h.jsx)("ul",{className:g.a.pbookList,children:e.map((function(t){return Object(h.jsxs)("li",{className:g.a.entry,children:[Object(h.jsx)("span",{children:t.name}),Object(h.jsx)("span",{children:t.number}),Object(h.jsx)("div",{className:g.a.controlBtnContainer,children:Object(h.jsx)("button",{className:g.a.entryControlBtn,type:"button","data-id":t.id,onClick:n,children:"Delete"})})]},t.id)}))})]})}function C(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"PhoneBook / home"}),Object(h.jsx)(p,{}),Object(h.jsx)(N,{}),Object(h.jsx)(k,{})]})}}}]);
//# sourceMappingURL=contacts-view.c723d753.chunk.js.map