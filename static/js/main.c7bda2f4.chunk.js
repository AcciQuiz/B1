(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{127:function(e,t,i){},199:function(e,t,i){},200:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),n=i(26),s=i.n(n),d=(i(127),i(121)),r=i(13),o=i(10),f=i(1),l=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(null),s=Object(o.a)(n,2),d=s[0],r=s[1],l=Object(a.useState)(null),m=Object(o.a)(l,2),j=m[0],b=m[1],u=Object(a.useState)(null),h=Object(o.a)(u,2),x=h[0],g=h[1],O=Object(a.useState)(""),v=Object(o.a)(O,2),k=v[0],w=v[1],_=Object(a.useState)(null),N=Object(o.a)(_,2),C=N[0],y=N[1],I=Object(a.useState)(!1),T=Object(o.a)(I,2),A=T[0],E=T[1];switch(i){case"preload":return Object(f.jsx)(S,{code:k,onPreloadSuccess:function(e,t,i){c("quiz"),r(e),g(i),b(t)}});case"quiz":return Object(f.jsx)(B,{jsonConfig:d,cachedImages:x,onQuizDone:function(e){y(e),c("sender")}});case"sender":return Object(f.jsx)(U,{isDontSendEmail:A,userCode:k,quizResult:C,tokens:j});case"json-generator":return Object(f.jsx)(V,{});default:return Object(f.jsx)(p,{loginSuccess:function(e,t){e&&e.isJsonGenerator?c("json-generator"):(E(!!t),w(e),c("preload"))}})}},m=i(203),j=i(117),b=i(204),u=i(115),p=function(e){var t=e.loginSuccess,i=m.a.useForm(),a=Object(o.a)(i,1)[0],c=function(e){return e.substr(2)===function(){var e=new Date,t=e.getFullYear(),i=e.getMonth(),a=e.getDay(),c=1;switch(a){case 0:c+=29;break;case 1:c+=3;break;case 2:c+=53;break;case 3:c+=15;break;case 4:c+=22;break;case 5:c+=11;break;case 6:c+=23;break;default:c+=2}return(t*((i+13)*c)*(a+11)*((i+17)*(a+35))).toString().substr(0,3)}().toString()},n=function(){var e=a.getFieldsValue("code").code;e&&("admin-json-generator"!==(e=e&&e.trim()).toString()?"4826583654421"!==e.toString()?c(e)?t(e):j.b.error("Please, enter the valid code"):t(e,!0):t({isJsonGenerator:!0}))};return Object(f.jsxs)("div",{className:"login-block",children:[Object(f.jsx)("span",{className:"field-description",children:"Please, enter login code"}),Object(f.jsx)(m.a,{form:a,onSubmitCapture:n,children:Object(f.jsx)(m.a.Item,{name:"code",children:Object(f.jsx)(b.a,{className:"user-login"})})}),Object(f.jsx)(u.a,{className:"submit-button",onClick:n,children:"Enter"})]})},h=i(54),x=i.n(h),g=i(74),O=i(111),v=i(112),k=i(75),w=i(122),_=i(116),N=function(e){if(!e||!Array.isArray(e))return!1;var t=!0;return e.forEach((function(e){if(e.type)switch(e.type){case"question":e.options.forEach((function(e){e.id&&e.text||(t=!1)}));break;case"image":case"image_quad":e.options.forEach((function(e){e.id&&e.link||(t=!1)}))}else t=!1})),t},C=function(e){var t=[];return e.forEach((function(e){var i=e.options,a=e.type,c=e.pauseImageLink,n=e.titleImage;c&&t.push(c),n&&t.push(n),"images"===a&&i.forEach((function(e){var i=e.link;i&&t.push(i)}))})),t.filter((function(e,t,i){return i.indexOf(e)===t}))},S=function(e){Object(w.a)(i,e);var t=Object(_.a)(i);function i(){var e;return Object(O.a)(this,i),(e=t.call(this)).preloadData=Object(g.a)(x.a.mark((function t(){var i,a,c,n,s,d;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Object(k.a)(e),t.next=3,fetch("https://raw.githubusercontent.com/AcciQuiz/config/main/config_B1/config.json");case 3:return a=t.sent,t.next=6,a.json();case 6:if(c=t.sent,n=c.config,s=c.tokens,N(n)){t.next=11;break}return j.b.error("Json configuration validation error"),t.abrupt("return");case 11:d=C(n),i.setState({imagesLinks:d,jsonConfiguration:n,tokens:s}),d.forEach((function(e){var t=new Image;t.onload=function(){var e=i.state.preloadedImages;e.push(t),i.setState({preloadedImages:e})},t.onerror=function(e){var a=i.state.preloadedImages;a.push(e.target),i.setState({preloadedImages:a});var c=e.target.attributes.src.value;c?j.b.error("Error on load image: ".concat(c)):j.b.error("Error on load one of images"),a.push(t),i.setState({preloadedImages:a})},t.src=e}));case 14:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.preloadData()},e.componentDidUpdate=function(){var t=e.state,i=t.preloadedImages,a=t.imagesLinks,c=t.jsonConfiguration,n=t.tokens,s=e.props.onPreloadSuccess;(null===i||void 0===i?void 0:i.length)!==(null===a||void 0===a?void 0:a.length)||s(c,n,i)},e.state={jsonConfiguration:null,imagesLinks:null,preloadedImages:[],tokens:{}},e}return Object(v.a)(i,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"login-block",children:"Please, wait for loading data... This may take some time..."})}}]),i}(c.a.Component),y=i(8),I=i(40),T=i(202),A=i(206),E=b.a.TextArea,q=function(e){var t=e.data,i=e.onQuestionDone,c=e.isPreviewMode,n=t.title,s=t.titleImage,d=t.options,r=t.timer,l=t.pauseImageLink,m=t.pauseTimer,j=t.isHiddenTimer,b=t.ignoreAnswer,u=t.selectedElementColor,p=void 0===u?"white":u,h=t.oldStyle,x=void 0!==h&&h,g=Object(a.useState)(null),O=Object(o.a)(g,2),v=O[0],k=O[1],w=Object(a.useState)(!1),_=Object(o.a)(w,2),N=_[0],C=_[1],S=Object(a.useState)(!1),A=Object(o.a)(S,2),E=A[0],q=A[1],D=d&&d.map((function(e){var t=e.id,i=e.link,a={};return v===t&&(a.border="3px solid ".concat(p)),Object(f.jsx)("div",{style:Object(y.a)({},a),className:"question-image ".concat(x?"old-style":""),onClick:function(){k(t)},children:i&&Object(f.jsx)(T.a,{src:i,preview:!1})},t)})),L=function(){if(c||b)return i({skip:!0});var e=JSON.parse(JSON.stringify(v));k(null),i(e)},P=function(){if(!m)return L();C(!0),M(1e3*m)},H=Object(I.a)(0,1e3),Q=Object(o.a)(H,2),J=Q[0],M=Q[1].start;return Object(a.useEffect)((function(){if(0===J){if(E)return q(!1),void P();if(N)return C(!1),void L()}}),[J]),Object(a.useEffect)((function(){if(!c){if(!r)return i({skip:!0});C(!1),k(null),M(1e3*r),q(!0)}}),[t]),Object(f.jsxs)("div",{className:"flashes",children:[!N&&Object(f.jsxs)("div",{className:"images-component",children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"images-title center-content",children:n&&n.replace("<br/>","\n")})}),j||Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"timer center-content",children:c?r:J/1e3})}),s&&Object(f.jsx)("div",{className:"center-content",children:Object(f.jsx)(T.a,{className:"title-image",src:s,preview:!1})}),Object(f.jsx)("div",{className:"images-list",children:D})]}),N&&Object(f.jsx)(G,{pauseImageLink:l})]})},D=function(e){var t=e.data,i=e.setData,c=t.title,n=t.titleImage,s=t.options,d=void 0===s?[]:s,r=t.timer,l=t.pauseImageLink,m=t.pauseTimer,j=t.isHiddenTimer,p=t.ignoreAnswer,h=Object(a.useState)(null),x=Object(o.a)(h,2),g=x[0],O=x[1],v=Object(a.useState)(""),k=Object(o.a)(v,2),w=k[0],_=k[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Question message: "}),Object(f.jsx)(E,{autoSize:{minRows:3,maxRows:3},value:c,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{title:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Question message time (in seconds): "}),Object(f.jsx)(b.a,{type:"number",min:"0",value:r,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{timer:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Question image link: "}),Object(f.jsx)(b.a,{value:n,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{titleImage:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Is timer should be hidden: "}),Object(f.jsx)(A.a,{checked:j,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{isHiddenTimer:e.target.checked}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Pause after question time (in seconds): "}),Object(f.jsx)(b.a,{type:"number",min:"0",value:m,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{pauseTimer:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Image reference that shows after question: "}),Object(f.jsx)(b.a,{value:l,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{pauseImageLink:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Is question should be ingored and don't recorded: "}),Object(f.jsx)(A.a,{checked:p,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{ignoreAnswer:e.target.checked}))}})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Create images"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Answer id:"}),Object(f.jsx)(b.a,{value:g,onChange:function(e){O(e.target.value)}})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Answer image link: "}),Object(f.jsx)(b.a,{value:w,onChange:function(e){_(e.target.value)}})]}),Object(f.jsxs)("div",{className:"\u0441omponent-buttons",children:[Object(f.jsx)(u.a,{onClick:function(){Array.isArray(d)&&(d.push({id:g,link:w}),i(Object(y.a)(Object(y.a)({},t),{},{options:d})),O(null),_(""))},children:"Add image answer"}),Object(f.jsx)(u.a,{onClick:function(){i(Object(y.a)(Object(y.a)({},t),{},{options:[]}))},children:"Reset images"})]})]})]})]})},L=function(e){var t=e.data,i=e.onQuestionDone,c=e.isPreviewMode,n=t.title,s=t.titleImage,d=t.options,r=t.timer,l=t.pauseImageLink,m=t.pauseTimer,j=t.isHiddenTimer,b=t.ignoreAnswer,u=t.selectedElementColor,p=void 0===u?"white":u,h=Object(a.useState)(null),x=Object(o.a)(h,2),g=x[0],O=x[1],v=Object(a.useState)(!1),k=Object(o.a)(v,2),w=k[0],_=k[1],N=Object(a.useState)(!1),C=Object(o.a)(N,2),S=C[0],A=C[1],E=d&&d.map((function(e){var t=e.id,i=e.link,a={};return g===t&&(a.border="3px solid ".concat(p)),Object(f.jsx)("div",{style:Object(y.a)({},a),className:"question-image",onClick:function(){O(t)},children:i&&Object(f.jsx)(T.a,{src:i,preview:!1})},t)})),q=function(){if(c||b)return i({skip:!0});var e=JSON.parse(JSON.stringify(g));O(null),i(e)},D=function(){if(!m)return q();_(!0),Q(1e3*m)},L=Object(I.a)(0,1e3),P=Object(o.a)(L,2),H=P[0],Q=P[1].start;return Object(a.useEffect)((function(){if(0===H){if(S)return A(!1),void D();if(w)return _(!1),void q()}}),[H]),Object(a.useEffect)((function(){if(!c){if(!r)return i({skip:!0});_(!1),O(null),Q(1e3*r),A(!0)}}),[t]),Object(f.jsxs)("div",{className:"flashes",children:[!w&&Object(f.jsxs)("div",{className:"images-quad-component",children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"images-title center-content",children:n&&n.replace("<br/>","\n")})}),j||Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"timer center-content",children:c?r:H/1e3})}),s&&Object(f.jsx)("div",{className:"center-content",children:Object(f.jsx)(T.a,{className:"title-image",src:s,preview:!1})}),Object(f.jsx)("div",{className:"images-quad-list",children:E})]}),w&&Object(f.jsx)(G,{pauseImageLink:l})]})},P=i(205),H=i(207),Q=b.a.TextArea,J=function(e){var t=e.data,i=e.onQuestionDone,c=e.isPreviewMode,n=t.title,s=t.titleImage,d=t.options,r=t.timer,l=t.pauseImageLink,m=t.pauseTimer,j=t.isHiddenTimer,b=t.ignoreAnswer,u=Object(a.useState)(null),p=Object(o.a)(u,2),h=p[0],x=p[1],g=Object(a.useState)(!1),O=Object(o.a)(g,2),v=O[0],k=O[1],w=Object(a.useState)(!1),_=Object(o.a)(w,2),N=_[0],C=_[1],S=d&&d.map((function(e){var t=e.id,i=e.text;return Object(f.jsx)(P.a,{value:t,children:i},t+i)})),y=function(){if(c||b)return i({skip:!0});var e=JSON.parse(JSON.stringify(h));x(null),i(e)},A=function(){if(!m)return y();k(!0),L(1e3*m)},E=Object(I.a)(0,1e3),q=Object(o.a)(E,2),D=q[0],L=q[1].start;return Object(a.useEffect)((function(){if(0===D){if(N)return C(!1),void A();if(v)return k(!1),void y()}}),[D]),Object(a.useEffect)((function(){if(!c){if(!r)return i({skip:!0});k(!1),L(1e3*r),C(!0)}}),[t]),Object(f.jsxs)("div",{className:"flashes",children:[!v&&Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"question-title center-content",children:n&&n.replace("<br/>","\n")}),j||Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"timer center-content",children:c?r:D/1e3})}),s&&Object(f.jsx)("div",{className:"center-content",children:Object(f.jsx)(T.a,{className:"title-image",src:s,preview:!1})}),Object(f.jsx)("div",{className:"questions-list",children:Object(f.jsx)(P.a.Group,{onChange:function(e){x(e.target.value)},value:h,children:Object(f.jsx)(H.b,{direction:"vertical",children:S})})})]}),v&&Object(f.jsx)(G,{pauseImageLink:l})]})},M=function(e){var t=e.data,i=e.setData,c=t.title,n=t.titleImage,s=t.options,d=void 0===s?[]:s,r=t.timer,l=t.pauseImageLink,m=t.pauseTimer,j=t.isHiddenTimer,p=t.ignoreAnswer,h=Object(a.useState)(null),x=Object(o.a)(h,2),g=x[0],O=x[1],v=Object(a.useState)(null),k=Object(o.a)(v,2),w=k[0],_=k[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Question message: "}),Object(f.jsx)(Q,{autoSize:{minRows:3,maxRows:3},value:c,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{title:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Question message time (in seconds): "}),Object(f.jsx)(b.a,{type:"number",min:"0",value:r,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{timer:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Question image link: "}),Object(f.jsx)(b.a,{value:n,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{titleImage:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Is timer should be hidden: "}),Object(f.jsx)(A.a,{checked:j,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{isHiddenTimer:e.target.checked}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Pause after question time (in seconds): "}),Object(f.jsx)(b.a,{type:"number",min:"0",value:m,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{pauseTimer:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Image reference that shows after question: "}),Object(f.jsx)(b.a,{value:l,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{pauseImageLink:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Is question should be ingored and don't recorded: "}),Object(f.jsx)(A.a,{checked:p,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{ignoreAnswer:e.target.checked}))}})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Create answers"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Answer id:"}),Object(f.jsx)(b.a,{value:g,onChange:function(e){O(e.target.value)}})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"Answer text: "}),Object(f.jsx)(b.a,{value:w,onChange:function(e){_(e.target.value)}})]}),Object(f.jsxs)("div",{className:"\u0441omponent-buttons",children:[Object(f.jsx)(u.a,{onClick:function(){Array.isArray(d)&&(d.push({id:g,text:w}),i(Object(y.a)(Object(y.a)({},t),{},{options:d})),O(null),_(null))},children:"Add answer"}),Object(f.jsx)(u.a,{onClick:function(){i(Object(y.a)(Object(y.a)({},t),{},{options:[]}))},children:"Reset answers"})]})]})]})]})},R=b.a.TextArea,F=function(e){var t=e.data,i=e.onQuestionDone,c=e.isPreviewMode,n=t.title,s=t.titleImage,d=t.timer,r=t.pauseImageLink,l=t.pauseTimer,m=t.isHiddenTimer,j=Object(a.useState)(!1),b=Object(o.a)(j,2),u=b[0],p=b[1],h=Object(a.useState)(!1),x=Object(o.a)(h,2),g=x[0],O=x[1],v=function(){i({skip:!0})},k=function(){if(!l)return v();p(!0),C(1e3*l)},w=Object(I.a)(0,1e3),_=Object(o.a)(w,2),N=_[0],C=_[1].start;return Object(a.useEffect)((function(){if(0===N){if(g)return O(!1),void k();if(u)return p(!1),void v()}}),[N]),Object(a.useEffect)((function(){if(!c){if(!d)return i({skip:!0});p(!1),C(1e3*d),O(!0)}}),[t]),Object(f.jsxs)("div",{className:"flashes",children:[!u&&Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"message-title center-content",children:n&&n.replace("<br/>","\n")})}),m||Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"timer center-content",children:c?d:N/1e3})}),s&&Object(f.jsx)("div",{className:"center-content",children:Object(f.jsx)(T.a,{className:"title-image",src:s,preview:!1})})]}),u&&Object(f.jsx)(G,{pauseImageLink:r})]})},z=function(e){var t=e.data,i=e.setData,a=t.title,c=t.titleImage,n=t.timer,s=t.pauseImageLink,d=t.pauseTimer,r=t.isHiddenTimer;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Message: "}),Object(f.jsx)(R,{autoSize:{minRows:3,maxRows:3},value:a,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{title:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Message time (in seconds): "}),Object(f.jsx)(b.a,{type:"number",min:"0",value:n,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{timer:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Message image link: "}),Object(f.jsx)(b.a,{value:c,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{titleImage:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Is timer should be hidden: "}),Object(f.jsx)(A.a,{checked:r,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{isHiddenTimer:e.target.checked}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Pause after message time (in seconds): "}),Object(f.jsx)(b.a,{type:"number",min:"0",value:d,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{pauseTimer:e.target.value}))}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:"Image reference that shows after message: "}),Object(f.jsx)(b.a,{value:s,onChange:function(e){i(Object(y.a)(Object(y.a)({},t),{},{pauseImageLink:e.target.value}))}})]})]})},G=function(e){var t=e.pauseImageLink;return Object(f.jsx)(T.a,{style:{width:"auto",height:"100vh",overflowY:"hidden"},preview:!1,src:t})},B=function(e){var t=e.jsonConfig,i=e.onQuizDone,c=Object(a.useState)(0),n=Object(o.a)(c,2),s=n[0],d=n[1],r=Object(a.useState)([]),l=Object(o.a)(r,2),m=l[0],j=l[1],b=function(e){null===e?(m.push("-"),j(m)):e&&!e.skip&&(m.push(e),j(m)),s+1>=t.length&&i(m),d(s+1)};Object(a.useEffect)((function(){d(0)}),[t]);var u=t[s];switch(u&&u.type){case"question":return Object(f.jsx)(J,{data:u,onQuestionDone:b});case"images":return Object(f.jsx)(q,{data:u,onQuestionDone:b});case"images_quad":return Object(f.jsx)(L,{data:u,onQuestionDone:b});case"message":return Object(f.jsx)(F,{data:u,onQuestionDone:b});default:return Object(f.jsx)("span",{children:"Error"})}},U=function(e){var t=e.tokens,i=e.userCode,c=e.quizResult,n=e.isDontSendEmail,s=Object(a.useState)(!1),d=Object(o.a)(s,2),r=d[0],l=d[1],m=Object(a.useState)(null),b=Object(o.a)(m,2),u=b[0],p=b[1],h=function(){var e=Object(g.a)(x.a.mark((function e(a,c,n){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),(s=Object(y.a)({},t)).service_id&&s.template_id&&s.user_id&&(s.template_params={user_letter:n,user_number:c,from_name:i,message:a}),e.prev=3,e.next=6,fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)});case 6:400===e.sent.status&&j.b.error("Sorry, an error has occured while sending the results"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),j.b.error("Sorry, an error has occured while sending the results");case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t,i,a){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=c.length&&c.shift(),t=c.length&&c.shift(),i=c.map((function(e,t){return"Question ".concat(t+1,": \n").concat(e)})).join("; \n"),a="User answers: ".concat(i);p(a),n?l(!1):h(a,e,t)}),[i,c,n]),Object(f.jsxs)("div",{className:"sender",children:[r&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"center-content",children:" Please, wait do not close the tab"})}),!r&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"center-content",children:"Thank you!"})}),n&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"sender-answers center-content",children:u&&u.replace("<br/>","\n")})})]})},Y=[{title:"Registration. Please select one of the numbers from the list below in the screen that relates to your birthday. (Numbers from 1 to 31)",type:"question",timer:10,pauseTimer:0,options:[{id:"1",text:"1"},{id:"2",text:"2"},{id:"3",text:"3"},{id:"4",text:"4"},{id:"5",text:"5"},{id:"6",text:"6"},{id:"7",text:"7"},{id:"8",text:"8"},{id:"9",text:"9"},{id:"10",text:"10"},{id:"11",text:"11"},{id:"12",text:"12"},{id:"13",text:"13"},{id:"14",text:"14"},{id:"15",text:"15"},{id:"16",text:"16"},{id:"17",text:"17"},{id:"18",text:"18"},{id:"19",text:"19"},{id:"20",text:"20"},{id:"21",text:"21"},{id:"22",text:"22"},{id:"23",text:"23"},{id:"24",text:"24"},{id:"25",text:"25"},{id:"26",text:"26"},{id:"27",text:"27"},{id:"28",text:"28"},{id:"29",text:"29"},{id:"30",text:"30"},{id:"31",text:"31"}]},{title:"Registration. Please choose one letter from the list below which relates to your name.",type:"question",timer:10,pauseTimer:0,options:[{id:"A",text:"A"},{id:"B",text:"B"},{id:"C",text:"C"},{id:"D",text:"D"},{id:"E",text:"E"},{id:"F",text:"F"},{id:"G",text:"G"},{id:"H",text:"H"},{id:"I",text:"I"},{id:"J",text:"J"},{id:"K",text:"K"},{id:"L",text:"L"},{id:"M",text:"M"},{id:"N",text:"N"},{id:"O",text:"O"},{id:"P",text:"P"},{id:"Q",text:"Q"},{id:"R",text:"R"},{id:"S",text:"S"},{id:"T",text:"T"},{id:"U",text:"U"},{id:"V",text:"V"},{id:"W",text:"W"},{id:"X",text:"X"},{id:"Y",text:"Y"},{id:"Z",text:"Z"}]},{title:"The AGATA academic curriculum for Language Beginners. This educational method is based on scientific observations and academic research!",type:"message",isHiddenTimer:!0,timer:15},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_effc81ce893d45d98d58a3cec02aff39~mv2.png"}]},{title:"Counting from 1 to 10 balls",type:"images",timer:5,isHiddenTimer:!0,ignoreAnswer:!0,options:[{id:"1",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"2",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"3",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"4",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"5",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"6",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"7",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"8",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"9",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"},{id:"10",link:"https://static.wixstatic.com/media/7d30dc_34f3af13ae0b4944995ab95dff4b2656~mv2.png"}]}],V=function(){var e=Object(a.useState)(Y),t=Object(o.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(0),s=Object(o.a)(n,2),d=s[0],r=s[1],l=Object(a.useState)(null),m=Object(o.a)(l,2),j=m[0],p=m[1],h=Object(a.useState)(null),x=Object(o.a)(h,2),g=x[0],O=x[1],v=Object(a.useState)(null),k=Object(o.a)(v,2),w=k[0],_=k[1],N=Object(a.useState)(null),C=Object(o.a)(N,2),S=C[0],I=C[1],T=Object(a.useState)({}),A=Object(o.a)(T,2),E=A[0],L=A[1];var H=null,Q=null;switch(S){case"message":H=Object(f.jsx)(F,{data:E,isPreviewMode:!0}),Q=Object(f.jsx)(z,{data:E,setData:L});break;case"question":H=Object(f.jsx)(J,{data:E,isPreviewMode:!0}),Q=Object(f.jsx)(M,{data:E,setData:L});break;case"images":H=Object(f.jsx)(q,{data:E,isPreviewMode:!0}),Q=Object(f.jsx)(D,{data:E,setData:L})}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("style",{children:"\n\t\t\t\tbody {\n\t\t\t\t\tanimation: disabled 1.5s linear 1.5s infinite;\n\t\t\t\t}\n\t\t\t"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"JSON Configuration Generator"}),Object(f.jsxs)("div",{className:"json-generator-wrapper",children:[Object(f.jsxs)("div",{className:"component_wrapper",children:[Object(f.jsxs)("div",{className:"component",children:[Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:'Enter "service_id"'}),Object(f.jsx)(b.a,{value:j,onChange:function(e){p(e.target.value)}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:'Enter "template_id"'}),Object(f.jsx)(b.a,{value:g,onChange:function(e){O(e.target.value)}})]}),Object(f.jsxs)("div",{className:"json-generator-item-field",children:[Object(f.jsx)("span",{children:'Enter "user_id"'}),Object(f.jsx)(b.a,{value:w,onChange:function(e){_(e.target.value)}})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("div",{children:Object(f.jsxs)("span",{children:["Component ",d+1]})}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{children:"Please, choose component type"})}),Object(f.jsx)(P.a.Group,{onChange:function(e){!function(e){I(e.target.value),L({})}(e)},value:S,children:Object(f.jsxs)("div",{children:[Object(f.jsx)(P.a,{value:"message",children:"Message"},"message"),Object(f.jsx)(P.a,{value:"question",children:"Question"},"question"),Object(f.jsx)(P.a,{value:"images",children:"Images"},"images")]})}),Object(f.jsxs)("div",{className:"\u0441omponent-buttons",children:[Object(f.jsx)(u.a,{onClick:function(){r(d+1),i.push(Object(y.a)(Object(y.a)({},E),{},{type:S})),c(i),L({})},children:"Add component"}),Object(f.jsx)(u.a,{onClick:function(){!function(e,t){var i="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),a=document.createElement("a");a.setAttribute("href",i),a.setAttribute("download",t+".json"),document.body.appendChild(a),a.click(),a.remove()}({tokens:{service_id:j,template_id:g,user_id:w},config:i},"config")},children:"Save json configuration"})]})]}),Object(f.jsx)("div",{className:"component-type",children:Q})]}),Object(f.jsx)("div",{className:"preview-component",children:H})]})]})]})},K=function(){return Object(f.jsx)(d.a,{children:Object(f.jsxs)(r.c,{children:[Object(f.jsx)(r.a,{exact:!0,path:"/json-configuration-generator-page",element:Object(f.jsx)(V,{})}),Object(f.jsx)(r.a,{path:"/",element:Object(f.jsx)(l,{})}),Object(f.jsx)(r.a,{path:"*",element:Object(f.jsx)(l,{})})]})})};i(198),i(199);var W=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{children:Object(f.jsx)(K,{})})})},X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,208)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),c(e),n(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(W,{})}),document.getElementById("root")),X()}},[[200,1,2]]]);
//# sourceMappingURL=main.c7bda2f4.chunk.js.map