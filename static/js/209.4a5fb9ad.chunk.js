"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[209],{3171:function(n,e,t){var r=t(4377),i=t(184);e.Z=function(n){var e=n.children;return(0,i.jsx)(r.im,{children:e})}},6984:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.title,t=n.description;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:t})]})}},7234:function(n,e,t){t.d(e,{G:function(){return s}});var r=t(1413),i=t(9439),a=t(2791),s=function(n,e){var t=(0,a.useState)(n),s=(0,i.Z)(t,2),o=s[0],l=s[1],c=(0,a.useState)(!1),u=(0,i.Z)(c,2),h=u[0],d=u[1],m=function(n,e){var t=(0,a.useState)(!0),r=(0,i.Z)(t,2),s=r[0],o=r[1],l=(0,a.useState)(""),c=(0,i.Z)(l,2),u=c[0],h=c[1],d=(0,a.useState)(!1),m=(0,i.Z)(d,2),p=m[0],g=m[1],f=(0,a.useState)(""),x=(0,i.Z)(f,2),j=x[0],y=x[1],v=(0,a.useState)(!1),E=(0,i.Z)(v,2),b=E[0],L=E[1],w=(0,a.useState)(""),Z=(0,i.Z)(w,2),k=Z[0],S=Z[1],C=(0,a.useState)(!1),D=(0,i.Z)(C,2),B=D[0],F=D[1];return(0,a.useEffect)((function(){for(var t in e)switch(t){case"minLength":n.length<e[t]?(g(!0),y("The password length should be between ".concat(e.minLength," and ").concat(e.maxLength," characters long"))):(g(!1),y(""));break;case"maxLength":n.length>e[t]?(L(!0),S("Password length must not exceed ".concat(e.maxLength," characters."))):(L(!1),S(""));break;case"isEmpty":n?(o(!1),h("")):(o(!0),h("Temptyhe field cannot be"));break;default:return}}),[n,e]),(0,a.useEffect)((function(){F(!(s||p||b))}),[s,p,b]),{isEmpty:s,isEmptyError:u,minLength:p,minLengthError:j,maxLength:b,maxLengthError:k,inValid:B}}(o,e);return(0,r.Z)({value:o,onChange:function(n){l(n.target.value)},onBlur:function(n){d(!0)},isDirty:h},m)}},9209:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(4420),i=t(7689),a=t(3356),s=t(3171),o=t(4377),l=t(6984),c=t(7234),u=t(184),h=function(n){var e=n.register,t=(0,c.G)("",{isEmpty:!0,minLength:3,isEmail:!0}),r=(0,c.G)("",{isEmpty:!0,minLength:7,maxLength:12}),i=(0,c.G)("",{isEmpty:!0});return(0,u.jsxs)(o.Yb,{onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget),r={};t.forEach((function(n,e){r[e]=n})),console.log("formData",r),e(r)},children:[(0,u.jsx)("h1",{children:"Create Account"}),(0,u.jsxs)("div",{children:[i.value.length>0&&(0,u.jsx)("label",{htmlFor:"name",children:"Name"}),(0,u.jsx)("input",{onChange:function(n){return i.onChange(n)},onBlur:function(n){return i.onBlur(n)},value:i.value,type:"text",name:"name",placeholder:"Enter your name...",id:"name",required:!0}),i.isDirty&&i.isEmpty&&(0,u.jsx)("span",{children:i.isEmptyError})]}),(0,u.jsxs)("div",{children:[t.value.length>0&&(0,u.jsx)("label",{htmlFor:"email",children:"Email"}),(0,u.jsx)("input",{onChange:function(n){return t.onChange(n)},onBlur:function(n){return t.onBlur(n)},value:t.value,type:"email",name:"email",placeholder:"Enter your email...",id:"email",required:!0}),t.isDirty&&t.isEmpty&&(0,u.jsx)("span",{children:t.isEmptyError}),t.isDirty&&t.minLength&&(0,u.jsx)("span",{children:"Field length at least 3 characters"})]}),(0,u.jsxs)("div",{children:[r.value.length>0&&(0,u.jsx)("label",{htmlFor:"password",children:"Password"}),(0,u.jsx)("input",{onChange:function(n){return r.onChange(n)},onBlur:function(n){return r.onBlur(n)},value:r.value,type:"password",name:"password",placeholder:"Enter your password...",id:"password",required:!0}),r.isDirty&&r.isEmpty&&(0,u.jsx)("span",{children:r.isEmptyError}),r.isDirty&&r.minLength&&(0,u.jsx)("span",{children:r.minLengthError}),r.isDirty&&r.maxLength&&(0,u.jsx)("span",{children:r.maxLengthError})]}),(0,u.jsx)(o.zx,{disabled:!t.inValid||!r.inValid||!i.inValid,type:"submit",children:"Sign Up"})]})},d=function(){var n=(0,i.s0)(),e=(0,r.I0)();return(0,u.jsx)(o.TR,{children:(0,u.jsx)(s.Z,{children:(0,u.jsxs)(o.Eq,{children:[(0,u.jsxs)(o.n5,{style:o.vJ,children:[(0,u.jsx)(l.Z,{title:"Welcome Back!",description:"To keep connected with us please login with your personal info"}),(0,u.jsx)(o.zx,{onClick:function(){return n("/login")},children:"Sign In"})]}),(0,u.jsx)(o.n5,{children:(0,u.jsx)(h,{register:function(t){e((0,a.zv)(t)).unwrap().then((function(e){console.log("payload",e),n("/contacts")})).catch((function(n){return console.error("rejected",n)}))}})})]})})})}}}]);
//# sourceMappingURL=209.4a5fb9ad.chunk.js.map