import{c as q,r as I,j as m,F as V,a as s,L as G}from"./index-d737cad4.js";import{e as j,c as X,b as Y,d as P,f as W,n as F,h as O,S as J,a as K}from"./pagination.min-4cea594f.js";import{w as _}from"./woosh-f372e6a1.js";function U(e,N,g,b){return e.params.createElements&&Object.keys(b).forEach(c=>{if(!g[c]&&g.auto===!0){let h=j(e.el,`.${b[c]}`)[0];h||(h=X("div",b[c]),h.className=b[c],e.el.append(h)),g[c]=h,N[c]=h}}),g}function D(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function H({swiper:e,extendParams:N,on:g,emit:b}){const c="swiper-pagination";N({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),e.pagination={el:null,bullets:[]};let h,x=0;const u=a=>(Array.isArray(a)||(a=[a].filter(t=>!!t)),a);function r(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function L(a,t){const{bulletActiveClass:l}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${l}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${l}-${t}-${t}`)))}function B(a){const t=a.target.closest(D(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const l=P(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===l)return;(l<e.loopedSlides||l>e.slides.length-e.loopedSlides)&&e.loopFix({direction:l<e.loopedSlides?"prev":"next",activeSlideIndex:l,slideTo:!1}),e.slideToLoop(l)}else e.slideTo(l)}function v(){const a=e.rtl,t=e.params.pagination;if(r())return;let l=e.pagination.el;l=u(l);let o;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.params.loop?Math.ceil(p/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?o=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex:typeof e.snapIndex<"u"?o=e.snapIndex:o=e.activeIndex||0,t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const n=e.pagination.bullets;let f,d,$;if(t.dynamicBullets&&(h=Y(n[0],e.isHorizontal()?"width":"height",!0),l.forEach(y=>{y.style[e.isHorizontal()?"width":"height"]=`${h*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&e.previousIndex!==void 0&&(x+=o-(e.previousIndex||0),x>t.dynamicMainBullets-1?x=t.dynamicMainBullets-1:x<0&&(x=0)),f=Math.max(o-x,0),d=f+(Math.min(n.length,t.dynamicMainBullets)-1),$=(d+f)/2),n.forEach(y=>{const C=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(S=>`${t.bulletActiveClass}${S}`)].map(S=>typeof S=="string"&&S.includes(" ")?S.split(" "):S).flat();y.classList.remove(...C)}),l.length>1)n.forEach(y=>{const C=P(y);C===o&&y.classList.add(...t.bulletActiveClass.split(" ")),t.dynamicBullets&&(C>=f&&C<=d&&y.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),C===f&&L(y,"prev"),C===d&&L(y,"next"))});else{const y=n[o];if(y&&y.classList.add(...t.bulletActiveClass.split(" ")),t.dynamicBullets){const C=n[f],S=n[d];for(let z=f;z<=d;z+=1)n[z]&&n[z].classList.add(...`${t.bulletActiveClass}-main`.split(" "));L(C,"prev"),L(S,"next")}}if(t.dynamicBullets){const y=Math.min(n.length,t.dynamicMainBullets+4),C=(h*y-h)/2-$*h,S=a?"right":"left";n.forEach(z=>{z.style[e.isHorizontal()?S:"top"]=`${C}px`})}}l.forEach((n,f)=>{if(t.type==="fraction"&&(n.querySelectorAll(D(t.currentClass)).forEach(d=>{d.textContent=t.formatFractionCurrent(o+1)}),n.querySelectorAll(D(t.totalClass)).forEach(d=>{d.textContent=t.formatFractionTotal(i)})),t.type==="progressbar"){let d;t.progressbarOpposite?d=e.isHorizontal()?"vertical":"horizontal":d=e.isHorizontal()?"horizontal":"vertical";const $=(o+1)/i;let y=1,C=1;d==="horizontal"?y=$:C=$,n.querySelectorAll(D(t.progressbarFillClass)).forEach(S=>{S.style.transform=`translate3d(0,0,0) scaleX(${y}) scaleY(${C})`,S.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(n.innerHTML=t.renderCustom(e,o+1,i),f===0&&b("paginationRender",n)):(f===0&&b("paginationRender",n),b("paginationUpdate",n)),e.params.watchOverflow&&e.enabled&&n.classList[e.isLocked?"add":"remove"](t.lockClass)})}function M(){const a=e.params.pagination;if(r())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let l=e.pagination.el;l=u(l);let o="";if(a.type==="bullets"){let p=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&p>t&&(p=t);for(let i=0;i<p;i+=1)a.renderBullet?o+=a.renderBullet.call(e,i,a.bulletClass):o+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?o=a.renderFraction.call(e,a.currentClass,a.totalClass):o=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?o=a.renderProgressbar.call(e,a.progressbarFillClass):o=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],l.forEach(p=>{a.type!=="custom"&&(p.innerHTML=o||""),a.type==="bullets"&&e.pagination.bullets.push(...p.querySelectorAll(D(a.bulletClass)))}),a.type!=="custom"&&b("paginationRender",l[0])}function E(){e.params.pagination=U(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.shadowRoot.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(l=>W(l,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=u(t),t.forEach(l=>{a.type==="bullets"&&a.clickable&&l.classList.add(a.clickableClass),l.classList.add(a.modifierClass+a.type),l.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(l.classList.add(`${a.modifierClass}${a.type}-dynamic`),x=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&l.classList.add(a.progressbarOppositeClass),a.clickable&&l.addEventListener("click",B),e.enabled||l.classList.add(a.lockClass)}))}function k(){const a=e.params.pagination;if(r())return;let t=e.pagination.el;t&&(t=u(t),t.forEach(l=>{l.classList.remove(a.hiddenClass),l.classList.remove(a.modifierClass+a.type),l.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&l.removeEventListener("click",B)})),e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...a.bulletActiveClass.split(" ")))}g("init",()=>{e.params.pagination.enabled===!1?A():(E(),M(),v())}),g("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),g("snapIndexChange",()=>{v()}),g("snapGridLengthChange",()=>{M(),v()}),g("destroy",()=>{k()}),g("enable disable",()=>{let{el:a}=e.pagination;a&&(a=u(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),g("lock unlock",()=>{v()}),g("click",(a,t)=>{const l=t.target;let{el:o}=e.pagination;if(Array.isArray(o)||(o=[o].filter(p=>!!p)),e.params.pagination.el&&e.params.pagination.hideOnClick&&o&&o.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;const p=o[0].classList.contains(e.params.pagination.hiddenClass);b(p===!0?"paginationShow":"paginationHide"),o.forEach(i=>i.classList.toggle(e.params.pagination.hiddenClass))}});const T=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=u(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),E(),M(),v()},A=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=u(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),k()};Object.assign(e.pagination,{enable:T,disable:A,render:M,update:v,init:E,destroy:k})}function R({swiper:e,extendParams:N,emit:g,once:b}){N({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function c(){const u=e.getTranslate();e.setTranslate(u),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function h(){const{touchEventsData:u,touches:r}=e;u.velocities.length===0&&u.velocities.push({position:r[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:r[e.isHorizontal()?"currentX":"currentY"],time:F()})}function x({currentPos:u}){const{params:r,wrapperEl:L,rtlTranslate:B,snapGrid:v,touchEventsData:M}=e,k=F()-M.touchStartTime;if(u<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(u>-e.maxTranslate()){e.slides.length<v.length?e.slideTo(v.length-1):e.slideTo(e.slides.length-1);return}if(r.freeMode.momentum){if(M.velocities.length>1){const i=M.velocities.pop(),n=M.velocities.pop(),f=i.position-n.position,d=i.time-n.time;e.velocity=f/d,e.velocity/=2,Math.abs(e.velocity)<r.freeMode.minimumVelocity&&(e.velocity=0),(d>150||F()-i.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=r.freeMode.momentumVelocityRatio,M.velocities.length=0;let T=1e3*r.freeMode.momentumRatio;const A=e.velocity*T;let a=e.translate+A;B&&(a=-a);let t=!1,l;const o=Math.abs(e.velocity)*20*r.freeMode.momentumBounceRatio;let p;if(a<e.maxTranslate())r.freeMode.momentumBounce?(a+e.maxTranslate()<-o&&(a=e.maxTranslate()-o),l=e.maxTranslate(),t=!0,M.allowMomentumBounce=!0):a=e.maxTranslate(),r.loop&&r.centeredSlides&&(p=!0);else if(a>e.minTranslate())r.freeMode.momentumBounce?(a-e.minTranslate()>o&&(a=e.minTranslate()+o),l=e.minTranslate(),t=!0,M.allowMomentumBounce=!0):a=e.minTranslate(),r.loop&&r.centeredSlides&&(p=!0);else if(r.freeMode.sticky){let i;for(let n=0;n<v.length;n+=1)if(v[n]>-a){i=n;break}Math.abs(v[i]-a)<Math.abs(v[i-1]-a)||e.swipeDirection==="next"?a=v[i]:a=v[i-1],a=-a}if(p&&b("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(B?T=Math.abs((-a-e.translate)/e.velocity):T=Math.abs((a-e.translate)/e.velocity),r.freeMode.sticky){const i=Math.abs((B?-a:a)-e.translate),n=e.slidesSizesGrid[e.activeIndex];i<n?T=r.speed:i<2*n?T=r.speed*1.5:T=r.speed*2.5}}else if(r.freeMode.sticky){e.slideToClosest();return}r.freeMode.momentumBounce&&t?(e.updateProgress(l),e.setTransition(T),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating=!0,O(L,()=>{!e||e.destroyed||!M.allowMomentumBounce||(g("momentumBounce"),e.setTransition(r.speed),setTimeout(()=>{e.setTranslate(l),O(L,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(g("_freeModeNoMomentumRelease"),e.updateProgress(a),e.setTransition(T),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,O(L,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(a),e.updateActiveIndex(),e.updateSlidesClasses()}else if(r.freeMode.sticky){e.slideToClosest();return}else r.freeMode&&g("_freeModeNoMomentumRelease");(!r.freeMode.momentum||k>=r.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:c,onTouchMove:h,onTouchEnd:x}})}function Q({products:e,dispatch:N,basket:g,fav:b}){const c=()=>{window.innerWidth<768?x({...h,slidesPerView:1}):window.innerWidth<1024?x({...h,slidesPerView:2}):window.innerWidth<1200?x({...h,slidesPerView:3}):x({...h,slidesPerView:4})};I.useEffect(()=>(c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]);const[h,x]=I.useState({slidesPerView:4,spaceBetween:30,freeMode:!0,pagination:{clickable:!0},modules:[R,H]});I.useEffect(()=>(c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]);const[u,r]=I.useState(4),[L,B]=I.useState(!1),[v,M]=I.useState(0),E=u+8,[k,T]=I.useState(1),A=()=>{T(k+1)},a=()=>{k>1&&T(k-1)};function t(n,f){const d=[...g],$=d.findIndex(C=>C.id===n);new Audio(_).play(),$>=0?d[$].count+=f:d.push({id:n,count:f}),localStorage.setItem("basket",JSON.stringify(d)),N({type:"SET_BASKET",payload:d}),B(!1)}function l(n){M(n+u),T(1),B(!L)}function o(n){n.target.classList.contains("detailsModal")&&B(!L)}function p(n){console.log("əlavə edildi'");const f=[...b];f.findIndex($=>$.id===n)>=0||(f.push({id:n}),localStorage.setItem("fav",JSON.stringify(f)),N({type:"SET_FAV",payload:f}),console.log(b.length))}const i=e[v];return m(V,{children:[s("div",{onClick:o,className:L?"detailsModal":"detailsModal active",children:m("div",{className:"dModalInside",children:[m("div",{children:[s("img",{className:"dPhoto",src:i==null?void 0:i.image[0],alt:""})," "]}),m("div",{children:[s("h1",{children:i==null?void 0:i.title}),m("h2",{children:["₼ ",i==null?void 0:i.price,m("span",{className:"forColor",children:["₼ ",Math.floor(+(i==null?void 0:i.price)+20)]})]}),m("ul",{children:[m("li",{children:[s("span",{children:"Kateqoriya:"}),s("span",{children:i==null?void 0:i.category})]}),m("li",{children:[s("span",{children:"Stok vəziyyəti"}),s("span",{children:Math.ceil(2.9*(i==null?void 0:i.id))})]}),m("li",{className:"randomforclass",children:[s("span",{children:"Rəngi:"}),s("span",{className:"p_colors",children:s("div",{style:{backgroundColor:i==null?void 0:i.color}})})]})]}),m("div",{className:"atc",children:[s("div",{children:m("div",{children:[s("button",{onClick:a,children:"-"}),s("input",{type:"text",value:k,readOnly:!0}),s("button",{onClick:A,children:"+"})]})}),s("div",{children:s("button",{onClick:()=>t(i.id,k),children:"SƏBƏTƏ ƏLAVƏ ET"})})]}),m("ul",{children:[m("li",{children:[s("span",{children:"Teqlər:"}),s("span",{}),s("span",{children:"kreslolar"}),",",s("span",{children:" divanlar"}),",",s("span",{children:" yumşaq"}),",",s("span",{children:" stullar"})]}),m("li",{className:"asdf",children:[s("span",{children:"Paylaş"}),s("div",{className:"asFace"}),s("div",{className:"astwi"}),s("div",{className:"asreddi"})]})]})]})]})}),s("div",{className:"ProductTabContent container",children:s(J,{pagination:{clickable:!0},modules:[R,H],...h,spaceBetween:30,freeMode:!1,showsPagination:!1,className:"mySwiper ikinciswiper",children:s("div",{className:"container",children:e.slice(u,E).map((n,f)=>m(K,{className:"product-item",children:[m("div",{className:"p-i-image-container",children:[s("img",{className:"p-i-image",src:n.image[0],alt:""}),m("ul",{className:"tooltip",children:[s("li",{children:m("a",{onClick:()=>l(f),className:"magni_h_d",children:[s("i",{className:"magni fa-solid fa-magnifying-glass"}),s("div",{className:"magni_d",children:"Bax"})]})}),s("li",{onClick:()=>t(parseInt(n.id),1),children:m("a",{className:"magni_h_d test",children:[s("i",{className:"bazar fa-brands fa-opencart"}),s("div",{className:"magni_d",children:"Əlavə et"})]})}),s("li",{children:m("a",{onClick:()=>{new Audio(_).play(),p(n.id)},className:"magni_h_d",children:[s("i",{className:b.find(d=>d.id===n.id)?"fa-solid fa-heart add":"fa-solid fa-heart remove"}),s("div",{className:"magni_d",children:"Favori"})]})})]})]}),s(G,{to:`/details/${n.id}`,className:"p-i-title",children:n.title}),m("div",{className:"p-i-price",children:[m("span",{className:"old-price",children:["₼ ",Math.floor(+n.price+10)]}),"₼ ",n.price]}),m("div",{className:"product-item-review-icon",children:[s("img",{src:"https://htmldemo.net/dkoor/dkoor/assets/images/icons/star.svg"}),s("img",{src:"https://htmldemo.net/dkoor/dkoor/assets/images/icons/star.svg"})]})]},n.id))})})})]})}const Z=e=>e,te=q(Z)(Q);export{H as P,te as a,R as f};
