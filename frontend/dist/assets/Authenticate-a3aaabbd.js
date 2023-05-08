import{b as g,r as x,A as N,u as y,j as e}from"./index-51ebfd81.js";import{T as l,C as k,B as L}from"./Toast-06b61f37.js";import{X as S,L as n}from"./svgs-c2513cb0.js";const w=()=>{const[o,m]=g(),[i,r]=x.useState(""),{setAuthState:h}=x.useContext(N),p=y();return e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:s=>{var c,u;s.preventDefault();let j=(c=s.currentTarget.elements.email)==null?void 0:c.value,d=(u=s.currentTarget.elements.password)==null?void 0:u.value;console.log("Login submit"),fetch("http://localhost:5000/login",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:j,password:d})}).then(t=>{if(t.status===500){r("Server error");return}else if(t.status===406){r("Wrong password");return}else if(t.status===404){r("Email doesnt exist. Please register");return}return t.json()}).then(t=>{t&&t.user&&t.user._id&&(console.log(t),h(t.user),p("/"))})},children:[e.jsx("h1",{className:"font-bold mx-auto text-xl",children:"Login"}),i.length>0&&e.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[e.jsx("span",{children:i}),e.jsx("button",{onClick:s=>{s.preventDefault(),r("")},children:e.jsx(S,{})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(n,{htmlFor:"email1",value:"Your email"})}),e.jsx(l,{id:"email1",type:"email",name:"email",minLength:3,maxLength:20,placeholder:"name@flowbite.com",required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(n,{htmlFor:"password1",value:"Your password"})}),e.jsx(l,{id:"password1",minLength:5,maxLength:20,type:"password",name:"password",required:!0})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{id:"remember"}),e.jsx(n,{htmlFor:"remember",children:"Remember me"})]}),e.jsx(L,{type:"submit",children:"Submit"}),e.jsxs("div",{className:"text-xs mt-5 mx-auto",children:["Don't have an account",e.jsx("button",{onClick:s=>{s.preventDefault(),m("register")},className:"text-blue-600 hover:underline mx-1 dark:text-blue-500",children:" Register "})]})]})},T=()=>{const[o,m]=g(),[i,r]=x.useState(""),{setAuthState:h}=x.useContext(N),p=y();return e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:s=>{var t,b,f,v;s.preventDefault();let j=(t=s.currentTarget.elements.email)==null?void 0:t.value,d=(b=s.currentTarget.elements.password)==null?void 0:b.value,c=(f=s.currentTarget.elements.repeat)==null?void 0:f.value;if(!d.match(c)){r("password and repeat password not equal");return}let u=(v=s.currentTarget.elements.name)==null?void 0:v.value;fetch("http://localhost:5000/register",{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:j,password:d,name:u})}).then(a=>{if(a.status===500){r("Server error");return}else if(a.status===409){r("Email already exist. Please Login");return}return a.json()}).then(a=>{a&&a.user&&a.user._id&&(h(a.user),p("/"))})},children:[e.jsx("h1",{className:"font-bold mx-auto text-xl",children:"Register"}),i.length>0&&e.jsxs("div",{className:"flex p-4 justify-between mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",children:[e.jsx("span",{children:i}),e.jsx("button",{onClick:s=>{s.preventDefault(),r("")},children:e.jsx(S,{})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(n,{htmlFor:"email2",value:"Your email"})}),e.jsx(l,{id:"email2",type:"email",maxLength:30,minLength:3,name:"email",placeholder:"name@flowbite.com",required:!0,shadow:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(n,{htmlFor:"password2",value:"Your password"})}),e.jsx(l,{id:"password2",type:"password",name:"password",maxLength:20,minLength:5,required:!0,shadow:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(n,{htmlFor:"repeat-password",value:"Repeat password"})}),e.jsx(l,{id:"repeat-password",type:"password",name:"repeat",maxLength:20,minLength:5,required:!0,shadow:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(n,{htmlFor:"name",value:"Your name"})}),e.jsx(l,{id:"name",name:"name",type:"text",maxLength:20,minLength:3,required:!0,shadow:!0})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{id:"agree"}),e.jsxs(n,{htmlFor:"agree",children:["I agree with the",e.jsx("a",{href:"#",className:"text-blue-600 hover:underline dark:text-blue-500 mx-2",children:"terms and conditions"})]})]}),e.jsx(L,{type:"submit",children:"Register new account"}),e.jsxs("div",{className:"text-xs mt-5 mx-auto",children:["Don't have an account",e.jsx("button",{onClick:s=>{s.preventDefault(),m("login")},className:"text-blue-600 hover:underline mx-1 dark:text-blue-500",children:" Login "})]})]})},q=()=>e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"max-w-md mx-auto mt-10 border p-5 rounded-3xl shadow-xl",children:e.jsx(C,{})})}),C=()=>{const[o,m]=g();return o.has("verify-email")?e.jsx(w,{}):o.has("register")?e.jsx(T,{}):e.jsx(w,{})};export{q as default};
