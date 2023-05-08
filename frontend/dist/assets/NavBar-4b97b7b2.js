import{r as d,A as h,u as x,a as m,j as e,L as l}from"./index-51ebfd81.js";import{N as s,D as r,B as u}from"./Toast-06b61f37.js";const f=()=>{const{authState:t,setAuthState:o}=d.useContext(h),i=x(),a=m();return e.jsx("div",{className:"w-full",children:e.jsxs(s,{fluid:!0,rounded:!0,children:[e.jsx(l,{to:"/",children:e.jsxs("div",{className:"flex",children:[e.jsx("img",{src:"logo.svg",className:"mr-3 h-6 sm:h-9",alt:"Flowbite Logo"}),e.jsx("span",{className:"self-center whitespace-nowrap text-xl font-semibold dark:text-white",children:"YourHR"})]})}),e.jsxs("div",{className:"flex md:order-2 space-x-3",children:[t&&t._id&&e.jsxs(r,{arrowIcon:!1,inline:!0,label:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-10 h-10 p-1 rounded-full border-2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),children:[e.jsxs(r.Header,{children:[e.jsx("span",{className:"block text-sm",children:t.name}),e.jsx("span",{className:"block truncate text-sm font-medium",children:t.email})]}),e.jsx(r.Item,{children:e.jsx(l,{to:"/profile",children:"Profile"})}),e.jsx(r.Item,{children:e.jsx("button",{onClick:n=>{n.preventDefault(),fetch("http://localhost:5000/logout",{credentials:"include",mode:"cors",method:"GET"}).then(c=>{c.status===200&&o(null)})},children:"Sign out"})})]}),!(t&&t._id)&&e.jsx(u,{onClick:n=>{n.preventDefault(),i("/auth")},children:"Login / Register"}),e.jsx(s.Toggle,{})]}),e.jsxs(s.Collapse,{children:[e.jsx(s.Link,{href:"/",active:a.pathname==="/",children:"Home"}),e.jsx(s.Link,{href:"/profile",active:a.pathname==="/profile",children:"Profile"}),e.jsx(s.Link,{href:"#",children:"Premium Services"}),e.jsx(s.Link,{href:"#",children:"Contact"})]})]})})};export{f as default};
