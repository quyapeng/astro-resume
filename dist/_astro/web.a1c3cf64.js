const f={};function D(e){f.context=e}function G(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const W=(e,n)=>e===n,L={equals:W};let K=j;const x=1,E=2,O={owned:null,cleanups:null,context:null,owner:null};var d=null;let y=null,u=null,c=null,w=null,H=0;function Q(e,n){const t=u,s=d,i=e.length===0,o=i?O:{owned:null,cleanups:null,context:null,owner:n===void 0?s:n},r=i?e:()=>e(()=>A(()=>T(o)));d=o,u=null;try{return S(r,!0)}finally{u=t,d=s}}function re(e,n){n=n?Object.assign({},L,n):L;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),I(t,i));return[X.bind(t),s]}function $(e,n,t){const s=Z(e,n,!1,x);q(s)}function A(e){if(u===null)return e();const n=u;u=null;try{return e()}finally{u=n}}function X(){const e=y;if(this.sources&&(this.state||e))if(this.state===x||e)q(this);else{const n=c;c=null,S(()=>v(this),!1),c=n}if(u){const n=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(n)):(u.sources=[this],u.sourceSlots=[n]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function I(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=y&&y.running;r&&y.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?c.push(o):w.push(o),o.observers&&F(o)),r||(o.state=x)}if(c.length>1e6)throw c=[],new Error},!1)),n}function q(e){if(!e.fn)return;T(e);const n=d,t=u,s=H;u=d=e,J(e,e.value,s),u=t,d=n}function J(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=x,e.owned&&e.owned.forEach(T),e.owned=null),R(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?I(e,s):e.value=s,e.updatedAt=t)}function Z(e,n,t,s=x,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:null,pure:t};return d===null||d!==O&&(d.owned?d.owned.push(o):d.owned=[o]),o}function M(e){const n=y;if(e.state===0||n)return;if(e.state===E||n)return v(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===x||n)q(e);else if(e.state===E||n){const i=c;c=null,S(()=>v(e,t[0]),!1),c=i}}function S(e,n){if(c)return e();let t=!1;n||(c=[]),w?t=!0:w=[],H++;try{const s=e();return z(t),s}catch(s){t||(w=null),c=null,R(s)}}function z(e){if(c&&(j(c),c=null),e)return;const n=w;w=null,n.length&&S(()=>K(n),!1)}function j(e){for(let n=0;n<e.length;n++)M(e[n])}function v(e,n){const t=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||t?i!==n&&M(i):(i.state===E||t)&&v(i,n))}}function F(e){const n=y;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=E,s.pure?c.push(s):w.push(s),s.observers&&F(s))}}function T(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),r=t.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)T(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ee(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function R(e){throw e=ee(e),e}let V=!1;function te(){V=!0}function fe(e,n){if(V&&f.context){const t=f.context;D(G());const s=A(()=>e(n||{}));return D(t),s}return A(()=>e(n||{}))}function ne(e,n,t){let s=t.length,i=n.length,o=s,r=0,l=0,a=n[i-1].nextSibling,h=null;for(;r<i||l<o;){if(n[r]===t[l]){r++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===r){const g=o<s?l?t[l-1].nextSibling:t[o-l]:a;for(;l<o;)e.insertBefore(t[l++],g)}else if(o===l)for(;r<i;)(!h||!h.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[o-1]&&t[l]===n[i-1]){const g=n[--i].nextSibling;e.insertBefore(t[l++],n[r++].nextSibling),e.insertBefore(t[--o],g),n[i]=t[o]}else{if(!h){h=new Map;let p=l;for(;p<o;)h.set(t[p],p++)}const g=h.get(n[r]);if(g!=null)if(l<g&&g<o){let p=r,N=1,B;for(;++p<i&&p<o&&!((B=h.get(n[p]))==null||B!==g+N);)N++;if(N>g-l){const k=n[r];for(;l<g;)e.insertBefore(t[l++],k)}else e.replaceChild(t[l++],n[r++])}else r++;else n[r++].remove()}}}const P="_$DX_DELEGATE";function se(e,n,t,s={}){let i;return Q(o=>{i=o,n===document?e():ie(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function ue(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ce(e,n=window.document){const t=n[P]||(n[P]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,Y))}}function ie(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return C(e,n,s,t);$(i=>C(e,n(),i,t),s)}function le(e,n,t={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=i=>_(n,i),f.registry=new Map,f.context={id:t.renderId||"",count:0},_(n,t.renderId);const s=se(e,n,[...n.childNodes],t);return f.context=null,s}function ae(e){let n,t;return!f.context||!(n=f.registry.get(t=oe()))?e.cloneNode(!0):(f.completed&&f.completed.add(n),f.registry.delete(t),n)}function he(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:n}=f;for(n.queued=!1;n.length;){const[t,s]=n[0];if(!e.has(t))return;Y(s),n.shift()}}),f.events.queued=!0)}function Y(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),f.registry&&!f.done&&(f.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function C(e,n,t,s,i){for(f.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(f.context)return t;if(o==="number"&&(n=n.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=b(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(f.context)return t;t=b(e,t,s)}else{if(o==="function")return $(()=>{let l=n();for(;typeof l=="function";)l=l();t=C(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],a=t&&Array.isArray(t);if(m(l,n,t,i))return $(()=>t=C(e,l,t,s,!0)),()=>t;if(f.context){if(!l.length)return t;for(let h=0;h<l.length;h++)if(l[h].parentNode)return t=l}if(l.length===0){if(t=b(e,t,s),r)return t}else a?t.length===0?U(e,l,s):ne(e,t,l):(t&&b(e),U(e,l));t=l}else if(n instanceof Node){if(f.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=b(e,t,s,n);b(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function m(e,n,t,s){let i=!1;for(let o=0,r=n.length;o<r;o++){let l=n[o],a=t&&t[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=m(e,l,a)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=m(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const h=String(l);a&&a.nodeType===3&&a.data===h?e.push(a):e.push(document.createTextNode(h))}}return i}function U(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function b(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let r=n.length-1;r>=0;r--){const l=n[r];if(i!==l){const a=l.parentNode===e;!o&&!r?a?e.replaceChild(i,l):e.insertBefore(i,t):a&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}function _(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],o=i.getAttribute("data-hk");(!n||o.startsWith(n))&&!f.registry.has(o)&&f.registry.set(o,i)}}function oe(){const e=f.context;return`${e.id}${e.count++}`}const de=(...e)=>(te(),le(...e));export{se as a,fe as b,re as c,ce as d,ae as g,de as h,ie as i,he as r,f as s,ue as t};