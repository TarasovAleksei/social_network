(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[3],{95:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2ldGS",dialogsItems:"Dialogs_dialogsItems__37S8F",item:"Dialogs_item__3ogF1",itemUser:"Dialogs_itemUser__2Y_mY",name:"Dialogs_name__36brx",activeLink:"Dialogs_activeLink__PAaPc",messages:"Dialogs_messages__28Nn7",message:"Dialogs_message__3XwXP",btnDialogs:"Dialogs_btnDialogs__chiBE"}},96:function(e,s,a){"use strict";a.r(s),a.d(s,"DialogsContainer",(function(){return O}));var i=a(0),t=a.n(i),n=a(48),c=a(3),r=a(95),m=a.n(r),o=a(10),l=a(1),d=t.a.memo((function(e){var s="/dialogs/".concat(e.id);return Object(l.jsx)("div",{className:m.a.item,children:Object(l.jsx)(o.b,{activeClassName:m.a.activeLink,to:s,children:Object(l.jsxs)("div",{className:m.a.itemUser,children:[Object(l.jsx)("img",{src:e.url}),Object(l.jsx)("span",{className:m.a.name,children:e.name})]})})})})),g=function(e){return Object(l.jsxs)("div",{className:m.a.message,children:[" ",e.message]})},j=a(31),u=t.a.memo((function(e){var s=e.dialogs.map((function(e){return Object(l.jsx)(d,{id:e.id,name:e.name,url:e.url},e.id)})),a=e.messages.map((function(e){return Object(l.jsx)(g,{message:e.message,id:e.id},e.id)})),i=Object(j.a)(),t=i.register,n=i.handleSubmit,r=i.formState.errors;return Object(l.jsxs)("div",{className:m.a.dialogs,children:[Object(l.jsx)("div",{className:m.a.dialogsItems,children:s}),Object(l.jsxs)("div",{className:m.a.messages,children:[Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:m.a.container,onSubmit:n((function(s){return e.addMessage(s.message)})),children:[Object(l.jsx)("input",Object(c.a)({placeholder:"add your message"},t("message",{required:!0}))),r.message&&Object(l.jsx)("span",{children:"This field is empty"}),Object(l.jsx)("input",{value:"send",className:m.a.btnDialogs,type:"submit"})]})}),a]})]})})),b=a(5),_=a(7),O=function(){var e=Object(b.c)((function(e){return e.auth})).isAuth,s=Object(b.c)((function(e){return e.dialogsPage})),a=s.messages,i=s.dialogs,t=Object(b.b)();return e?Object(l.jsx)(u,{messages:a,dialogs:i,addMessage:function(e){t(Object(n.b)(e))}}):Object(l.jsx)(_.a,{to:"/login"})}}}]);
//# sourceMappingURL=3.1fbca6e3.chunk.js.map