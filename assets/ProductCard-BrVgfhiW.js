import{r as l,f as p,e as d,k as f,j as s,F as j,x as v,G as F,H as u}from"./index-Cic6S9aV.js";import{B as n}from"./Col-YtlSGuay.js";import{a as C,C as t,b}from"./index-CF1QEAxg.js";const g=({product:e})=>{const[i,r]=l.useState(!1),a=p(),c=d(C),o=d(f);l.useEffect(()=>{o.find(h=>h.id===e.id)?r(!0):r(!1)},[o]);const m=()=>{c&&(a(j({...e,shop_id:c.id})),v.success("Medicines will be added to the cart!"))},x=()=>{a(i?F(e.id):u(e))};return s.jsxs(t,{style:{width:"18rem"},className:"mb-3",children:[s.jsx(t.Img,{style:{aspectRatio:16/9,objectFit:"cover"},variant:"top",src:e.product.image}),s.jsxs(t.Body,{children:[s.jsx(t.Title,{children:e.product.name}),s.jsx(t.Text,{children:e.product.description.slice(0,80)}),s.jsx(n,{variant:"primary",onClick:m,children:"add to Cart"}),s.jsxs("b",{className:"ms-4 fs-6",children:[e.price.toFixed(2)," UAH"]}),s.jsx(n,{className:"position-absolute",style:{top:"0.1rem",right:"0.1rem"},variant:"link",onClick:x,title:"add to Favorites",children:s.jsx(b,{className:i?"text-danger":"text-primary"})})]})]})};export{g as P};