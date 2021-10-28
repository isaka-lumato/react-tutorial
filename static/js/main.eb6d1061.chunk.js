(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(t,e,n){t.exports={item:"TodoItem_item__3MbaD",checkbox:"TodoItem_checkbox__2Jrs8",textInput:"TodoItem_textInput__t35cu"}},29:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(20),a=n.n(o),i=n(6),s=(n(29),n(19)),r=n(8),l=n(7),u=n(3),d=n(21),j=n(22),b=n(2),h=[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}],p=function(){var t=Object(c.useState)(!1),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsxs)("button",{onClick:function(){o((function(t){return!t}))},children:[" ",n?Object(b.jsx)(d.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(b.jsx)(j.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})]}),Object(b.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:h.map((function(t){return Object(b.jsx)("li",{children:Object(b.jsx)(i.c,{to:t.path,exact:!0,activeClassName:"active-link",onClick:function(){o(!1)},children:t.text})},t.id)}))})]})},x=function(){var t=Object(u.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),n=e.title,c=e.description;return Object(b.jsxs)("div",{className:"main__content",children:[Object(b.jsx)("h1",{children:n}),Object(b.jsx)("p",{children:c})]})},O=function(){var t=Object(u.g)(),e=t.url,n=t.path;return Object(b.jsxs)("div",{className:"about__content",children:[Object(b.jsxs)("ul",{className:"about__list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(b.jsx)(u.a,{path:"".concat(n,"/:slug"),children:Object(b.jsx)(x,{})})]})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},m=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},g=n(12),y=n(13),v=function(t){var e=Object(c.useState)({title:""}),n=Object(l.a)(e,2),o=n[0],a=n[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.title.trim()?(t.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(t){a(Object(r.a)(Object(r.a)({},o),{},Object(g.a)({},t.target.name,t.target.value)))}}),Object(b.jsx)("button",{className:"input-submit",children:Object(b.jsx)(y.a,{})})]})},N=n(14),k=n.n(N),w=function(t){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),o=n[0],a=n[1],i=t.todo,s=i.completed,r=i.id,u=i.title,d={},j={};return o?d.display="none":j.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(b.jsxs)("li",{className:k.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){a(!0)},style:d,children:[Object(b.jsx)("input",{type:"checkbox",className:k.a.checkbox,checked:s,onChange:function(){return t.handleChangeProps(r)}}),Object(b.jsx)("button",{onClick:function(){return t.deleteTodoProps(r)},style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"},children:Object(b.jsx)(y.b,{})})," ",Object(b.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:u})]}),Object(b.jsx)("input",{type:"text",style:j,className:k.a.textInput,value:u,onChange:function(e){t.setUpdate(e.target.value,r)},onKeyDown:function(t){"Enter"===t.key&&a(!1)}})]})},T=function(t){return Object(b.jsx)("ul",{children:t.todos.map((function(e){return Object(b.jsx)(w,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,setUpdate:t.setUpdate},e.id)}))})},_=n(41),S=function(){var t=Object(c.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(m,{}),Object(b.jsx)(v,{addTodoProps:function(t){var e={id:Object(_.a)(),title:t,completed:!1};o([].concat(Object(s.a)(n),[e]))}}),Object(b.jsx)(T,{todos:n,handleChangeProps:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){o(Object(s.a)(n.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){o(n.map((function(n){return n.id===e&&(n.title=t),n})))}})]})})}),Object(b.jsx)(u.a,{path:"/about",children:Object(b.jsx)(O,{})}),Object(b.jsx)(u.a,{path:"*",children:Object(b.jsx)(f,{})})]})]})};a.a.render(Object(b.jsx)(i.a,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.eb6d1061.chunk.js.map