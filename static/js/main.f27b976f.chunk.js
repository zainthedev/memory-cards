(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{15:function(e,c,a){},16:function(e,c,a){},17:function(e,c,a){"use strict";a.r(c);var t=a(0),i=a(1),n=a.n(i),r=a(7),s=a.n(r),d=a(2),j=function(e){return Object(t.jsxs)("div",{id:"header",children:[Object(t.jsx)("div",{id:"titleText",children:Object(t.jsx)("p",{children:"Memory Cards"})}),Object(t.jsx)("div",{id:"instructionText",children:Object(t.jsx)("p",{children:"Don't click anything more than once!"})})]})},m=a(6),o=a.p+"static/media/bbq.e4131c5c.jpg",h=a.p+"static/media/burger.5a21438d.jpg",g=a.p+"static/media/chickenSkewers.967ab7c4.jpg",p=a.p+"static/media/curry.7d5546dd.jpg",b=a.p+"static/media/frenchFries.afbcf5a3.jpg",u=a.p+"static/media/friedChicken.69baf17a.jpg",l=a.p+"static/media/pasta.c032152d.jpg",O=a.p+"static/media/pizza.ba8927aa.jpg",x=a.p+"static/media/ramen.02f0dadf.jpg",f=a.p+"static/media/soupDumplings.450d119d.jpg",S=a.p+"static/media/sushi.a790d09e.jpg",v=a.p+"static/media/tacos.049a69ab.jpg",C=a(13),k=function(e){var c=Object(i.useState)([{name:"BBQ",image:o},{name:"Burgers",image:h},{name:"Chicken Skewers",image:g},{name:"Curry",image:p},{name:"French Fries",image:b},{name:"Fried Chicken",image:u},{name:"Pasta",image:l},{name:"Pizza",image:O},{name:"Ramen",image:x},{name:"Soup Dumplings",image:f},{name:"Sushi",image:S},{name:"Tacos",image:v}]),a=Object(d.a)(c,2),n=a[0],r=a[1],s=Object(i.useState)([]),j=Object(d.a)(s,2),k=j[0],y=j[1];function T(){for(var e=Object(m.a)(n),c=e.length-1;c>0;c--){var a=Math.floor(Math.random()*(c+1)),t=[e[a],e[c]];e[c]=t[0],e[a]=t[1]}return e}function D(c){r(T()),function(c){var a=c.target.lastChild.textContent;k.includes(a)?k.includes(a)&&(e.setHighScore(k.length),y([]),e.setScore(0)):(y([].concat(Object(m.a)(k),[a])),e.setScore(e.score+1))}(c)}return Object(i.useEffect)((function(){r(T())}),[]),Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{id:"cardContainer",children:n.map((function(e){return Object(t.jsxs)("div",{className:"card",onClick:D,children:[Object(t.jsx)("img",{src:e.image,alt:e.name,className:"cardImage"}),Object(t.jsx)("p",{className:"cardText",children:e.name})]},C())}))})})},y=function(e){return Object(t.jsxs)("div",{id:"scoreCounterContainer",children:[Object(t.jsx)("div",{id:"scoreDisplay",children:Object(t.jsxs)("p",{className:"scoreText",children:["Score: ",e.score]})}),Object(t.jsx)("div",{id:"highScoreDisplay",children:Object(t.jsxs)("p",{className:"scoreText",children:["High score: ",e.highScore]})})]})};a(15),a(16);var T=function(){var e=Object(i.useState)(0),c=Object(d.a)(e,2),a=c[0],n=c[1],r=Object(i.useState)(0),s=Object(d.a)(r,2),m=s[0],o=s[1];return Object(t.jsxs)("div",{id:"app",children:[Object(t.jsx)(j,{}),Object(t.jsxs)("div",{id:"gameContainer",children:[Object(t.jsx)(k,{score:a,setScore:n,setHighScore:o,highScore:m}),Object(t.jsx)(y,{score:a,highScore:m})]})]})};s.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(T,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f27b976f.chunk.js.map