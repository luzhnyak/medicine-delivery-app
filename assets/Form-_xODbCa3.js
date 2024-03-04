import{r as s,P as h,j as r,c as d,u as i}from"./index-Bc0sp-Bu.js";import{C as W}from"./Col-B8X-5cjH.js";function X(e,o){return s.Children.toArray(e).some(a=>s.isValidElement(a)&&a.type===o)}const Y={type:h.string,tooltip:h.bool,as:h.elementType},k=s.forwardRef(({as:e="div",className:o,type:a="valid",tooltip:t=!1,...l},n)=>r.jsx(e,{...l,ref:n,className:d(o,`${a}-${t?"tooltip":"feedback"}`)}));k.displayName="Feedback";k.propTypes=Y;const I=k,Z=s.createContext({}),F=Z,T=s.forwardRef(({id:e,bsPrefix:o,className:a,type:t="checkbox",isValid:l=!1,isInvalid:n=!1,as:m="input",...p},f)=>{const{controlId:c}=s.useContext(F);return o=i(o,"form-check-input"),r.jsx(m,{...p,ref:f,type:t,id:e||c,className:d(a,o,l&&"is-valid",n&&"is-invalid")})});T.displayName="FormCheckInput";const b=T,S=s.forwardRef(({bsPrefix:e,className:o,htmlFor:a,...t},l)=>{const{controlId:n}=s.useContext(F);return e=i(e,"form-check-label"),r.jsx("label",{...t,ref:l,htmlFor:a||n,className:d(o,e)})});S.displayName="FormCheckLabel";const x=S,O=s.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:a,inline:t=!1,reverse:l=!1,disabled:n=!1,isValid:m=!1,isInvalid:p=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:u,className:C,style:$,title:j="",type:N="checkbox",label:g,children:w,as:H="input",...J},K)=>{o=i(o,"form-check"),a=i(a,"form-switch");const{controlId:R}=s.useContext(F),Q=s.useMemo(()=>({controlId:e||R}),[R,e]),L=!w&&g!=null&&g!==!1||X(w,x),U=r.jsx(b,{...J,type:N==="switch"?"checkbox":N,ref:K,isValid:m,isInvalid:p,disabled:n,as:H});return r.jsx(F.Provider,{value:Q,children:r.jsx("div",{style:$,className:d(C,L&&o,t&&`${o}-inline`,l&&`${o}-reverse`,N==="switch"&&a),children:w||r.jsxs(r.Fragment,{children:[U,L&&r.jsx(x,{title:j,children:g}),c&&r.jsx(I,{type:u,tooltip:f,children:c})]})})})});O.displayName="FormCheck";const y=Object.assign(O,{Input:b,Label:x}),G=s.forwardRef(({bsPrefix:e,type:o,size:a,htmlSize:t,id:l,className:n,isValid:m=!1,isInvalid:p=!1,plaintext:f,readOnly:c,as:u="input",...C},$)=>{const{controlId:j}=s.useContext(F);return e=i(e,"form-control"),r.jsx(u,{...C,type:o,size:t,ref:$,readOnly:c,id:l||j,className:d(n,f?`${e}-plaintext`:e,a&&`${e}-${a}`,o==="color"&&`${e}-color`,m&&"is-valid",p&&"is-invalid")})});G.displayName="FormControl";const P=Object.assign(G,{Feedback:I}),E=s.forwardRef(({className:e,bsPrefix:o,as:a="div",...t},l)=>(o=i(o,"form-floating"),r.jsx(a,{ref:l,className:d(e,o),...t})));E.displayName="FormFloating";const ee=E,M=s.forwardRef(({controlId:e,as:o="div",...a},t)=>{const l=s.useMemo(()=>({controlId:e}),[e]);return r.jsx(F.Provider,{value:l,children:r.jsx(o,{...a,ref:t})})});M.displayName="FormGroup";const V=M,A=s.forwardRef(({as:e="label",bsPrefix:o,column:a=!1,visuallyHidden:t=!1,className:l,htmlFor:n,...m},p)=>{const{controlId:f}=s.useContext(F);o=i(o,"form-label");let c="col-form-label";typeof a=="string"&&(c=`${c} ${c}-${a}`);const u=d(l,o,t&&"visually-hidden",a&&c);return n=n||f,a?r.jsx(W,{ref:p,as:"label",className:u,htmlFor:n,...m}):r.jsx(e,{ref:p,className:u,htmlFor:n,...m})});A.displayName="FormLabel";const oe=A,B=s.forwardRef(({bsPrefix:e,className:o,id:a,...t},l)=>{const{controlId:n}=s.useContext(F);return e=i(e,"form-range"),r.jsx("input",{...t,type:"range",ref:l,className:d(o,e),id:a||n})});B.displayName="FormRange";const ae=B,_=s.forwardRef(({bsPrefix:e,size:o,htmlSize:a,className:t,isValid:l=!1,isInvalid:n=!1,id:m,...p},f)=>{const{controlId:c}=s.useContext(F);return e=i(e,"form-select"),r.jsx("select",{...p,size:a,ref:f,className:d(t,e,o&&`${e}-${o}`,l&&"is-valid",n&&"is-invalid"),id:m||c})});_.displayName="FormSelect";const te=_,q=s.forwardRef(({bsPrefix:e,className:o,as:a="small",muted:t,...l},n)=>(e=i(e,"form-text"),r.jsx(a,{...l,ref:n,className:d(o,e,t&&"text-muted")})));q.displayName="FormText";const se=q,z=s.forwardRef((e,o)=>r.jsx(y,{...e,ref:o,type:"switch"}));z.displayName="Switch";const le=Object.assign(z,{Input:y.Input,Label:y.Label}),D=s.forwardRef(({bsPrefix:e,className:o,children:a,controlId:t,label:l,...n},m)=>(e=i(e,"form-floating"),r.jsxs(V,{ref:m,className:d(o,e),controlId:t,...n,children:[a,r.jsx("label",{htmlFor:t,children:l})]})));D.displayName="FloatingLabel";const re=D,ne={_ref:h.any,validated:h.bool,as:h.elementType},v=s.forwardRef(({className:e,validated:o,as:a="form",...t},l)=>r.jsx(a,{...t,ref:l,className:d(e,o&&"was-validated")}));v.displayName="Form";v.propTypes=ne;const de=Object.assign(v,{Group:V,Control:P,Floating:ee,Check:y,Switch:le,Label:oe,Text:se,Range:ae,Select:te,FloatingLabel:re});export{de as F};
