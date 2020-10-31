(this["webpackJsonpdeveloper-dashboard"]=this["webpackJsonpdeveloper-dashboard"]||[]).push([[0],{100:function(e,t,a){e.exports=a(195)},105:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),l=a.n(r),o=a(19),s=(a(105),a(12)),u=a(41),i=a(37),p=a(7),m=a(15),d=a(8),E=a(4),g=a(6),b=a.n(g),f=a(14),v=a(13),y=a.n(v),h=function(e){if(e){var t="Bearer ".concat(e);y.a.defaults.headers.common.Authorization=t}else delete y.a.defaults.headers.common.Authorization},O=a(202),S=function(e,t){return function(a){var n=Object(O.a)();a({type:"SET_ALERT",payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return a({type:"REMOVE_ALERT",payload:n})}),5e3)}},j="https://admin.barikoi.xyz:8090",k=function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&h(localStorage.token),e.prev=1,e.next=4,y.a.get("".concat(j,"/auth/user"));case 4:a=e.sent,t({type:"USER_LOAD_SUCCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"USER_LOAD_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"X-Requested-With":"application/json"}},console.log("checking form data:",e),t.prev=2,t.next=5,y.a.post("".concat(j,"/auth/login"),e,n);case 5:c=t.sent,console.log("checking res",c.data),c&&!0===c.data.success?(a({type:"LOGIN_USER",payload:c.data.data}),a(k())):(a({type:"LOGIN_FAIL",payload:c.data.message}),a(S(c.data.message,"danger"))),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:"LOGIN_FAIL"}),a(S(t.t0.response.data.message,"danger"));case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},A=function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&h(localStorage.token),e.prev=1,e.next=4,y.a.get("".concat(j,"/auth/business/CurrentActiveKey"));case 4:(a=e.sent).data.current_active_key?t({type:"GET_KEY_SUCCESS",payload:a.data}):t({type:"GET_KEY_FAIL"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_KEY_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},N=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}}),{logout:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,a=(e.loading,e.logout),r=Object(n.useState)(!0),l=Object(p.a)(r,2),s=l[0],u=l[1],i=Object(n.useState)(!1),d=Object(p.a)(i,2),E=d[0],g=d[1],b=function(){u(!s)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"side-nav show-desktop ".concat(s&&t?"":"close-sidebar")},c.a.createElement("div",{className:"side-header"},c.a.createElement("h2",{className:"brand-logo"},"Bari",c.a.createElement("span",null,"koi")),c.a.createElement(m.a,{icon:"bars",size:"lg",className:"pointer",onClick:b})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Dashboard")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/account"},"Account")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/packages"},"Packages")))),c.a.createElement("header",{className:"nav-header container ".concat(t?"":"close-sidebar")},c.a.createElement("span",{className:"ham light-color"},c.a.createElement(m.a,{icon:"chevron-right",size:"lg",onClick:b,className:" ".concat(s&&t?"hide":"")})),c.a.createElement("div",{className:"dropdown"},c.a.createElement("h4",{className:"light-color btn-1",onClick:function(){g(!E)}},"Account"),c.a.createElement("div",{className:"dropdown-content ".concat(E?"open":"")},c.a.createElement("p",{onClick:function(){a(),g(!1)}},"Logout")))))})),C=a(65),w=a.n(C),P=a(198),x=a(91),R=a.n(x),I=(a(132),a(92)),T=a(60),L=a(93),K=a.n(L);function G(){var e=Object(I.a)(["\n  display: block;\n  margin: 0 auto;\n"]);return G=function(){return e},e}var U=Object(T.css)(G()),F=function(e){var t=e.loading;return c.a.createElement("div",null,c.a.createElement(K.a,{size:60,css:U,loading:t}))},D=Object(d.b)((function(e){return{isAuthenticated:e.auth.user,loading:e.auth.loading,apiKey:e.auth.apiKey,analytics:e.auth.analytics}}),{getApiKey:A,getAnalytics:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&h(localStorage.token),e.prev=1,e.next=4,y.a.get("".concat(j,"/developer/analytics"));case 4:"Token is Invalid"===(a=e.sent).data.message?t({type:"GET_ANALYTICS_FAIL",payload:a.data.message}):t({type:"GET_ANALYTICS_SUCESS",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_ANALYTICS_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){e.isAuthenticated;var t=e.loading,a=e.apiKey,r=e.analytics,l=e.getApiKey,o=e.getAnalytics;Object(n.useEffect)((function(){l(),o()}),[a]);var s=Object(n.useState)(null),u=Object(p.a)(s,2),i=u[0],m=u[1],d=Object(n.useState)(null),E=Object(p.a)(d,2),g=E[0],v=E[1],h=Object(n.useState)([]),O=Object(p.a)(h,2),S=O[0],j=O[1],k=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==i&&null!==g&&(Object(P.default)(i,"yyyy-mm-dd"),Object(P.default)(g,"yyyy-mm-dd"),y.a.get("".concat("https://admin.barikoi.xyz:8095/api/get/usage/date/range"),{params:{date_from:i,api_key:"MTY5MjpZRVhZVDBRQkVT",date_to:g},paramsSerializer:function(e){return R.a.stringify(e,{arrayFormat:"repeat"})}}).then((function(e){j(e.data.usage)})).catch((function(e){console.error(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?c.a.createElement(F,{loading:t}):c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"analytics wrapper"},c.a.createElement("small",null,"API Usage Table"),c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"API"),c.a.createElement("th",null,"Usage")),a?r&&c.a.createElement(n.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,"Autocomplete"),c.a.createElement("td",null,r[0].autocomplete_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"ReverseGeo"),c.a.createElement("td",null,r[0].reverse_geo_code_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Geocode"),c.a.createElement("td",null,r[0].geo_code_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Nearby"),c.a.createElement("td",null,r[0].nearby_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Distance"),c.a.createElement("td",null,r[0].distance_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Rupantor"),c.a.createElement("td",null,r[0].rupantor_batchgeo_count))):c.a.createElement("tr",null,c.a.createElement("td",null,"No Api key in use"),c.a.createElement("td",null,"0"))),c.a.createElement(w.a,{selected:i,onChange:function(e){return m(e)},selectsStart:!0,startDate:i,endDate:g,maxDate:new Date,dateFormat:"yyyy-MM-dd",placeholderText:"Start Date"}),c.a.createElement(w.a,{selected:g,onChange:function(e){return v(e)},selectsEnd:!0,startDate:i,endDate:g,minDate:i,maxDate:new Date,dateFormat:"yyyy-MM-dd",placeholderText:"End Date"}),c.a.createElement("button",{className:"btn-1",onClick:function(){return k()}},"Ok"),a?S.length>0&&c.a.createElement("table",null,c.a.createElement("tr",null,c.a.createElement("th",null,"API"),c.a.createElement("th",null,"Usage")),c.a.createElement(n.Fragment,null,c.a.createElement("tr",null,c.a.createElement("td",null,"Autocomplete"),c.a.createElement("td",null,S[0].autocomplete_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"ReverseGeo"),c.a.createElement("td",null,S[0].reverse_geo_code_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Geocode"),c.a.createElement("td",null,S[0].geo_code_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Nearby"),c.a.createElement("td",null,S[0].nearby_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Distance"),c.a.createElement("td",null,S[0].distance_count)),c.a.createElement("tr",null,c.a.createElement("td",null,"Rupantor"),c.a.createElement("td",null,S[0].rupantor_batchgeo_count)))):c.a.createElement("tr",null,c.a.createElement("td",null,"No Api key in use"),c.a.createElement("td",null,"0"))))})),z="https://admin.barikoi.xyz:8095/api",M=function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("".concat(z,"/get/business/user/").concat(e));case 3:n=t.sent,console.log("From active plan",n.data),a({type:"GET_PACKAGE_SUCCESS",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"GET_PACKAGE_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Y=a(16),V=Object(d.b)(null,{resetPassword:function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.token&&h(localStorage.token),t.prev=1,t.next=4,y.a.post("".concat(j,"/auth/UpdatePass"),e);case 4:"Password changed successfully."===(n=t.sent).data.message&&(a({type:"RESET_PASSWORD_SUCCESS",payload:n.data}),a(S(n.data.message,"success"))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"RESET_PASSWORD_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.resetPopup,a=e.toggleResetPopup,r=e.resetPassword,l=Object(n.useState)(!1),o=Object(p.a)(l,2),s=o[0],u=o[1],i=Object(n.useState)(!1),d=Object(p.a)(i,2),g=d[0],b=d[1],f=Object(n.useState)({oldPass:"",newPass:""}),v=Object(p.a)(f,2),y=v[0],h=v[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",j),function(){document.removeEventListener("mousedown",j)}}),[]);var O=Object(n.useRef)(),S=function(e){h(Object(E.a)(Object(E.a)({},y),{},Object(Y.a)({},e.target.name,e.target.value)))},j=function(e){O.current.contains(e.target)||a(!t)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("form",{ref:O,className:"popup card-1",onSubmit:function(e){e.preventDefault(),r(y)}},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"Reset Password"),c.a.createElement(m.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:s?"text":"password",placeholder:"Current Password",name:"oldPass",onChange:S}),c.a.createElement(m.a,{icon:"".concat(s?"eye":"eye-slash"),size:"lg",className:"pointer",onClick:function(){u(!s)}})),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:g?"text":"password",placeholder:"New Password",name:"newPass",onChange:S}),c.a.createElement(m.a,{icon:"".concat(g?"eye":"eye-slash"),size:"lg",className:"pointer",onClick:function(){b(!g)}})),c.a.createElement("button",{className:"btn-1"},"Update Password")))})),q=Object(d.b)(null,{resetEmail:function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.patch("".concat(z,"/update/billing/email/").concat(e,"?billing_email=").concat(t));case 3:"Billing email updated successfully"===(c=a.sent).data.message?(n({type:"RESET_EMAIL_SUCCESS",payload:c.data}),n(S(c.data.message,"success"))):(n({type:"RESET_EMAIL_FAIL"}),n(S(c.data.message,"danger"))),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),n({type:"RESET_EMAIL_FAIL"}),n(S(a.t0.response.data.message,"danger"));case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.resetEmailPopup,a=e.toggleResetEmailPopup,r=e.resetEmail,l=e.apiKey,o=Object(n.useState)({billing_email:""}),s=Object(p.a)(o,2),u=s[0],i=s[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g)}}),[]);var d=Object(n.useRef)(),g=function(e){d.current.contains(e.target)||a(!t)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("form",{ref:d,className:"popup card-1",onSubmit:function(e){e.preventDefault(),r(l,u.billing_email)}},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"Reset Email"),c.a.createElement(m.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",placeholder:"New Email",name:"billing_email",onChange:function(e){i(Object(E.a)(Object(E.a)({},u),{},Object(Y.a)({},e.target.name,e.target.value)))}})),c.a.createElement("button",{className:"btn-1"},"Update Email")))})),B=a(34),W=a.n(B),Q=function(e){var t=e.apiPopup,a=e.toggleApiPopup,r=e.apiKey,l=Object(n.useState)(""),o=Object(p.a)(l,2),s=o[0],u=o[1];Object(n.useEffect)((function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}}),[]);var i=Object(n.useRef)(),d=function(e){i.current.contains(e.target)||a(!t)},E=function(e){u(e.target.title)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("div",{ref:i,className:"popup card-1"},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"APIs"),c.a.createElement(m.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("small",null,"Geocode"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"geocode",value:"https://barikoi.xyz/v1/api/search/geocode/".concat(r,"/place?")}),c.a.createElement(W.a,{"data-clipboard-target":"#geocode","button-title":"geocode",className:"btn-1 ".concat("geocode"===s?"active-btn":""),onClick:E},"geocode"===s?"Copied":"copy")),c.a.createElement("small",null,"Reverse Geocode"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"reverse",value:"https://barikoi.xyz/v1/api/search/reverse/geocode/".concat(r,"/place?")}),c.a.createElement(W.a,{"data-clipboard-target":"#reverse","button-title":"reverse",className:"btn-1 ".concat("reverse"===s?"active-btn":""),onClick:E},"reverse"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Autocomplete"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"autocomplete",value:"https://barikoi.xyz/v1/api/search/autocomplete/".concat(r,"/place?")}),c.a.createElement(W.a,{"data-clipboard-target":"#autocomplete","button-title":"autocomplete",className:"btn-1 ".concat("autocomplete"===s?"active-btn":""),onClick:E},"autocomplete"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Nearby"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"nearby",value:"https://barikoi.xyz/v1/api/search/nearby/".concat(r)}),c.a.createElement(W.a,{"data-clipboard-target":"#nearby","button-title":"nearby",className:"btn-1 ".concat("nearby"===s?"active-btn":""),onClick:E},"nearby"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Distance"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"distance",value:"https://barikoi.xyz/v1/api/distance/".concat(r)}),c.a.createElement(W.a,{"data-clipboard-target":"#distance","button-title":"distance",className:"btn-1 ".concat("distance"===s?"active-btn":""),onClick:E},"distance"===s?"Copied":"copy")," "),c.a.createElement("small",null,"Routing"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{readOnly:!0,type:"text",id:"routing",value:"https://barikoi.xyz/v1/api/route/".concat(r)}),c.a.createElement(W.a,{"data-clipboard-target":"#routing","button-title":"routing",className:"btn-1 ".concat("routing"===s?"active-btn":""),onClick:E},"routing"===s?"Copied":"copy")," ")))},J=Object(d.b)((function(e){return{user:e.auth.user,loading:e.auth.loading,apiKey:e.auth.apiKey,apiKeyMessage:e.auth.apiKeyMessage,currentPackage:e.api.currentPackage}}),{getApiKey:A,generateKey:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&h(localStorage.token),e.prev=1,e.next=4,y.a.post("".concat(j,"/auth/business/keygen"));case 4:"Key Generated!"===(a=e.sent).data.message?t({type:"GET_KEY_SUCCESS",payload:a.data}):t({type:"GET_KEY_FAIL"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_KEY_FAIL"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getActivePackage:M})((function(e){var t=e.user.user,a=e.loading,r=e.apiKey,l=e.apiKeyMessage,o=e.currentPackage,s=e.getApiKey,u=e.generateKey,i=e.getActivePackage,m=Object(n.useState)(!1),d=Object(p.a)(m,2),E=d[0],g=d[1],b=Object(n.useState)(!1),f=Object(p.a)(b,2),v=f[0],y=f[1],h=Object(n.useState)(!1),O=Object(p.a)(h,2),S=O[0],j=O[1];return Object(n.useEffect)((function(){s(),i(r)}),[r]),a?c.a.createElement(F,{loading:a}):t&&c.a.createElement("div",{className:"account container"},c.a.createElement("h2",null,"Account Overview"),c.a.createElement("div",{className:"account-cards"},c.a.createElement("div",{className:"card-2 account-card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,"API Panel")),c.a.createElement("p",null,l),c.a.createElement("p",null,"Current Plan: ",o||"Pay as you go"),c.a.createElement("p",null,"Active Api Key: ",r),r?c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return j(!S)}},"API"):c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return u()}},"Generate API KEY")),c.a.createElement("div",{className:"card-2 account-card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,"Profile")),c.a.createElement("p",null,"User: ",t.name),c.a.createElement("p",null,"Email: ",t.email),c.a.createElement("p",null,"Contact: ",t.phone),c.a.createElement("div",{className:"btn-flex"},c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return g(!E)}},"Reset Password"),c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(){return y(!v)}},"Reset Billing Email")))),E&&c.a.createElement(V,{resetPopup:E,toggleResetPopup:g}),v&&c.a.createElement(q,{resetEmailPopup:v,toggleResetEmailPopup:y,apiKey:r}),S&&c.a.createElement(Q,{apiPopup:S,toggleApiPopup:j,apiKey:r}))})),X=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n,c,r,l,o,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"X-Requested-With":"application/json"}},t.prev=1,c=Object(E.a)(Object(E.a)({},e),{},{userType:"2"}),t.next=5,y.a.post("".concat(j,"/auth/register"),c,n);case 5:r=t.sent,a({type:"REGISTER_SUCCESS",payload:r.data}),l=e.email,o=e.password,a(_({email:l,password:o})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0&&(s=Object.values(t.t0.response.data.message))&&s.forEach((function(e){return a(S(e,"danger"))}));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,r=e.register,l=Object(n.useState)({name:"",userType:"2",phone:"",email:"",password:""}),u=Object(p.a)(l,2),i=u[0],m=u[1],d=Object(n.useState)(!1),g=Object(p.a)(d,2),b=g[0],f=g[1],v=function(e){m(Object(E.a)(Object(E.a)({},i),{},Object(Y.a)({},e.target.name,e.target.value)))},y=i.name,h=i.phone,O=i.email,S=i.password;return t?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"auth container"},c.a.createElement("div",{className:"auth-flex"},c.a.createElement("img",{src:a(89),alt:"",className:"auth_img hide-mobile"}),c.a.createElement("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),r(i)}},c.a.createElement("h2",{className:"purple-text"},"Sign up with Barikoi"),c.a.createElement("input",{type:"text",placeholder:"Full Name",name:"name",value:y,onChange:v,required:!0}),c.a.createElement("input",{type:"text",placeholder:"Phone",name:"phone",value:h,onChange:v,required:!0}),c.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:O,onChange:v,required:!0}),c.a.createElement("input",{type:b?"text":"password",placeholder:"Password",name:"password",value:S,onChange:v,required:!0}),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",name:"show-password",id:"",onChange:function(){f(!b)}}),c.a.createElement("span",null,"Show Password"),c.a.createElement("div",{className:"button-space"},c.a.createElement("button",{className:"bkoi-btn btn-primary btn-primary-circle"},"SIGN UP")),c.a.createElement("p",null,"Already have an account?"," ",c.a.createElement(o.b,{to:"/login"},c.a.createElement("small",{className:"purple-text strong"},"LOG IN"))))))})),Z=Object(d.b)((function(e){return{}}),{requestNewPassword:function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("".concat(j,"/auth/password/reset"),{email:e});case 3:n=t.sent,a(S(n.data.message,"success")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(S(t.t0.response.data.message,"danger"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.passwordResetPopup,a=e.togglePasswordResetPopup,r=e.requestNewPassword,l=Object(n.useState)({email:""}),o=Object(p.a)(l,2),s=o[0],u=o[1];return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("form",{className:"popup card-1 verification-form",onSubmit:function(e){e.preventDefault(),console.log("clicked"),r(s.email),a(!t)}},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"Request for a new Password"),c.a.createElement(m.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("p",null,"*Please enter the email of your account for password recovery"),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",placeholder:"Your email here",name:"email",onChange:function(e){u(Object(E.a)(Object(E.a)({},s),{},Object(Y.a)({},e.target.name,e.target.value)))}})),c.a.createElement("button",{className:"btn-1"},"Send Request")))})),H=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{loginUser:_})((function(e){var t=e.isAuthenticated,r=e.loginUser,l=Object(n.useState)({email:"",password:""}),u=Object(p.a)(l,2),i=u[0],m=u[1],d=Object(n.useState)(!1),g=Object(p.a)(d,2),b=g[0],f=g[1],v=Object(n.useState)(!1),y=Object(p.a)(v,2),h=y[0],O=y[1],S=function(e){m(Object(E.a)(Object(E.a)({},i),{},Object(Y.a)({},e.target.name,e.target.value)))},j=i.email,k=i.password;return t?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"auth container"},c.a.createElement("div",{className:"auth-flex"},c.a.createElement("img",{src:a(89),alt:"",className:"auth_img hide-mobile"}),c.a.createElement("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),r(i)}},c.a.createElement("h2",{className:"purple-text"},"Sign in to Barikoi"),c.a.createElement("input",{type:"email",placeholder:"Email",name:"email",value:j,onChange:S}),c.a.createElement("input",{type:b?"text":"password",placeholder:"Password",name:"password",value:k,onChange:S}),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",name:"show-password",id:"",onChange:function(){f(!b)}}),c.a.createElement("span",null,"Show Password"),c.a.createElement("div",{className:"button-space"},c.a.createElement("button",{className:"bkoi-btn btn-primary btn-primary-circle"},"SIGN IN")),c.a.createElement("p",null,"Don't have an account yet?"," ",c.a.createElement(o.b,{to:"/register"},c.a.createElement("small",{className:"purple-text strong"},"SIGN UP"))),c.a.createElement("p",null,c.a.createElement("span",{onClick:function(){return O(!h)}},c.a.createElement("small",{className:"purple-text strong"},"Forgot Password ?"))))),h&&c.a.createElement(Z,{passwordResetPopup:h,togglePasswordResetPopup:O}))})),$=Object(d.b)((function(e){return{email:e.auth.user.data.email}}),{verifyUpgrade:function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("".concat(z,"/verify/token/").concat(e),t);case 3:c=a.sent,console.log("Verify message: ",c.data.message,t,e),"Package Upgraded."===c.data.message?(n({type:"VERIFY_UPGRADE_SUCCESS",payload:c.data}),n(M(e)),n(S(c.data.message,"success"))):(n({type:"VERIFY_UPGRADE_FAIL"}),n(S(c.data.message,"danger"))),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),n({type:"VERIFY_UPGRADE_FAIL"}),n(S(a.t0.response.data.message,"danger"));case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verificationPopup,a=e.toggleVerificationPopup,r=e.verifyUpgrade,l=e.apiKey,o=e.email,s=Object(n.useState)({access_token:""}),u=Object(p.a)(s,2),i=u[0],d=u[1];return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"modal"}),c.a.createElement("form",{className:"popup card-1 verification-form",onSubmit:function(e){e.preventDefault(),r(l,i),a(!t)}},c.a.createElement("div",{className:"popup-header"},c.a.createElement("h3",null,"Verification"),c.a.createElement(m.a,{icon:"times",size:"lg",className:"pointer",onClick:function(){return a(!t)}})),c.a.createElement("p",null,"*Insert the verification code sent to ",o),c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",placeholder:"Verification Code",name:"access_token",onChange:function(e){d(Object(E.a)(Object(E.a)({},i),{},Object(Y.a)({},e.target.name,e.target.value)))}})),c.a.createElement("button",{className:"btn-1"},"Verify")))})),ee=Object(d.b)((function(e){return{currentPackage:e.api.currentPackage}}),{requestUpgrade:function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.post("".concat(z,"/request/upgrade/plan/").concat(e,"?package_id=").concat(t));case 3:c=a.sent,console.log("Message: ",c.data.message),"Email sent to the email address"===c.data.message?(n({type:"REQUEST_UPGRADE_SUCCESS",payload:c.data}),n(S(c.data.message,"success"))):(n({type:"REQUEST_UPGRADE_FAIL"}),n(S(c.data.message,"danger"))),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),n({type:"REQUEST_UPGRADE_FAIL"}),n(S(a.t0.response.data.message,"danger"));case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},getActivePackage:M})((function(e){var t=e.id,a=e.name,r=e.base_price,l=e.additional_calls,o=e.api_calls,s=e.verificationPopup,u=e.toggleVerificationPopup,i=e.requestUpgrade,p=e.apiKey,m=e.currentPackage,d=e.getActivePackage;Object(n.useEffect)((function(){d(p)}),[p]);return c.a.createElement("div",{className:"card-2 package-card ".concat(m===a?"active-card":"")},c.a.createElement("div",{className:"card-header"},c.a.createElement("h3",null,a)),c.a.createElement("p",null,"\u09f3",r," / mo"),c.a.createElement("p",null,o," API Calls"),c.a.createElement("p",null,"Developer"===a?"2000":"No"," Daily Limit"),c.a.createElement("p",null,"Developer"===a?"Pay as you go":"StartUp"===a||"Business"===a?"Monthly Billing":"Analytics Support"),c.a.createElement("p",null,"Additional Calls \u09f3",l),m===a?"":c.a.createElement("button",{className:"btn-1 btn-left-corner",onClick:function(e){window.scrollTo(0,0),i(p,t),u(!s)}},"Activate"))})),te=Object(d.b)((function(e){return{packages:e.api.packages,loading:e.api.loading,apiKey:e.auth.apiKey}}),{getAllPackages:function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(z,"/get/all/packages"));case 3:a=e.sent,t({type:"GET_PACKAGES_SUCCESS",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"GET_PACKAGES_FAIL"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},getApiKey:A})((function(e){var t=e.apiKey,a=e.packages,r=e.loading,l=e.getAllPackages,o=e.getApiKey,s=Object(n.useState)(!1),u=Object(p.a)(s,2),i=u[0],m=u[1];return Object(n.useEffect)((function(){o(),l()}),[]),r?c.a.createElement(F,null):c.a.createElement("div",{className:"account container"},c.a.createElement("h2",null,"Packages"),c.a.createElement("div",{className:"account-cards package-cards"},a&&a.map((function(e){return c.a.createElement(ee,{key:e.id,id:e.id,name:e.name,base_price:e.base_price,additional_calls:e.limit_exceed_rate,api_calls:e.base_cap,verificationPopup:i,toggleVerificationPopup:m,apiKey:t})}))),i&&c.a.createElement($,{verificationPopup:i,toggleVerificationPopup:m,apiKey:t}))})),ae=a(99),ne=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}}))((function(e){var t=e.component,a=e.isAuthenticated,n=e.loading,r=Object(ae.a)(e,["component","isAuthenticated","loading"]);return c.a.createElement(s.b,Object.assign({},r,{render:function(e){return n?c.a.createElement(F,{loading:n}):a?c.a.createElement(t,e):c.a.createElement(s.a,{to:"/login"})}}))})),ce=function(e){return c.a.createElement(n.Fragment,null,c.a.createElement(s.d,null,c.a.createElement(ne,{exact:!0,path:"/",component:D}),c.a.createElement(ne,{exact:!0,path:"/account",component:J}),c.a.createElement(s.b,{exact:!0,path:"/register",component:X}),c.a.createElement(s.b,{exact:!0,path:"/login",component:H}),c.a.createElement(ne,{exact:!0,path:"/packages",component:te})))},re=(a(194),Object(d.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return c.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},e.msg)}))}))),le=a(30),oe=a(96),se=a(97),ue={data:localStorage.getItem("token"),isAuthenticated:!1,error:null,loading:!0,user:null,message:null,apiKey:null,apiKeyMessage:null,analytics:null},ie=a(98),pe=[],me={packages:null,currentPackage:null,loading:!0},de=Object(le.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOAD_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case"RESET_PASSWORD_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{message:t.payload.message});case"GET_KEY_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{apiKeyMessage:t.payload.message,apiKey:t.payload.current_active_key});case"GENERATE_KEY_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{apiKeyMessage:t.payload.message,apiKey:t.payload.key});case"GET_ANALYTICS_SUCESS":return Object(E.a)(Object(E.a)({},e),{},{analytics:t.payload});case"GET_KEY_FAIL":return Object(E.a)({},e);case"GET_ANALYTICS_FAIL":return Object(E.a)(Object(E.a)({},e),{},{analytics:null});case"REGISTER_SUCCESS":case"LOGIN_USER":return localStorage.setItem("token",t.payload),Object(E.a)(Object(E.a)({},e),{},{data:t.payload,isAuthenticated:!0,loading:!1});case"CLEAR_ERRORS":return Object(E.a)(Object(E.a)({},e),{},{error:null});case"LOGOUT":case"REGISTER_FAIL":case"LOGIN_FAIL":case"USER_LOAD_FAIL":return localStorage.removeItem("token"),Object(E.a)(Object(E.a)({},e),{},{data:null,isAuthenticated:!1,error:t.payload,loading:!1,user:null,message:null,apiKey:null,apiKeyMessage:null,analytics:null});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERT":return[].concat(Object(ie.a)(e),[t.payload]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==t.payload}));default:return e}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PACKAGES_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{packages:t.payload.packages,loading:!1});case"GET_PACKAGE_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{currentPackage:t.payload.user.deal_information.name,loading:!1});default:return e}}}),Ee=[se.a],ge=Object(le.createStore)(de,{},Object(oe.composeWithDevTools)(le.applyMiddleware.apply(void 0,Ee)));u.b.add(i.e,i.a,i.b,i.c,i.d);var be=function(){return Object(n.useEffect)((function(){h(localStorage.token),ge.dispatch(k())}),[]),c.a.createElement(d.a,{store:ge},c.a.createElement("div",{className:"App"},c.a.createElement(N,null),c.a.createElement(re,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{component:ce}))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(be,null))),document.getElementById("root"))},89:function(e,t,a){e.exports=a.p+"static/media/auth_init.9bcab304.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.9ff281f6.chunk.js.map