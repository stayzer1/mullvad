import{s as h,c as d,t as r,n as u,i as m,z as c,u as S,g as W,h as b,d as p}from"./scheduler.D8Ap4Gvg.js";import{S as q,i as y,t as z,a as C}from"./index.C4hdyI2f.js";const T=e=>({infix:e&2}),g=e=>({infix:e[1]});function j(e){let a,f,o;const i=e[5].default,s=d(i,e,e[4],g);return{c(){a=r(e[0]),s&&s.c(),f=r(e[2])},l(t){a=u(t,e[0]),s&&s.l(t),f=u(t,e[2])},m(t,_){m(t,a,_),s&&s.m(t,_),m(t,f,_),o=!0},p(t,[_]){(!o||_&1)&&c(a,t[0]),s&&s.p&&(!o||_&18)&&S(s,i,t,t[4],o?b(i,t[4],_,T):W(t[4]),g),(!o||_&4)&&c(f,t[2])},i(t){o||(z(s,t),o=!0)},o(t){C(s,t),o=!1},d(t){t&&(p(a),p(f)),s&&s.d(t)}}}function k(e,a,f){let o,i,s,{$$slots:t={},$$scope:_}=a,{message:n}=a;return e.$$set=l=>{"message"in l&&f(3,n=l.message),"$$scope"in l&&f(4,_=l.$$scope)},e.$$.update=()=>{e.$$.dirty&8&&f(0,[o,i,s]=n.split("<>"),o,(f(1,i),f(3,n),f(2,s),f(0,o)),(f(2,s),f(3,n))),e.$$.dirty&7&&!i&&!s&&(f(1,i=o),f(0,o=""))},[o,i,s,n,_,t]}class B extends q{constructor(a){super(),y(this,a,k,j,h,{message:3})}}export{B as W};
