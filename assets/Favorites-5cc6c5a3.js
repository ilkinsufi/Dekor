import{c as b,j as n,F as u,a as e,d as N,S,L as c,b as k}from"./index-d737cad4.js";import{w as g}from"./woosh-f372e6a1.js";import"https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";import"https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";function w({fav:s,products:d,dispatch:i,basket:o}){function h(l){const t=s.filter(a=>a.id!==l);i({type:"SET_FAV",payload:t}),localStorage.setItem("fav",JSON.stringify(t))}function m(l,t){const a=[...o],r=a.findIndex(p=>p.id===l);new Audio(g).play(),r>=0?a[r].count+=t:a.push({id:l,count:t}),localStorage.setItem("basket",JSON.stringify(a)),i({type:"SET_BASKET",payload:a})}return n(u,{children:[e(N,{smooth:!0}),e(S,{smooth:!0}),n("div",{className:"d__header",children:[e(c,{to:"/dekor/",children:"ƏSAS SƏHİFƏ"}),e("span",{children:" / "}),e("span",{children:"Favorilər"})]}),s.length?n("table",{className:"basketTable container",children:[e("thead",{className:"basketthead",children:n("tr",{children:[e("th",{className:"width-thumbnail"}),e("th",{className:"width-name",children:"MƏHSUL"}),e("th",{className:"width-quantity",children:"Səbətə əlavə et"}),e("th",{className:"width-subtotal",children:"SİL"}),e("th",{className:"width-remove"})]})}),e("tbody",{children:s==null?void 0:s.map(l=>{let t=d.find(a=>a.id==l.id);if(t)return n("tr",{className:"product-table-tr",children:[e("td",{className:"product-thumbnail",children:e("a",{href:"",children:e("img",{src:t==null?void 0:t.image[0],alt:""})})}),e("td",{className:"product-name",children:e("h5",{children:e("a",{href:"",children:t==null?void 0:t.title})})}),e("td",{className:"product-total",children:e("button",{onClick:()=>m(parseInt(l.id),1),className:"addbasketbuttoninf",children:"Əlavə et"})}),e("td",{className:"icon-close",children:e("img",{onClick:()=>h(t.id),src:"https://img.icons8.com/tiny-color/16/null/delete-sign.png"})})]},t==null?void 0:t.id)})})]}):e("table",{className:"basketTable container",children:e("thead",{className:"basketthead",children:e("tr",{children:e("th",{children:"FAVORI SEÇMƏMİSƏN BRO"})})})}),n("div",{className:"container backtoshop",children:[e(c,{to:"/shop",children:"MAĞAZAYA QAYIT"}),e(c,{to:"/basket",children:"SƏBƏTƏ KEÇ"})]}),e(k,{})]})}const F=s=>s,B=b(F)(w);export{B as default};
