(function(){"use strict";var e={5069:function(e,o,t){var n=t(9242),r=t(3396),i=t(7718),a=t(4615);function c(e,o,t,n,c,s){const d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(a.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d)])),_:1})])),_:1})}var s={name:"App",data:()=>({})},d=t(89);const l=(0,d.Z)(s,[["render",c]]);var p=l,u=t(2483);const v={class:"wrap"},f={id:"top"},g=(0,r._)("div",{class:"header"}," 명지전문대학교 정보통신공학과 고용빈 ",-1),m=(0,r._)("div",{class:"header"}," 명지전문대학교 정보통신공학과 고용빈 ",-1),h=(0,r._)("div",{class:"header"}," 명지전문대학교 정보통신공학과 고용빈 ",-1),b={id:"portfolio"},y=(0,r._)("div",{class:"header"},"My portfolio",-1),k={class:"list"};function w(e,o,t,n,i,a){const c=(0,r.up)("swiper-slide"),s=(0,r.up)("swiper");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",f,[(0,r.Wm)(s,{class:"swiper","slides-per-view":1,"space-between":50,onSwiper:e.onSwiper,onSlideChange:e.onSlideChange},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{style:{"background-image":"url(/top1.jpg)"},class:"slide"},{default:(0,r.w5)((()=>[g])),_:1}),(0,r.Wm)(c,{style:{"background-image":"url(/top2.jpg)"},class:"slide"},{default:(0,r.w5)((()=>[m])),_:1}),(0,r.Wm)(c,{style:{"background-image":"url(/top3.jpg)"},class:"slide"},{default:(0,r.w5)((()=>[h])),_:1})])),_:1},8,["onSwiper","onSlideChange"])]),(0,r._)("div",b,[y,(0,r._)("div",k,[(0,r._)("div",{class:"item",onClick:o[0]||(o[0]=o=>e.movePage("/portfolio1")),"data-aos":"fade-right","data-aos-delay":"300",style:{"background-image":"url(/m1.jpeg)",color:"rgb(125, 190, 82)"}}," Contact "),(0,r._)("div",{class:"item",onClick:o[1]||(o[1]=o=>e.movePage("/portfolio2")),"data-aos":"fade-down","data-aos-delay":"400",style:{"background-image":"url(/m2.png)",color:"rgb(215, 128, 195)"}}," Introduce "),(0,r._)("div",{class:"item",onClick:o[2]||(o[2]=o=>e.movePage("/portfolio3")),"data-aos":"fade-left","data-aos-delay":"500",style:{"background-image":"url(/m3.jpeg)",color:"rgb(86, 216, 255)"}}," Project "),(0,r._)("div",{class:"item",onClick:o[3]||(o[3]=o=>e.movePage("/portfolio4")),"data-aos":"fade-right","data-aos-delay":"600",style:{"background-image":"url(/m4.png)",color:"rgb(221, 88, 94)"}}," Tech Stack "),(0,r._)("div",{class:"item",onClick:o[4]||(o[4]=o=>e.movePage("/portfolio5")),"data-aos":"fade-up","data-aos-delay":"700",style:{"background-image":"url(/m5.png)"}}," 자격증 "),(0,r._)("div",{class:"item",onClick:o[5]||(o[5]=o=>e.movePage("/portfolio6")),"data-aos":"fade-left","data-aos-delay":"800",style:{"background-image":"url(/m6.jpeg)",color:"rgb(138, 4, 255)"}}," etc. ")])])])}t(560);var j=t(1923),_=t(6905),P=t.n(_),C=(0,r.aZ)({name:"HomeView",components:{Swiper:j.tq,SwiperSlide:j.o5},setup(){const e=e=>{console.log(e)},o=()=>{console.log("slide change")};return{onSwiper:e,onSlideChange:o}},mounted(){P().init()},methods:{movePage(e){this.$router.push(e)}}});const O=(0,d.Z)(C,[["render",w]]);var S=O;const E=(0,r.uE)('<div class="contact-container"><div class="contact-header">Contact</div><div><img src="/person.png"></div><div class="contact-body">Email: <a href="mailto:kyb2475@gmail.com">kyb2475@gmail.com</a></div><div class="contact-body">Github: <a href="https://github.com/yongb2n" target="_blank">https://github.com/yongb2n</a></div><div class="contact-body">Blog: <a href="https://velog.io/@yongb2n" target="_blank">https://velog.io/@yongb2n</a></div></div>',1);function D(e,o,t,n,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"contact-back",onClick:o[0]||(o[0]=e=>a.movePage("/"))},"< Back"),E],64)}var T={methods:{movePage(e){this.$router.push(e)}}};const B=(0,d.Z)(T,[["render",D]]);var M=B;const Z=(0,r.uE)('<div class="introduce-container"><div class="introduce-header">Introduce</div><div class="introduce-img"><img src="/person2.png"></div><div class="introduce-body"><p>다양한 분야를 경험하고 학습하는 것을 좋아하는 사람입니다.</p><p>어떻게 하면 효율적으로 코드를 작성할 수 있을지 고민하고, 확장성, 유지보수성, 가독성이 좋은 코드가 좋은 코드라고 생각하고 개발하려고 노력합니다.</p><p>더 나은 개발 환경을 위한 새로운 아키텍쳐, 프레임워크, 라이브러리를 사용하기 위해 노력합니다.</p><p>실패를 두려워하지 않고 꾸준한 경험과 학습을 통해 성장해가는 개발자가 되겠습니다.</p></div></div>',1);function x(e,o,t,n,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"introduce-back",onClick:o[0]||(o[0]=e=>a.movePage("/"))},"< Back"),Z],64)}var H={methods:{movePage(e){this.$router.push(e)}}};const z=(0,d.Z)(H,[["render",x]]);var Y=z;const $=(0,r.uE)('<div class="project-container"><div class="project-header">Project</div><div class="project-img"><img src="/project.png"></div><div class="project-body"><p>DevForDev (개발자를 위한 커뮤니티 사이트)</p><p>2023.9.13 ~ </p><p>Front-end</p><p>시연 영상</p><video width="800" height="600" controls style="margin-top:20px;"><source src="https://www.notion.so/cc4f6731dca34cebbd753587a2c8d8c9?pvs=4#e2bc04641f76459b99023526e4574986" type="video/mp4"> Your browser does not support the video tag. </video></div></div>',1);function N(e,o,t,n,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"project-back",onClick:o[0]||(o[0]=e=>a.movePage("/"))},"< Back"),$],64)}var W={methods:{movePage(e){this.$router.push(e)}}};const A=(0,d.Z)(W,[["render",N]]);var F=A;const G=(0,r.uE)('<div class="tech-container"><div class="tech-header">Tech Stack</div><div class="tech-img"><img src="/tech.png"></div><div class="tech-body"><div><p class="tech-front">Front-End</p><div class="tech-stack"><p>HTML</p><p>CSS</p><p>JavaScript</p><p>React.js</p><p>Vue.js</p></div></div><div><p class="tech-backend">Back-End</p><div class="tech-stack"><p>Node.js</p><p>Express</p><p>MongoDB</p><p>Mongoose</p></div></div><div><p class="tech-etc">Etc</p><div class="tech-stack"><p>VSCode</p><p>Git</p><p>Github</p><p>Git Graph</p><p>Notion</p></div></div></div></div>',1);function L(e,o,t,n,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"tech-back",onClick:o[0]||(o[0]=e=>a.movePage("/"))},"< Back"),G],64)}var q={methods:{movePage(e){this.$router.push(e)}}};const R=(0,d.Z)(q,[["render",L]]);var V=R;const I=(0,r.uE)('<div class="prize-container"><div class="prize-header">자격증</div><div class="prize-body"><div class="prize-a"><p>리눅스마스터 2급</p><p>취득일: 2022.09.23</p><p>발급기관: 한국정보통신진흥협회</p></div><div class="prize-a"><p>SQLD</p><p>취득일: 2022.09.23</p><p>발급기관: 한국데이터산업진흥원</p></div><div class="prize-a"><p>정보처리기사</p><p>취득일: 2023.09.01</p><p>발급기관: 한국산업인력공단</p></div></div></div>',1);function J(e,o,t,n,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"prize-back",onClick:o[0]||(o[0]=e=>a.movePage("/"))},"< Back"),I],64)}var Q={methods:{movePage(e){this.$router.push(e)}}};const K=(0,d.Z)(Q,[["render",J]]);var U=K;const X=(0,r.uE)('<div class="etc-container"><div class="etc-header">추천하는 책</div><div class="etc-body"><div class="etc-a"><img src="/b1.jpeg"><p class="etc-a-name">이름: 역행자</p><div class="etc-a-rec">추천하는 이유</div><p> 자의식과 무의식, 유전자의 영향에 대한 이해와 해체가 인상적이었다. <br> 역행자의 길을 걷고싶은 사람에게 추천 하고싶다. <br> 이 책에서 말하길, 사람은 어디에 소속되어 정체성을 만들어 간다는 말이 와닿았다. <br> 누구나 한 번쯤 읽으면 책을 읽고 난 뒤에 그 사람의 인생에 터닝포인트가 될 수 있을 것 같은 책이다. </p></div></div></div>',1);function ee(e,o,t,n,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"etc-back",onClick:o[0]||(o[0]=e=>a.movePage("/"))},"< Back"),X],64)}var oe={methods:{movePage(e){this.$router.push(e)}}};const te=(0,d.Z)(oe,[["render",ee]]);var ne=te;const re=[{path:"/",name:"home",component:S},{path:"/portfolio1",name:"portfolio1",component:M},{path:"/portfolio2",name:"portfolio2",component:Y},{path:"/portfolio3",name:"portfolio3",component:F},{path:"/portfolio4",name:"portfolio4",component:V},{path:"/portfolio5",name:"portfolio5",component:U},{path:"/portfolio6",name:"portfolio6",component:ne}],ie=(0,u.p7)({history:(0,u.PO)("/"),routes:re});var ae=ie,ce=t(65),se=(0,ce.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),de=(t(9773),t(2642)),le=(0,de.Rd)();async function pe(){const e=await t.e(461).then(t.t.bind(t,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}pe(),(0,n.ri)(p).use(ae).use(se).use(le).mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var d=r();void 0!==d&&(o=d)}}return o}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){var e,o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var i=Object.create(null);t.r(i);var a={};e=e||[null,o({}),o([]),o(o)];for(var c=2&r&&n;"object"==typeof c&&!~e.indexOf(c);c=o(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},t.d(i,a),i}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/webfontloader.b4ac9e41.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="portfolio:";t.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var c,s;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==o+i){c=p;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",o+i),c.src=n),e[n]=[r];var u=function(o,t){c.onerror=c.onload=null,clearTimeout(v);var r=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),o)return o(t)},v=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(o,n){var r=t.o(e,o)?e[o]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(t,n){r=e[o]=[t,n]}));n.push(r[2]=i);var a=t.p+t.u(o),c=new Error,s=function(n){if(t.o(e,o)&&(r=e[o],0!==r&&(e[o]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+o+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,s,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,i,a=n[0],c=n[1],s=n[2],d=0;if(a.some((function(o){return 0!==e[o]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(s)var l=s(t)}for(o&&o(n);d<a.length;d++)i=a[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(5069)}));n=t.O(n)})();
//# sourceMappingURL=app.29ca2670.js.map