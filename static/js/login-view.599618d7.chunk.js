(this["webpackJsonpgoit-react-hw-08"]=this["webpackJsonpgoit-react-hw-08"]||[]).push([[2],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));var a=r(92),n=r(0),i=r(10),s=r(24),c=r(1);function o(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),r=t[0],o=t[1],u=Object(n.useState)(""),l=Object(a.a)(u,2),b=l[0],d=l[1],j=Object(i.c)(),f=function(e){var t=e.target;switch(t.dataset.role){case"email":o(t.value);break;case"password":d(t.value);break;default:return}};return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsxs)("form",{className:"inputForm",onSubmit:function(e){e.preventDefault(),j(s.a.login({email:r,password:b})),e.target.reset()},children:[Object(c.jsxs)("label",{className:"inputLabel",children:["E-mail",Object(c.jsx)("input",{className:"inputField",type:"text",required:!0,onChange:f,"data-role":"email"})]}),Object(c.jsxs)("label",{className:"inputLabel",children:["Password",Object(c.jsx)("input",{className:"inputField",type:"text",required:!0,onChange:f,"data-role":"password"})]}),Object(c.jsx)("button",{type:"submit",children:"Login"})]})]})}},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(34);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(o){n=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=login-view.599618d7.chunk.js.map