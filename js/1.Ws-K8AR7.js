import{s as B,e as u,m as D,t as C,a as m,b as w,p as N,o as H,n as j,d as _,f as d,i as V,j as o,z as O,q as T,D as F}from"../chunks/scheduler.D8Ap4Gvg.js";import{S as G,i as J}from"../chunks/index.C4hdyI2f.js";import{p as K}from"../chunks/stores.Ce8gR7AW.js";/* empty css                      */function U(r){let t,e=r[0].error.detail+"",a;return{c(){t=u("p"),a=C(e)},l(n){t=m(n,"P",{});var l=w(t);a=j(l,e),l.forEach(_)},m(n,l){V(n,t,l),o(t,a)},p(n,l){l&1&&e!==(e=n[0].error.detail+"")&&O(a,e)},d(n){n&&_(t)}}}function L(r){var z;let t,e,a,n="Oh no, that wasn't supposed to happen",l,i,E,S,g,q,b,v,P=new Date+"",y,I,h,x="⇦ Home",s=((z=r[0].error)==null?void 0:z.detail)&&U(r);return{c(){t=u("section"),e=u("div"),a=u("h1"),a.textContent=n,l=D(),i=u("h2"),E=C(r[2]),S=C(" - "),g=C(r[1]),q=D(),s&&s.c(),b=D(),v=u("p"),y=C(P),I=D(),h=u("a"),h.textContent=x,this.h()},l(p){t=m(p,"SECTION",{class:!0});var f=w(t);e=m(f,"DIV",{class:!0});var c=w(e);a=m(c,"H1",{class:!0,"data-svelte-h":!0}),N(a)!=="svelte-j7aotp"&&(a.textContent=n),l=H(c),i=m(c,"H2",{class:!0});var k=w(i);E=j(k,r[2]),S=j(k," - "),g=j(k,r[1]),k.forEach(_),q=H(c),s&&s.l(c),b=H(c),v=m(c,"P",{class:!0});var A=w(v);y=j(A,P),A.forEach(_),I=H(c),h=m(c,"A",{href:!0,class:!0,"data-svelte-h":!0}),N(h)!=="svelte-sonl2d"&&(h.textContent=x),c.forEach(_),f.forEach(_),this.h()},h(){d(a,"class","svelte-enjhow"),d(i,"class","svelte-enjhow"),d(v,"class","small"),d(h,"href","/"),d(h,"class","svelte-enjhow"),d(e,"class","svelte-enjhow"),d(t,"class","svelte-enjhow")},m(p,f){V(p,t,f),o(t,e),o(e,a),o(e,l),o(e,i),o(i,E),o(i,S),o(i,g),o(e,q),s&&s.m(e,null),o(e,b),o(e,v),o(v,y),o(e,I),o(e,h)},p(p,[f]){var c;f&4&&O(E,p[2]),f&2&&O(g,p[1]),(c=p[0].error)!=null&&c.detail?s?s.p(p,f):(s=U(p),s.c(),s.m(e,b)):s&&(s.d(1),s=null)},i:T,o:T,d(p){p&&_(t),s&&s.d()}}}function M(r,t,e){let a,n,l;return F(r,K,i=>e(0,l=i)),r.$$.update=()=>{var i;r.$$.dirty&1&&e(2,a=l.status??"000"),r.$$.dirty&1&&e(1,n=((i=l.error)==null?void 0:i.message)??"Unknown error")},[l,n,a]}class Y extends G{constructor(t){super(),J(this,t,M,L,B,{})}}export{Y as component};
