import{f as C,e as l,j as e,i as S,k as q,l as A,n as I,o as B,p as P,q as F,r as p,t as g,v as w,w as L,x as k,y as _,z as D,A as G}from"./index-ClLff832.js";import{R as x,C as i,B as f}from"./Row-CIqMF8Pf.js";import{F as a,s as T,a as O}from"./selectors-Cf0fRAoB.js";import{s as R,C as c,F as z}from"./index-CcPTi9qU.js";const H=({product:s})=>{const t=C(),o=l(R).find(n=>n.id===s.shop_id),d=n=>{t(S({...s,quantity:Number(n)}))},h=()=>{t(q(s.id))};return e.jsxs(c,{children:[e.jsxs(x,{children:[e.jsx(i,{xs:4,children:e.jsx(c.Img,{style:{height:"150px",objectFit:"contain"},src:s.product.image})}),e.jsx(i,{children:e.jsxs(c.Body,{className:"ps-0",children:[e.jsx(c.Title,{className:"me-5",children:s.product.name}),e.jsxs("div",{className:"d-flex gap-3 align-items-center",children:[e.jsxs("span",{className:"flex-grow-1",children:[e.jsx("b",{children:"Price: "})," ",s.price," UAH"]}),e.jsx("b",{children:"Quantity: "}),e.jsx(a.Control,{style:{width:"100px"},type:"number",min:0,value:s.quantity,onChange:n=>d(n.target.value)})]}),e.jsxs(c.Text,{children:[e.jsx("b",{children:"Shop: "}),o&&o.name]})]})})]}),e.jsx(f,{className:"position-absolute",style:{top:"0.3rem",right:"0.2rem"},type:"button",variant:"link",onClick:h,title:"Delete",children:e.jsx(z,{size:24,color:"red"})})]})},U=()=>{const s=C(),t=l(A),j=l(T),o=l(O),d=l(I),h=l(B),n=l(P),b=l(F),[y,N]=p.useState(0),v=()=>t.reduce((r,m)=>r+m.quantity*m.price,0);p.useEffect(()=>{N(v())},[t]),p.useEffect(()=>{o&&g.error("Something happened, please reload the page!")},[o]);const E=async r=>{r.preventDefault();const m={name:d,email:h,phone:n,address:b,orderProducts:t.map(u=>({shop_id:u.shop_id,product_id:u.product_id,quantity:u.quantity,price:u.price}))};await s(D(m)).unwrap(),s(G()),g.success("Your order has been shipped!")};return e.jsx("section",{className:"border p-3",children:e.jsxs(a,{onSubmit:E,children:[e.jsxs(x,{children:[e.jsxs(i,{md:4,children:[e.jsxs(a.Group,{className:"mb-3",controlId:"formBasicName",children:[e.jsx(a.Label,{children:"Name"}),e.jsx(a.Control,{type:"text",placeholder:"Enter name",onChange:r=>s(w(r.target.value)),value:d,required:!0})]}),e.jsxs(a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[e.jsx(a.Label,{children:"Email address"}),e.jsx(a.Control,{type:"email",placeholder:"Enter email",onChange:r=>s(L(r.target.value)),value:h,required:!0})]}),e.jsxs(a.Group,{className:"mb-3",controlId:"formBasicPhone",children:[e.jsx(a.Label,{children:"Phone"}),e.jsx(a.Control,{type:"text",placeholder:"Enter phone",onChange:r=>s(k(r.target.value)),value:n,required:!0})]}),e.jsxs(a.Group,{className:"mb-3",controlId:"formBasicAddress",children:[e.jsx(a.Label,{children:"Address"}),e.jsx(a.Control,{type:"text",placeholder:"Enter address",onChange:r=>s(_(r.target.value)),value:b,required:!0})]})]}),e.jsx(i,{className:"mb-3",children:e.jsx(x,{className:"g-3",children:t.map(r=>e.jsx(i,{xs:12,children:e.jsx(H,{product:r})},r.id))})})]}),e.jsxs(x,{children:[e.jsxs(i,{children:[e.jsx("b",{children:"Sum:"})," ",y," UAH"]}),e.jsx(i,{children:e.jsx(f,{className:"d-block ms-auto",variant:"primary",type:"submit",disabled:j||t.length===0,children:"Submit"})})]})]})})},M=()=>e.jsx("main",{children:e.jsx(U,{})});export{M as default};
