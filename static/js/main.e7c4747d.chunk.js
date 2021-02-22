(this["webpackJsonppoker-go"]=this["webpackJsonppoker-go"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var r,a=n(4),c=n(0),o=n(26),i=n.n(o),s=n(180),u=n(179),l=n(184),d=n(176),b=n(8),f=n(183),j=n(181),p=Object(d.a)({container:{width:"100%","& .MuiInput-input":{fontSize:28,width:380}},skeleton:{transform:"none"}}),m=function(e){var t=e.setNameStory,n=e.nameStory,r=e.subscribedState,o=Object(c.useState)(""),i=Object(b.a)(o,2),s=i[0],u=i[1],l=p();Object(c.useEffect)((function(){u(n)}),[n]);return Object(a.jsx)("div",{className:l.container,children:r?Object(a.jsx)(j.a,{value:s,label:"Name of story",variant:"standard",hiddenLabel:!0,onChange:function(e){u(e.target.value)},onBlur:function(e){t(e.target.value)}}):Object(a.jsx)(f.a,{width:294,height:65,className:l.skeleton})})},O=n(93),h=n.n(O),g=n(182);(r=new g.a).webSocketFactory=function(){return new h.a("https://poker-api.r2ls.ru/ws")},r.activate();var v={onSubscribe:function(e,t,n,a,c,o,i){r.onConnect=function(){n(),r.subscribe("/topic/room/topic-changed",(function(e){t(JSON.parse(e.body))})),r.subscribe("/topic/room/im-here",(function(){var t={name:e().user.name};v.sendUserNameMeToo(t)})),r.subscribe("/topic/room/im-here-too",(function(e){a(JSON.parse(e.body))})),r.subscribe("/topic/room/i-left",(function(e){c(JSON.parse(e.body))})),r.subscribe("/topic/room/i-voted",(function(e){o(JSON.parse(e.body))})),r.subscribe("/topic/room/open-cards",(function(t){var n=e().user,a={name:n.name,score:n.number};r.publish({destination:"/app/room/my-score",body:JSON.stringify(a)})})),r.subscribe("/topic/room/my-score",(function(e){i(JSON.parse(e.body))}))}},sendTaskName:function(e){r.publish({destination:"/app/room/topic-changed",body:JSON.stringify(e)})},sendUserName:function(e){r.publish({destination:"/app/room/im-here",body:JSON.stringify(e)})},sendUserNameMeToo:function(e){r.publish({destination:"/app/room/im-here-too",body:JSON.stringify(e)})},removeUser:function(e){r.publish({destination:"/app/room/i-left",body:JSON.stringify(e)})},vote:function(e){r.publish({destination:"/app/room/i-voted",body:JSON.stringify(e)})},openCards:function(e){r.publish({destination:"/app/room/open-cards",body:JSON.stringify(e)})}},y=n(13),x=function(e){return e.board.title},S=function(e){return e.board.subscribed},N=function(){var e=Object(y.c)(x),t=Object(y.c)(S);return Object(a.jsx)(m,{setNameStory:function(e){var t={title:e};v.sendTaskName(t)},nameStory:e,subscribedState:t})},C=Object(d.a)({player:{display:"flex",width:125,flexDirection:"column",alignItems:"center",wordBreak:"break-word",marginRight:-22.5,marginLeft:-22.5,"&:nth-child(odd)":{alignSelf:"flex-end"},"&:nth-child(even)":{alignSelf:"flex-start",paddingTop:5}},body:{backgroundColor:"rgba(0, 0, 0, 0.11)",width:35,height:65,borderRadius:4,transition:"0.2s",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontSize:18,fontWeight:600,paddingTop:8,textAlign:"center",lineHeight:1.3,minHeight:54,display:"flex",alignItems:"center"},voted:{backgroundColor:"#115293"},number:{border:"2px solid #1976d2",borderRadius:4,color:"#1976d2",fontWeight:"bold",backgroundColor:"#fff"}}),k=function(e){var t=e.name,n=e.onDoubleClickHandler,r=e.isVoted,c=e.number,o=C();return Object(a.jsxs)("div",{className:o.player,children:[Object(a.jsx)("div",{className:"".concat(o.body," ").concat(r?o.voted:""," ").concat(c?o.number:""),children:c}),Object(a.jsx)("div",{className:o.name,onDoubleClick:n,children:t})]})},w=Object(d.a)({inputName:{minWidth:70,maxWidth:125,marginTop:12}}),E=function(e){var t,n=e.name,r=e.setName,o=e.votedUsers,i=e.scores,s=Object(c.useState)(""),u=Object(b.a)(s,2),l=u[0],d=u[1],f=w();return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(k,{name:n,onDoubleClickHandler:function(){n.length&&v.removeUser({name:n}),d(n),r("")},isVoted:null===o||void 0===o?void 0:o.includes(n),number:null===i||void 0===i||null===(t=i.find((function(e){return e.name===n})))||void 0===t?void 0:t.score}):Object(a.jsx)(j.a,{className:f.inputName,label:"Your name",variant:"standard",value:l,onChange:function(e){d(e.target.value)},onBlur:function(){r(l)},autoFocus:!0})})},T="SET_NAME",U="PUSH_USER_NAME",J="REMOVE_USER",R="VOTED_USER",M="SHOW_CARD",W="SET_NUMBER",_=function(e){return{type:U,payload:e}},A=function(e){return{type:J,payload:e}},I=function(e){return{type:R,payload:e}},D=function(e){return{type:M,payload:e}},H=function(e){return e.user.name},B=function(e){return e.user.colleagues.filter((function(e){return e.length>0}))},F=function(e){return e.user.votedColleagues},V=function(e){return e.user.scores},z=function(){var e=Object(y.c)(H),t=Object(y.c)(F),n=Object(y.c)(V),r=Object(c.useState)(""),o=Object(b.a)(r,2),i=o[0],s=o[1],u=Object(y.b)();return Object(c.useEffect)((function(){s(e)}),[e]),Object(c.useEffect)((function(){i.length&&(u({type:T,payload:{name:i}}),v.sendUserName({name:i}))}),[i]),Object(c.useEffect)((function(){if(i.length)return function(){return v.removeUser({name:i})}}),[]),Object(a.jsx)(E,{name:i,setName:s,votedUsers:t,scores:n})},G=function(){var e=Object(y.c)(B),t=Object(y.c)(H),n=Object(y.c)(F),r=Object(y.c)(V);return Object(a.jsx)(a.Fragment,{children:e.map((function(e){var c;return t!==e&&Object(a.jsx)(k,{name:e,isVoted:n.includes(e),number:null===r||void 0===r||null===(c=r.find((function(t){return t.name===e})))||void 0===c?void 0:c.score},e)}))})},L=Object(d.a)({container:{display:"flex",alignItems:"center",position:"relative",height:425},table:{position:"absolute",width:"calc(100% + 80px)",height:150,display:"block",backgroundColor:"rgba(0, 0, 0, 0.11)",borderRadius:25,marginLeft:-40}}),Y=function(){var e=L();return Object(a.jsxs)("div",{className:e.container,children:[Object(a.jsx)("div",{className:e.table}),Object(a.jsx)(z,{}),Object(a.jsx)(G,{})]})},q=[0,1,3,5,8,13,21,34,55,89,"?"],P=Object(d.a)({cardsWrapper:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",width:"100%",maxWidth:725},card:{width:50,height:80,display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid #1976d2",borderRadius:4,color:"#1976d2",fontSize:20,fontWeight:"bold",cursor:"pointer",transition:"0.2s","&:hover":{transform:"translate(0, -4px)",backgroundColor:"rgba(0, 0, 0, 0.04)"}},title:{width:"100%",textAlign:"center",fontWeight:300},cardActive:{transform:"translate(0, -4px)",backgroundColor:"rgba(0, 0, 0, 0.04)"}}),K=function(e){var t=e.setNumber,n=Object(c.useState)(""),r=Object(b.a)(n,2),o=r[0],i=r[1],s=P(),u=Object(c.useMemo)((function(){return q.map((function(e){return Object(a.jsx)("div",{className:"".concat(s.card," ").concat(o===e&&s.cardActive),onClick:function(){return function(e){t(e),i(e)}(e)},children:e},e)}))}),[o]);return Object(a.jsxs)("div",{className:s.cardsWrapper,children:[Object(a.jsx)("p",{className:s.title,children:"Choose your card"}),u]})},Q=function(){var e=Object(y.c)(H),t=Object(c.useState)(""),n=Object(b.a)(t,2),r=n[0],o=n[1],i=Object(y.b)();return Object(c.useEffect)((function(){if(e.length){var t={name:e};i(function(e){return{type:W,payload:e}}(r)),v.vote(t)}}),[r]),Object(a.jsx)(K,{setNumber:o})},X=Object(d.a)({button:{display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 16px",borderRadius:4,backgroundColor:"#4791db",color:"#fff",cursor:"pointer",marginTop:16,transition:"0.2s","&:hover":{backgroundColor:"#1976d2"},"&:active":{backgroundColor:"#115293"}}}),Z=function(e){var t=e.sayShowCards,n=X();return Object(a.jsx)("div",{className:n.button,onClick:function(){t()},children:"Show cards"})},$=function(){var e=Object(y.c)(H);return Object(a.jsx)(Z,{sayShowCards:function(){var t={name:e};v.openCards(t)}})},ee=Object(d.a)({board:{height:"100%",padding:16},header:{display:"flex",flexWrap:"wrap"},middle:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 300px)",padding:16},footer:{display:"flex",justifyContent:"center"}}),te=function(){var e=ee();return Object(a.jsxs)("div",{className:e.board,children:[Object(a.jsxs)("header",{className:e.header,children:[Object(a.jsx)(N,{}),Object(a.jsx)($,{})]}),Object(a.jsx)("div",{className:e.middle,children:Object(a.jsx)(Y,{})}),Object(a.jsx)("footer",{className:e.footer,children:Object(a.jsx)(Q,{})})]})},ne=function(){return Object(a.jsx)(te,{})},re=n(24),ae=n.n(re),ce=n(57),oe="GET_NAME_STORY",ie="SET_SUBSCRIBE_STATE",se=function(e){return{type:oe,payload:e}},ue=Object(d.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"}}),le=function(){var e=ue(),t=Object(y.b)();return Object(c.useEffect)((function(){t(function(){var e=Object(ce.a)(ae.a.mark((function e(t,n){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.onSubscribe(n,(function(e){return t(se(e))}),(function(){return t({type:ie,payload:!0})}),(function(e){return t(_(e))}),(function(e){return t(A(e))}),(function(e){return t(I(e))}),(function(e){return t(D(e))}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),[]),Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(ne,{})})},de=n(96),be=n(59),fe=Object(de.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:be.a.A400},background:{default:"#f5f5f5"}}}),je=n(40),pe=n(95),me=n(17),Oe="GET_MESSAGE",he={allMessages:[]},ge=n(14),ve={title:"",subscribed:!1},ye={name:"",colleagues:[],votedColleagues:[],number:null,scores:[]},xe=function(e,t){var n=e.filter((function(e){return e.name!==t.name}));return[].concat(Object(me.a)(n),[t])},Se=function(e,t){return e.colleagues.includes(t)?e:Object(ge.a)(Object(ge.a)({},e),{},{colleagues:[].concat(Object(me.a)(e.colleagues),[t])})},Ne=function(e,t){return e.votedColleagues.includes(t)?e:Object(ge.a)(Object(ge.a)({},e),{},{votedColleagues:[].concat(Object(me.a)(e.votedColleagues),[t])})},Ce=Object(je.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return{allMessages:[].concat(Object(me.a)(e.allMessages),[t.payload])};default:return e}},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(ge.a)(Object(ge.a)({},e),{},{title:t.payload.title});case ie:return Object(ge.a)(Object(ge.a)({},e),{},{subscribed:!!t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(ge.a)(Object(ge.a)({},e),{},{name:t.payload.name});case U:return Se(e,t.payload.name);case J:return Object(ge.a)(Object(ge.a)({},e),{},{colleagues:e.colleagues.filter((function(e){return e.length&&e!==t.payload.name}))});case R:return Ne(e,t.payload.name);case W:return Object(ge.a)(Object(ge.a)({},e),{},{number:t.payload});case M:return Object(ge.a)(Object(ge.a)({},e),{},{votedColleagues:[],number:null,scores:xe(e.scores,t.payload)});default:return e}}}),ke=Object(je.d)(Ce,Object(je.a)(pe.a));i.a.render(Object(a.jsx)(u.a,{injectFirst:!0,children:Object(a.jsxs)(l.a,{theme:fe,children:[Object(a.jsx)(s.a,{}),Object(a.jsx)(y.a,{store:ke,children:Object(a.jsx)(le,{})})]})}),document.querySelector("#root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.e7c4747d.chunk.js.map