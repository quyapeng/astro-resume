import{d as s,c as r,g as a,i as u,r as d,t as g}from"./web.a1c3cf64.js";const $=g("<div><h4></h4><button>click</button></div>");function k(l){const[e,c]=r(l.count),o=t=>{console.log("handleClick",t),c(e()+1)};return(()=>{const t=a($),n=t.firstChild,i=n.nextSibling;return u(n,e),i.$$click=o,d(),t})()}s(["click"]);export{k as Counter};