(this["webpackJsonpdeveloper-dashboard"]=this["webpackJsonpdeveloper-dashboard"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/auth_init.9bcab304.png"},52:function(e,t,a){e.exports=a(88)},57:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),o=a(12),s=(a(57),a(4)),u=a(23),i=a(20),m=a(7),p=a(16),d=a(6),E=a(2),b=a(5),g=a.n(b),h=a(15),y=a(14),v=a.n(y),f=function(e){if(e){var t="Bearer ".concat(e);v.a.defaults.headers.common.Authorization=t}else delete v.a.defaults.headers.common.Authorization},O=a(90),S=function(e,t){return function(a){var n=Object(O.a)();a({type:"SET_ALERT",payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return a({type:"REMOVE_ALERT",payload:n})}),5e3)}},j="https://admin.barikoi.xyz:8090",N=function(){return function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&f(localStorage.token),e.prev=1,e.next=4,v.a.get("".concat(j,"/auth/user"));case 4:a=e.sent,t({type:"USER_LOAD_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"USER_LOAD_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(h.a)(g.a.mark((function t(a){var n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"X-Requested-With":"application/json"}},console.log("checking form data:",e),t.prev=2,t.next=5,v.a.post("".concat(j,"/auth/login"),e,n);case 5:c=t.sent,console.log("checking res",c.data),c&&!0===c.data.success?(a({type:"LOGIN_USER",payload:c.data.data}),a(N())):(a({type:"LOGIN_FAIL",payload:c.data.message}),a(S(c.data.message,"danger"))),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:"LOGIN_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},k=function(){return function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&f(localStorage.token),e.prev=1,e.next=4,v.a.get("".concat(j,"/auth/business/CurrentActiveKey"));case 4:(a=e.sent).data.current_active_key?t({type:"GET_KEY_SUCCESS",payload:a.data}):t({type:"GET_KEY_FAIL"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_KEY_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},_=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}}),{logout:function(){return function(){var e=Object(h.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,a=(e.loading,e.logout),r=Object(n.useState)(!0),l=Object(m.a)(r,2),s=l[0],u=l[1],i=Object(n.useState)(!1),d=Object(m.a)(i,2),E=d[0],b=d[1],g=function(){u(!s)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"side-nav show-desktop ".concat(s&&t?"":"close-sidebar")},c.a.createElement("div",{className:"side-header"},c.a.createElement("h2",{className:"brand-logo"},"Bari",c.a.createElement("span",null,"koi")),c.a.createElement(p.a,{icon:"bars",size:"lg",className:"pointer",onClick:g})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Dashboard")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/account"},"Account")))),c.a.createElement("header",{className:"nav-header container ".concat(t?"":"close-sidebar")},c.a.createElement("span",{className:"ham light-color"},c.a.createElement(p.a,{icon:"chevron-right",size:"lg",onClick:g,className:" ".concat(s&&t?"hide":"")})),c.a.createElement("div",{className:"dropdown"},c.a.createElement("h4",{className:"light-color btn-1",onClick:function(){b(!E)}},"Account"),c.a.createElement("div",{className:"dropdown-content ".concat(E?"open":"")},c.a.createElement("p",{onClick:function(){a(),b(!1)}},"Logout")))))})),C=a(45),w=a(29),x=a(47),I=a.n(x);function L(){var e=Object(C.a)(["\n  display: block;\n  margin: 0 auto;\n"]);return L=function(){return e},e}var R=Object(w.css)(L()),P=function(e){var t=e.loading;return c.a.createElement("div",null,c.a.createElement(I.a,{size:60,css:R,loading:t}))},T=Object(d.b)((function(e){return{isAuthenticated:e.auth.user,loading:e.auth.loading,apiKey:e.auth.apiKey,analytics:e.auth.analytics}}),{getApiKey:k,getAnalytics:function(){return function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&f(localStorage.token),e.prev=1,e.next=4,v.a.get("".concat(j,"/developer/analytics"));case 4:"Token is Invalid"===(a=e.sent).data.message?t({type:"GET_ANALYTICS_FAIL",payload:a.data.message}):t({type:"GET_ANALYTICS_SUCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_ANALYTICS_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.isAuthenticated;var t=e.loading,a=e.apiKey,r=e.analytics,l=e.getApiKey,o=e.getAnalytics;return Object(n.useEffect)((function(){l(),o()}),[a]),t?c.a.createElement(P,{loading:t}):c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"analytics wrapper"},c.a.createElement("small",null,"API Usage Table"),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"API"),c.a.createElement("th",null,"Usage")),a?r&&c.a.createElement(n.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,"Autocomplete"),c.a.createElement("td",null,r[0].autocomplete_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"ReverseGeo"),c.a.createElement("td",null,r[0].reverse_geo_code_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Geocode"),c.a.createElement("td",null,r[0].geo_code_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Nearby"),c.a.createElement("td",null,r[0].nearby_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Distance"),c.a.createElement("td",null,r[0].distance_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Rupantor"),c.a.createElement("td",null,r[0].rupantor_batchgeo_count))):c.a.createElement("tr",null,c.a.createElement("td",null,"No Api key in use"),c.a.createElement("td",null,"0")))))})),K=a(18),G=Object(d.b)(null,{resetPassword:function(e){return function(){var t=Object(h.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.token&&f(localStorage.token),t.prev=1,t.next=4,v.a.post("".concat(j,"/auth/UpdatePass"),e);case 4:"Password changed successfully."===(n=t.sent).data.message&&(a({type:"RESET_PASSWORD_SUCCESS",payload:n.data}),a(S(n.data.message,"success"))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"RESET_PASSWORD_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.resetPopup,a=e.toggleResetPopup,r=e.resetPassword,l=Object(n.useState)(!1),o=Object(m.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(!1),d=Object(m.a)(i,2),b=d[0],g=d[1],h=Object(n.useState)({oldPass:"",newPass:""}),y=Object(m.a)(h,2),v=y[0],f=y[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",j),function(){document.removeEventListener("mousedown",j)}}),[]);var O=Object(n.useRef)(),S=function(e){f(Object(E.a)(Object(E.a)({},v),{},Object(K.a)({},e.target.name,e.target.value)))},j=function(e){O.current.contains(e.target)||a(!t)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("form",{ref:O,className:"popup card-1",onSubmit:function(e){e.preventDefault(),r(v)}},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"Reset Password"),c.a.createElement(p.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:s?"text":"password",placeholder:"Current Password",name:"oldPass",onChange:S}),c.a.createElement(p.a,{icon:"".concat(s?"eye":"eye-slash"),size:"lg",className:"pointer",onClick:function(){u(!s)}})),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:b?"text":"password",placeholder:"New Password",name:"newPass",onChange:S}),c.a.createElement(p.a,{icon:"".concat(b?"eye":"eye-slash"),size:"lg",className:"pointer",onClick:function(){g(!b)}})),c.a.createElement("button",{className:"btn-1"},"Update Password")))})),U=a(19),F=a.n(U),z=function(e){var t=e.apiPopup,a=e.toggleApiPopup,r=e.apiKey,l=Object(n.useState)(""),o=Object(m.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}}),[]);var i=Object(n.useRef)(),d=function(e){i.current.contains(e.target)||a(!t)},E=function(e){u(e.target.title)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("div",{ref:i,className:"popup card-1"},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"APIs"),c.a.createElement(p.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("small",null,"Geocode"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"geocode",value:"https://barikoi.xyz/v1/api/search/geocode/".concat(r,"/place?")}),c.a.createElement(F.a,{"data-clipboard-target":"#geocode","button-title":"geocode",className:"btn-1 ".concat("geocode"===s?"active-btn":""),onClick:E},"geocode"===s?"Copied":"copy")),c.a.createElement("small",null,"Reverse Geocode"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"reverse",value:"https://barikoi.xyz/v1/api/search/reverse/geocode/".concat(r,"/place?")}),c.a.createElement(F.a,{"data-clipboard-target":"#reverse","button-title":"reverse",className:"btn-1 ".concat("reverse"===s?"active-btn":""),onClick:E},"reverse"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Autocomplete"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"autocomplete",value:"https://barikoi.xyz/v1/api/search/autocomplete/".concat(r,"/place?")}),c.a.createElement(F.a,{"data-clipboard-target":"#autocomplete","button-title":"autocomplete",className:"btn-1 ".concat("autocomplete"===s?"active-btn":""),onClick:E},"autocomplete"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Nearby"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"nearby",value:"https://barikoi.xyz/v1/api/search/nearby/".concat(r)}),c.a.createElement(F.a,{"data-clipboard-target":"#nearby","button-title":"nearby",className:"btn-1 ".concat("nearby"===s?"active-btn":""),onClick:E},"nearby"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Distance"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"distance",value:"https://barikoi.xyz/v1/api/distance/".concat(r)}),c.a.createElement(F.a,{"data-clipboard-target":"#distance","button-title":"distance",className:"btn-1 ".concat("distance"===s?"active-btn":""),onClick:E},"distance"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Routing"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"routing",value:"https://barikoi.xyz/v1/api/route/".concat(r)}),c.a.createElement(F.a,{"data-clipboard-target":"#routing","button-title":"routing",className:"btn-1 ".concat("routing"===s?"active-btn":""),onClick:E},"routing"===s?"Copied":"copy")," ")))},D=Object(d.b)((function(e){return{user:e.auth.user,loading:e.auth.loading,apiKey:e.auth.apiKey,apiKeyMessage:e.auth.apiKeyMessage}}),{getApiKey:k,generateKey:function(){return function(){var e=Object(h.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&f(localStorage.token),e.prev=1,e.next=4,v.a.post("".concat(j,"/auth/business/keygen"));case 4:"Key Generated!"===(a=e.sent).data.message?t({type:"GET_KEY_SUCCESS",payload:a.data}):t({type:"GET_KEY_FAIL"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_KEY_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.user.user,a=e.loading,r=e.apiKey,l=e.apiKeyMessage,o=e.getApiKey,s=e.generateKey,u=Object(n.useState)(!1),i=Object(m.a)(u,2),p=i[0],d=i[1],E=Object(n.useState)(!1),b=Object(m.a)(E,2),g=b[0],h=b[1];return Object(n.useEffect)((function(){o()}),[]),a?c.a.createElement(P,{loading:a}):t&&c.a.createElement("div",{className:"account container"},c.a.createElement("h2",null,"Account Overview"),c.a.createElement("div",{className:"account-cards"},c.a.createElement("div",{className:"card-2 account-card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,"API Panel")),c.a.createElement("p",null,l),c.a.createElement("p",null,"Current Plan: Pay as you go"),c.a.createElement("p",null,"Active Api Key: ",r),r?c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return h(!g)}},"API"):c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return s()}},"Generate API KEY")),c.a.createElement("div",{className:"card-2 account-card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,"Profile")),c.a.createElement("p",null,"User: ",t.name),c.a.createElement("p",null,"Email: ",t.email),c.a.createElement("p",null,"Contact: ",t.phone),c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return d(!p)}},"Reset Password"))),p&&c.a.createElement(G,{resetPopup:p,toggleResetPopup:d}),g&&c.a.createElement(z,{apiPopup:g,toggleApiPopup:h,apiKey:r}))})),Y=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){return function(){var t=Object(h.a)(g.a.mark((function t(a){var n,c,r,l,o,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"X-Requested-With":"application/json"}},t.prev=1,c=Object(E.a)(Object(E.a)({},e),{},{userType:"2"}),t.next=5,v.a.post("".concat(j,"/auth/register"),c,n);case 5:r=t.sent,a({type:"REGISTER_SUCCESS",payload:r.data}),l=e.email,o=e.password,a(A({email:l,password:o})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0&&(s=Object.values(t.t0.response.data.message))&&s.forEach((function(e){return a(S(e,"danger"))}));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,r=e.register,l=Object(n.useState)({name:"",userType:"2",phone:"",email:"",password:""}),u=Object(m.a)(l,2),i=u[0],p=u[1],d=Object(n.useState)(!1),b=Object(m.a)(d,2),g=b[0],h=b[1],y=function(e){p(Object(E.a)(Object(E.a)({},i),{},Object(K.a)({},e.target.name,e.target.value)))},v=i.name,f=i.phone,O=i.email,S=i.password;return t?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"auth container"},c.a.createElement("div",{className:"auth-flex"},c.a.createElement("img",{src:a(43),alt:"",className:"auth_img hide-mobile"}),c.a.createElement("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),r(i)}},c.a.createElement("h2",{className:"purple-text"},"Sign up with Barikoi"),c.a.createElement("input",{type:"text",placeholder:"Full Name",name:"name",value:v,onChange:y,required:!0}),c.a.createElement("input",{type:"text",placeholder:"Phone",name:"phone",value:f,onChange:y,required:!0}),c.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:O,onChange:y,required:!0}),c.a.createElement("input",{type:g?"text":"password",placeholder:"Password",name:"password",value:S,onChange:y,required:!0}),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",name:"show-password",id:"",onChange:function(){h(!g)}}),c.a.createElement("span",null,"Show Password"),c.a.createElement("div",{className:"button-space"},c.a.createElement("button",{className:"bkoi-btn btn-primary btn-primary-circle"},"SIGN UP")),c.a.createElement("p",null,"Already have an account?"," ",c.a.createElement(o.b,{to:"/login"},c.a.createElement("small",{className:"purple-text strong"},"LOG IN"))))))})),M=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{loginUser:A})((function(e){var t=e.isAuthenticated,r=e.loginUser,l=Object(n.useState)({email:"",password:""}),u=Object(m.a)(l,2),i=u[0],p=u[1],d=Object(n.useState)(!1),b=Object(m.a)(d,2),g=b[0],h=b[1],y=function(e){p(Object(E.a)(Object(E.a)({},i),{},Object(K.a)({},e.target.name,e.target.value)))},v=i.email,f=i.password;return t?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"auth container"},c.a.createElement("div",{className:"auth-flex"},c.a.createElement("img",{src:a(43),alt:"",className:"auth_img hide-mobile"}),c.a.createElement("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),r(i)}},c.a.createElement("h2",{className:"purple-text"},"Sign in to Barikoi"),c.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:v,onChange:y}),c.a.createElement("input",{type:g?"text":"password",placeholder:"Password",name:"password",value:f,onChange:y}),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",name:"show-password",id:"",onChange:function(){h(!g)}}),c.a.createElement("span",null,"Show Password"),c.a.createElement("div",{className:"button-space"},c.a.createElement("button",{className:"bkoi-btn btn-primary btn-primary-circle"},"SIGN IN")),c.a.createElement("p",null,"Don't have an account yet?"," ",c.a.createElement(o.b,{to:"/register"},c.a.createElement("small",{className:"purple-text strong"},"SIGN UP"))))))})),q=a(51),W=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}}))((function(e){var t=e.component,a=e.isAuthenticated,n=e.loading,r=Object(q.a)(e,["component","isAuthenticated","loading"]);return c.a.createElement(s.b,Object.assign({},r,{render:function(e){return n?c.a.createElement(P,{loading:n}):a?c.a.createElement(t,e):c.a.createElement(s.a,{to:"/login"})}}))})),B=function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(s.d,null,c.a.createElement(W,{exact:!0,path:"/",component:T}),c.a.createElement(W,{exact:!0,path:"/account",component:D}),c.a.createElement(s.b,{exact:!0,path:"/register",component:Y}),c.a.createElement(s.b,{exact:!0,path:"/login",component:M})))},J=(a(87),Object(d.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return c.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))}))),V=a(17),X=a(48),H=a(49),Q={data:localStorage.getItem("token"),isAuthenticated:!1,error:null,loading:!0,user:null,message:null,apiKey:null,apiKeyMessage:null,analytics:null},Z=a(50),$=[],ee=Object(V.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOAD_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case"RESET_PASSWORD_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{message:t.payload.message});case"GET_KEY_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{apiKeyMessage:t.payload.message,apiKey:t.payload.current_active_key});case"GENERATE_KEY_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{apiKeyMessage:t.payload.message,apiKey:t.payload.key});case"GET_ANALYTICS_SUCESS":return Object(E.a)(Object(E.a)({},e),{},{analytics:t.payload});case"GET_KEY_FAIL":return Object(E.a)({},e);case"GET_ANALYTICS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{analytics:null});case"REGISTER_SUCCESS":case"LOGIN_USER":return localStorage.setItem("token",t.payload),Object(E.a)(Object(E.a)({},e),{},{data:t.payload,isAuthenticated:!0,loading:!1});case"CLEAR_ERRORS":return Object(E.a)(Object(E.a)({},e),{},{error:null});case"LOGOUT":case"REGISTER_FAIL":case"LOGIN_FAIL":case"USER_LOAD_FAIL":return localStorage.removeItem("token"),Object(E.a)(Object(E.a)({},e),{},{data:null,isAuthenticated:!1,error:t.payload,loading:!1,user:null,message:null,apiKey:null,apiKeyMessage:null,analytics:null});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERT":return[].concat(Object(Z.a)(e),[t.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==t.payload}));default:return e}}}),te=[H.a],ae=Object(V.createStore)(ee,{},Object(X.composeWithDevTools)(V.applyMiddleware.apply(void 0,te)));u.b.add(i.e,i.a,i.b,i.c,i.d);var ne=function(){return Object(n.useEffect)((function(){f(localStorage.token),ae.dispatch(N())}),[]),c.a.createElement(d.a,{store:ae},c.a.createElement("div",{className:"App"},c.a.createElement(_,null),c.a.createElement(J,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{component:B}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(ne,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e6c33f0e.chunk.js.map