import{r as d,u as B,J as C,j as N,c as m,K as x,L as h}from"./index-ClLff832.js";const R=d.forwardRef(({as:p,bsPrefix:t,variant:f="primary",size:s,active:i=!1,disabled:a=!1,className:l,...r},u)=>{const o=B(t,"btn"),[e,{tagName:n}]=C({tagName:p,disabled:a,...r}),c=n;return N.jsx(c,{...e,...r,ref:u,disabled:a,className:m(l,o,i&&"active",f&&`${o}-${f}`,s&&`${o}-${s}`,r.href&&a&&"disabled")})});R.displayName="Button";const g=R;function y({as:p,bsPrefix:t,className:f,...s}){t=B(t,"col");const i=x(),a=h(),l=[],r=[];return i.forEach(u=>{const o=s[u];delete s[u];let e,n,c;typeof o=="object"&&o!=null?{span:e,offset:n,order:c}=o:e=o;const $=u!==a?`-${u}`:"";e&&l.push(e===!0?`${t}${$}`:`${t}${$}-${e}`),c!=null&&r.push(`order${$}-${c}`),n!=null&&r.push(`offset${$}-${n}`)}),[{...s,className:m(f,...l,...r)},{as:p,bsPrefix:t,spans:l}]}const j=d.forwardRef((p,t)=>{const[{className:f,...s},{as:i="div",bsPrefix:a,spans:l}]=y(p);return N.jsx(i,{...s,ref:t,className:m(f,!l.length&&a)})});j.displayName="Col";const v=j,w=d.forwardRef(({bsPrefix:p,className:t,as:f="div",...s},i)=>{const a=B(p,"row"),l=x(),r=h(),u=`${a}-cols`,o=[];return l.forEach(e=>{const n=s[e];delete s[e];let c;n!=null&&typeof n=="object"?{cols:c}=n:c=n;const $=e!==r?`-${e}`:"";c!=null&&o.push(`${u}${$}-${c}`)}),N.jsx(f,{ref:i,...s,className:m(t,a,...o)})});w.displayName="Row";const V=w;export{g as B,v as C,V as R};
