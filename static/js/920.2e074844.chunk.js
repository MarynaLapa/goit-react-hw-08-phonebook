"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[920],{3171:function(n,e,t){var r=t(9068),i=t(184);e.Z=function(n){var e=n.children;return(0,i.jsx)(r.im,{children:e})}},6984:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.title,t=n.description;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:t})]})}},7234:function(n,e,t){t.d(e,{G:function(){return s}});var r=t(1413),i=t(9439),a=t(2791),s=function(n,e){var t=(0,a.useState)(n),s=(0,i.Z)(t,2),o=s[0],l=s[1],c=(0,a.useState)(!1),u=(0,i.Z)(c,2),d=u[0],h=u[1],p=function(n,e){var t=(0,a.useState)(!0),r=(0,i.Z)(t,2),s=r[0],o=r[1],l=(0,a.useState)(""),c=(0,i.Z)(l,2),u=c[0],d=c[1],h=(0,a.useState)(!1),p=(0,i.Z)(h,2),f=p[0],g=p[1],x=(0,a.useState)(""),m=(0,i.Z)(x,2),y=m[0],b=m[1],v=(0,a.useState)(!1),Z=(0,i.Z)(v,2),j=Z[0],E=Z[1],w=(0,a.useState)(""),L=(0,i.Z)(w,2),k=L[0],z=L[1],S=(0,a.useState)(!1),P=(0,i.Z)(S,2),C=P[0],D=P[1];return(0,a.useEffect)((function(){for(var t in e)switch(t){case"minLength":n.length<e[t]?(g(!0),b("The password length should be between ".concat(e.minLength," and ").concat(e.maxLength," characters long"))):(g(!1),b(""));break;case"maxLength":n.length>e[t]?(E(!0),z("Password length must not exceed ".concat(e.maxLength," characters."))):(E(!1),z(""));break;case"isEmpty":n?(o(!1),d("")):(o(!0),d("Temptyhe field cannot be"));break;default:return}}),[n,e]),(0,a.useEffect)((function(){D(!(s||f||j))}),[s,f,j]),{isEmpty:s,isEmptyError:u,minLength:f,minLengthError:y,maxLength:j,maxLengthError:k,inValid:C}}(o,e);return(0,r.Z)({value:o,onChange:function(n){l(n.target.value)},onBlur:function(n){h(!0)},isDirty:d},p)}},9068:function(n,e,t){t.d(e,{W2:function(){return p},aV:function(){return d},fv:function(){return h},im:function(){return u},tN:function(){return f}});var r,i,a,s,o,l=t(168),c=t(2978),u=c.ZP.div(r||(r=(0,l.Z)(["\n    padding: 0 32px;\n    width: 1460px;\n    margin: 0 auto;\n"]))),d=c.ZP.ul(i||(i=(0,l.Z)(["\n    position: relative;\n    display: table-cell;\n    font-size: 24px;\n    text-transform: capitalize;\n    list-style: none;\n    span::before {\n        content: '';\n        margin-right: 8px;\n        display: inline-block;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background-color: #6f6ffa;\n\n    }\n    li:not(:last-child) {\n        padding-bottom: 8px; \n    }\n    span {\n        vertical-align: middle;\n        padding-right: 12px;\n    } \n"]))),h=c.ZP.div(a||(a=(0,l.Z)(["\n    display: flex;\n    width: 320px;\n    flex-direction: column;\n    align-items: flex-start;\n    text-transform: capitalize;\n    gap: 4px;\n    input {\n        width: 100%;\n        margin-bottom: 8px;\n        border-radius: 4px;\n        border: 1px solid #dbdbeb;\n        outline: none;\n        font-size: 16px;\n        text-transform: capitalize;\n        background-color: white;;\n        padding: 12px 15px;\n        margin: 8px 0;\n        width: 100%;\n        border-radius: 4px;\n    }\n    label {\n        font-style: italic;\n    }\n"]))),p=c.ZP.div(s||(s=(0,l.Z)(["\n    margin: 20px;\n"]))),f=c.ZP.form(o||(o=(0,l.Z)(["\n    text-align: center;\n    /* background: #fff; */\n    display: flex;\n    flex-direction: column;\n    padding: 0 50px;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background: rgba(0, 0, 0, 0);\n"])))},4920:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(3171),i=t(9989),a=t(7234),s=t(184),o=function(n){var e=n.login,t=(0,a.G)("",{isEmpty:!0,minLength:3,isEmail:!0}),r=(0,a.G)("",{isEmpty:!0,minLength:7,maxLength:12});return(0,s.jsxs)(i.Yb,{onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget),r={};t.forEach((function(n,e){r[e]=n})),e(r)},children:[(0,s.jsx)("h1",{children:"Sign in"}),(0,s.jsxs)("div",{children:[t.value.length>0&&(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{onChange:function(n){return t.onChange(n)},onBlur:function(n){return t.onBlur(n)},value:t.value,type:"email",name:"email",placeholder:"Enter your email...",id:"email",pattern:"^[A-Za-z0-9][A-Za-z0-9\\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\\.)+[A-Za-z]*$",title:"Please enter a valid email address"}),t.isDirty&&t.isEmpty&&(0,s.jsx)("span",{children:t.isEmptyError}),t.isDirty&&t.minLength&&(0,s.jsx)("span",{children:"Field length at least 3 characters"})]}),(0,s.jsxs)("div",{children:[r.value.length>0&&(0,s.jsx)("label",{htmlFor:"password",children:"Password"}),(0,s.jsx)("input",{onChange:function(n){return r.onChange(n)},onBlur:function(n){return r.onBlur(n)},value:r.value,type:"current-password",name:"password",placeholder:"Enter your password...",id:"password"}),r.isDirty&&r.isEmpty&&(0,s.jsx)("span",{children:r.isEmptyError}),r.isDirty&&r.minLength&&(0,s.jsx)("span",{children:r.minLengthError}),r.isDirty&&r.maxLength&&(0,s.jsx)("span",{children:r.maxLengthError})]}),(0,s.jsx)(i.zx,{disabled:!t.inValid||!r.inValid,type:"submit",children:"Log In"})]})},l=t(4420),c=t(6106),u=t(6984),d=t(7689),h=t(7694),p=function(){var n=(0,d.s0)(),e=(0,l.I0)();return(0,s.jsx)(i.TR,{children:(0,s.jsx)(r.Z,{children:(0,s.jsxs)(i.Eq,{children:[(0,s.jsx)(i.n5,{children:(0,s.jsx)(o,{login:function(t){e((0,c.Fv)(t)).unwrap().then((function(e){n("/contacts"),h.Notify.success("Welcome, ".concat(e.user.name,"!"))})).catch((function(n){h.Notify.failure("Error while logging in. Please check your entered data and try again")}))}})}),(0,s.jsxs)(i.n5,{style:i.vJ,children:[(0,s.jsx)(u.Z,{title:"Hello, Friend!",description:"Enter your personal details and start journey with us"}),(0,s.jsx)(i.zx,{onClick:function(){return n("/register")},children:"Sing Up"})]})]})})})}}}]);
//# sourceMappingURL=920.2e074844.chunk.js.map