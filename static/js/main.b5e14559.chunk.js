(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{31:function(t,n,e){},32:function(t,n,e){},43:function(t,n,e){"use strict";e.r(n);var o,a,r,c,i,s,u,l,b,d,j,g,p,O,x,h,m,f,v,w,S,k,C,E,_=e(1),I=e.n(_),A=e(18),P=e.n(A),y=(e(31),e(5)),T=e(3),N=(e(32),e(4)),D={message:"All Systems Operational",backgroundColour:"#3da751"},R=e(7),F=e.n(R),L=e(0),M=N.a.div(o||(o=Object(T.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(t){return t.backgroundColour?t.backgroundColour:"#b1b1b1"})),B=N.a.h2(a||(a=Object(T.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),z=N.a.button(r||(r=Object(T.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),J=N.a.code(c||(c=Object(T.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),Y=function(t){var n=t.loading,e=t.error,o=t.components,a=t.refetch,r=function(t){var n=Object(_.useState)(),e=Object(y.a)(n,2),o=e[0],a=e[1];return Object(_.useEffect)((function(){a(D)}),[t]),[o]}(o),c=Object(y.a)(r,1)[0],i=function(t,n){var e=Object(_.useState)(F()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(y.a)(e,2),a=o[0],r=o[1];return Object(_.useEffect)((function(){var n=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?t((function(){r(F()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(F()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(n)}}),[t]),Object(_.useEffect)((function(){r(F()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[n]),[a]}(a,n),s=Object(y.a)(i,1)[0];return Object(L.jsxs)(L.Fragment,{children:[e.hasError&&Object(L.jsxs)(J,{children:[Object(L.jsx)("div",{children:"An error occured"}),Object(L.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(e.errors,null,3)]}),Object(L.jsxs)(M,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(L.jsx)(B,{children:null===c||void 0===c?void 0:c.message}),Object(L.jsx)(z,{onClick:a,children:n?"reloading":s})]})]})},W=function(t){var n=Object(_.useState)([]),e=Object(y.a)(n,2),o=e[0],a=e[1],r=Object(_.useState)(),c=Object(y.a)(r,2),i=c[0],s=c[1],u=Object(_.useState)(!0),l=Object(y.a)(u,2),b=l[0],d=l[1];return Object(_.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(t)))<new Date-24e4?U(d,s,a,t):(a(JSON.parse(localStorage.getItem("issueStatus".concat(t)))),d(!1),s())}),[t]),[b,i,o||[],function(){return U(d,s,a,t)}]},U=function(t,n,e,o){t(!0),fetch("https://api.github.com/repos/".concat("babylonhealth/tmp-benharris-issues","/issues?state=all&labels=issue status,").concat(o)).then((function(t){return t.json()})).then((function(a){n(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),e(a),t(!1)})).catch((function(a){n(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),e(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),t(!1)}))},H=(N.a.h1(i||(i=Object(T.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),N.a.img(s||(s=Object(T.a)([""])))),K=N.a.div(u||(u=Object(T.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),G=function(){return Object(L.jsx)(K,{children:Object(L.jsx)(H,{src:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/logo.png",alt:"Ben"})})},V=N.a.div(l||(l=Object(T.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),$={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},q=N.a.div(b||(b=Object(T.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.colour}),(function(t){return t.backgroundColour})),Q=function(t){var n=function(t){var n=Object(_.useState)(),e=Object(y.a)(n,2),o=e[0],a=e[1];return Object(_.useEffect)((function(){a(Object.values($).find((function(n){return t.find((function(t){return t.name===n.name.toLowerCase()}))})))}),[t]),o||a($.unknown),[o]}(t.labels),e=Object(y.a)(n,1)[0];return Object(L.jsx)(q,{colour:null===e||void 0===e?void 0:e.colour,backgroundColour:null===e||void 0===e?void 0:e.backgroundColour,children:null===e||void 0===e?void 0:e.name})},X=N.a.div(d||(d=Object(T.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),Z=function(t){var n=t.component;return Object(L.jsxs)(X,{children:[n.title," ",Object(L.jsx)(Q,{labels:n.labels})]})},tt=function(){var t=Object(_.useState)(),n=Object(y.a)(t,2),e=n[0],o=n[1];return Object(_.useEffect)((function(){o(!0)}),[]),[e]},nt=function(t){var n=t.loading,e=t.components,o=tt(),a=Object(y.a)(o,1)[0];return!n||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(t){return Object(L.jsx)(Z,{component:t},t.id)})):Object(L.jsx)("p",{children:"No Components found."}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(V,{}),Object(L.jsx)(V,{}),Object(L.jsx)(V,{})]})},et=e(24),ot=N.a.div(j||(j=Object(T.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(t){return t.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),at=N.a.div(g||(g=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),rt=N.a.div(p||(p=Object(T.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),ct=N.a.div(O||(O=Object(T.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),it=N.a.div(x||(x=Object(T.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.active?"#6e6b6b":"#2f5888"}),(function(t){return t.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),st=N.a.div(h||(h=Object(T.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),ut=function(t){var n=t.incident;return Object(L.jsxs)(ot,{active:n.closed_at,children:[Object(L.jsxs)(at,{children:[Object(L.jsx)(st,{children:F()(n.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(L.jsx)(it,{active:n.closed_at,children:n.closed_at?"Closed":"Active"})]}),Object(L.jsx)(rt,{children:n.title}),Object(L.jsx)(ct,{children:Object(L.jsx)(et.a,{children:n.body})})]})},lt=N.a.div(m||(m=Object(T.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),bt=N.a.div(f||(f=Object(T.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),dt=N.a.div(v||(v=Object(T.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),jt=N.a.div(w||(w=Object(T.a)(["\n  margin: 0 8px;\n"]))),gt=function(t){var n=t.loading,e=t.incidents,o=tt(),a=Object(y.a)(o,1)[0];return Object(L.jsxs)(bt,{children:[Object(L.jsx)(dt,{children:"Incidents"}),!n||a?(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((function(t){return Object(L.jsx)(ut,{incident:t},t.id)})):Object(L.jsx)(jt,{children:"No Incidents found."}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(lt,{}),Object(L.jsx)(lt,{}),Object(L.jsx)(lt,{})]})]})},pt=N.a.div(S||(S=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),Ot=N.a.a(k||(k=Object(T.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(t){return t.visible?"block":"none"})),xt=function(){return Object(L.jsxs)(pt,{children:[Object(L.jsx)("div",{}),Object(L.jsx)(Ot,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MANIFEST:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/manifest.json",REACT_APP_FAVICON:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/favicon.ico",REACT_APP_TITLE:"Ben",REACT_APP_DESCRIPTION:"Simple, modern and flexible status page",REACT_APP_LOGO:"https://raw.githubusercontent.com/tadhglewis/issue-status/master/.issuestatus/logo.png",REACT_APP_NAME:"Ben",REACT_APP_REPOSITORY:"babylonhealth/tmp-benharris-issues"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},ht=N.a.div(C||(C=Object(T.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),mt=N.a.div(E||(E=Object(T.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),ft=function(){var t=W("component"),n=Object(y.a)(t,4),e=n[0],o=n[1],a=n[2],r=n[3],c=W("incident"),i=Object(y.a)(c,4),s=i[0],u=i[1],l=i[2],b=i[3];return Object(L.jsxs)(ht,{children:[Object(L.jsx)(G,{}),Object(L.jsxs)(mt,{children:[Object(L.jsx)(Y,{loading:e||s,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),b()}}),Object(L.jsx)(nt,{loading:e,components:a})]}),Object(L.jsx)(gt,{loading:s,incidents:l}),Object(L.jsx)(xt,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.a.render(Object(L.jsx)(I.a.StrictMode,{children:Object(L.jsx)(ft,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.b5e14559.chunk.js.map