(this["webpackJsonppoker-go"]=this["webpackJsonppoker-go"]||[]).push([[0],{151:function(e,t,a){"use strict";a.r(t);var n,c=a(7),r=a(0),s=a(27),i=a.n(s),o=a(194),l=a(193),u=a(198),j=a(199),d=a(188),b=a(8),m=a(195),h=a(196),f=Object(d.a)({root:{display:"flex",flexDirection:"column",alignItems:"flex-end"},textField:{marginTop:16,marginBottom:8},nickname:{display:"flex",alignItems:"flex-end",width:"100%",marginTop:16},nicknameField:{marginRight:8}}),g=function(e){var t=e.pushMessage,a=e.setNickName,n=e.nickName,s=Object(r.useState)(""),i=Object(b.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(""),j=Object(b.a)(u,2),d=j[0],g=j[1],O=f();return Object(c.jsxs)("div",{className:O.root,children:[!n.length&&Object(c.jsxs)("div",{className:O.nickname,children:[Object(c.jsx)(m.a,{variant:"standard",label:"Write a nickname",className:O.nicknameField,onChange:function(e){l(e.target.value)}}),Object(c.jsx)(h.a,{variant:"outlined",color:"primary",onClick:function(){a(o)},disabled:!o.length,children:"Save"})]}),Object(c.jsx)(m.a,{fullWidth:!0,multiline:!0,rows:2,label:"Write a message",className:O.textField,onChange:function(e){g(e.target.value)},value:d}),Object(c.jsx)(h.a,{variant:"contained",color:"primary",disabled:!n.length,onClick:function(){d.length&&(t(d),g(""))},children:"Sent"})]})},O=a(44),p=Object(d.a)({message:{display:"flex"},name:{fontWeight:500,paddingRight:4}}),x=function(e){var t=e.author,a=void 0===t?"George":t,n=e.message,r=p();return Object(c.jsxs)("div",{className:r.message,children:[Object(c.jsx)("div",{className:r.name,children:"".concat(a,":")}),Object(c.jsx)("div",{children:n})]})},v=Object(r.memo)(x),k=Object(d.a)({root:{borderWidth:1,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.23)",borderRadius:4,minHeight:200,maxHeight:200,padding:16,overflowY:"auto"}}),N=function(e){var t=e.allMessages,a=Object(r.useRef)(null),n=k();return Object(r.useEffect)((function(){a.current&&(a.current.scrollTop=a.current.scrollHeight)}),[t]),Object(c.jsx)("div",{className:n.root,ref:a,children:!!t.length&&t.map((function(e,t){return Object(c.jsx)(v,{author:e.author,message:e.message},t)}))})},y=function(e){return e.chat.allMessages},w=function(){var e=Object(O.c)(y);return Object(c.jsx)(N,{allMessages:e})},S=a(200),M=a(201),C=function(e){var t=e.pushMessage,a=e.setNickName,n=e.nickName;return Object(c.jsx)(S.a,{children:Object(c.jsxs)(M.a,{p:2,children:[Object(c.jsx)(w,{}),Object(c.jsx)(g,{pushMessage:t,setNickName:a,nickName:n})]})})},F=a(103),W=a.n(F),E=a(197),J=function(e){(n=new E.a).webSocketFactory=function(){return new W.a("http://45.84.225.139:8081/ws")},n.activate(),n.onConnect=function(){n.subscribe("/topic/chat",(function(t){e(JSON.parse(t.body))}))}},R=function(e){n.publish({destination:"/app/message",body:JSON.stringify(e)})},T=function(){n.deactivate()},G=a(36),H=a.n(G),A=a(104),I=a(20),q="GET_MESSAGE",B=function(e){return{type:q,payload:e}},D={allMessages:[]},Y=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],s=Object(O.b)();Object(r.useEffect)((function(){return s(function(){var e=Object(A.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J((function(e){return t(B(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){return T()}}),[]);return Object(c.jsx)(C,{pushMessage:function(e){R({author:a,message:e})},setNickName:n,nickName:a})},_=Object(d.a)({root:{}}),z=function(){var e=_();return Object(c.jsx)(j.a,{maxWidth:"sm",className:e.root,children:Object(c.jsx)(M.a,{p:2,children:Object(c.jsx)(Y,{})})})},K=a(106),L=a(65),P=Object(K.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:L.a.A400},background:{default:"#f5f5f5"}}}),Q=a(46),U=a(105),V=Object(Q.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{allMessages:[].concat(Object(I.a)(e.allMessages),[t.payload])};default:return e}}}),X=Object(Q.d)(V,Object(Q.a)(U.a));i.a.render(Object(c.jsx)(l.a,{injectFirst:!0,children:Object(c.jsxs)(u.a,{theme:P,children:[Object(c.jsx)(o.a,{}),Object(c.jsx)(O.a,{store:X,children:Object(c.jsx)(z,{})}),","]})}),document.querySelector("#root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.08e5f591.chunk.js.map