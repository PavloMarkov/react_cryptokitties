(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),s=a.n(r),i=(a(15),a(16),a(17),a(0)),o=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("section",{children:Object(i.jsx)("a",{href:"https://github.com/PavloMarkov?tab=repositories",className:"footer__link",children:"Powered by Pavlo Markov"})})})},l=(a(19),function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("nav",{children:"Kittens"})})}),j=a(2),u=a(3),b=a(9),d=a.n(b);function p(e){return fetch("https://ftl-cryptokitties.fly.dev/api/crypto_kitties"+e,{method:"GET",headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var O,g=function(e){return p(e)},h=function(e){return p(e)};!function(e){e.NONE="",e.ID="id",e.NAME="name",e.CATEGORY="category",e.PRICE="price"}(O||(O={}));a(20);var f=a.p+"static/media/paw_loader.01294796.png",_=function(){return Object(i.jsxs)("div",{className:"loader",children:[Object(i.jsx)("h2",{children:"Cat's are coming!"}),Object(i.jsx)("img",{className:"loader__paw",src:f,alt:"loading..."})]})},x=(a(21),a(7)),m=a(10),v=a.n(m),N=(a(26),function(e){var t=e.list,a=e.pageData,c=Object(n.useState)(a.currentPage+1),r=Object(u.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(t),j=Object(u.a)(l,2),b=j[0],d=j[1];return Object(i.jsx)(v.a,{pageStart:a.currentPage,loadMore:function(){h("?per_page=".concat(a.catsPerPage,"&page=").concat(s+1,"&sort_by=").concat(a.sortBy||"id","&sort_dir=").concat(a.sortMethod||"asc")).then((function(e){d((function(t){return[].concat(Object(x.a)(t),Object(x.a)(e.cats))})),o((function(e){return e+1}))}))},hasMore:a.pageCount>s,loader:Object(i.jsx)("div",{className:"loader",children:"Loading ..."},0),children:Object(i.jsx)("div",{className:"card-list",children:b.map((function(e){return Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card__info",children:[Object(i.jsx)("h1",{className:"card__name",children:e.name}),Object(i.jsxs)("div",{className:"card__img",children:[Object(i.jsx)("div",{className:"card__category",children:e.category}),Object(i.jsx)("img",{src:e.image_url,alt:"Here should be cat ".concat(e.name," & it's")}),Object(i.jsx)("div",{className:"card__price",children:"".concat(e.price,"$")})]}),Object(i.jsx)("div",{className:"card__available",children:"Now is ".concat(e.available?"available":"not available")})]})},e.id)}))})})}),y=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1],b=Object(n.useState)([]),p=Object(u.a)(b,2),f=p[0],x=p[1],m=Object(n.useState)({sortBy:O.NONE,sortMethod:"",pageCount:0,catsPerPage:50,currentPage:0}),v=Object(u.a)(m,2),y=v[0],P=v[1],C="?page=".concat(y.currentPage+1,"&per_page=").concat(y.catsPerPage),k="&sort_by=".concat(y.sortBy||"id","&sort_dir=").concat(y.sortMethod||"asc");Object(n.useEffect)((function(){l(!0),fetch("https://ftl-cryptokitties.fly.dev/api/crypto_kitties").then((function(e){return e.json()})).then((function(e){x(e.cats),P((function(t){return Object(j.a)(Object(j.a)({},t),{},{pageCount:e.pagination_info.total_pages})}))})).finally((function(){c(!1),l(!1)}))}),[]),Object(n.useEffect)((function(){a||(l(!0),h(C+k).then((function(e){x(e.cats),P((function(t){return Object(j.a)(Object(j.a)({},t),{},{pageCount:e.pagination_info.total_pages})}))})).finally((function(){return l(!1)})))}),[y.currentPage]);return Object(i.jsx)("main",{className:"page__main",children:o?Object(i.jsx)(_,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"page__sort sort",children:[Object(i.jsx)("h4",{className:"sort__title",children:"Sort by:"}),Object(i.jsxs)("select",{onChange:function(e){return P((function(t){return Object(j.a)(Object(j.a)({},t),{},{sortBy:e.target.value})}))},className:"sort__select",value:y.sortBy,children:[Object(i.jsx)("option",{value:O.NONE,children:"Need to sort?"}),Object(i.jsx)("option",{value:O.ID,children:"ID"}),Object(i.jsx)("option",{value:O.NAME,children:"Name"}),Object(i.jsx)("option",{value:O.CATEGORY,children:"Category"}),Object(i.jsx)("option",{value:O.PRICE,children:"Price"})]}),Object(i.jsxs)("select",{onChange:function(e){return P((function(t){return Object(j.a)(Object(j.a)({},t),{},{sortMethod:e.target.value})}))},className:"sort__select",value:y.sortMethod,children:[Object(i.jsx)("option",{value:"",children:"Sort type"}),Object(i.jsx)("option",{value:"asc",children:"asc"}),Object(i.jsx)("option",{value:"desc",children:"desc"})]}),Object(i.jsx)("button",{type:"button",className:"sort_btn",onClick:function(){return l(!0),void g("?".concat(k)).then((function(e){x(e.cats),P((function(t){return Object(j.a)(Object(j.a)({},t),{},{currentPage:0,pageCount:e.pagination_info.total_pages,catsPerPage:e.pagination_info.limit_per_page})}))})).finally((function(){return l(!1)}))},children:"Sort cats!"}),Object(i.jsx)("h4",{children:"Meow's per page"}),Object(i.jsxs)("select",{onChange:function(e){return P((function(t){return Object(j.a)(Object(j.a)({},t),{},{catsPerPage:+e.target.value})}))},className:"sort__select",id:"per-page",value:y.catsPerPage,children:[Object(i.jsx)("option",{value:50,children:"50"}),Object(i.jsx)("option",{value:20,children:"20"}),Object(i.jsx)("option",{value:100,children:"100"})]}),Object(i.jsx)("button",{type:"button",className:"pagination_btn",onClick:function(){return P((function(e){return Object(j.a)(Object(j.a)({},e),{},{currentPage:0})}))},children:"View cats!"})]}),Object(i.jsx)(d.a,{breakLabel:"...",nextLabel:"next >",previousLabel:"< prev",onPageChange:function(e){P((function(t){return Object(j.a)(Object(j.a)({},t),{},{currentPage:e.selected})}))},pageRangeDisplayed:3,marginPagesDisplayed:1,forcePage:y.currentPage,pageCount:y.pageCount,containerClassName:"pagination__container",previousLinkClassName:"pagination__previous",breakClassName:"pagination__page",nextLinkClassName:"pagination__next",pageClassName:"pagination__page",disabledClassName:"pagination__disabled",activeClassName:"pagination__active",activeLinkClassName:"pagination__link"}),Object(i.jsx)(N,{list:f,pageData:y})]})})},P=function(){return Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)(l,{}),Object(i.jsx)(y,{}),Object(i.jsx)(o,{})]})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(P,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.f85ebaba.chunk.js.map