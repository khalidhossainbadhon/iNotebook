(this.webpackJsonpnews_app=this.webpackJsonpnews_app||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(17),r=a.n(n),i=(a(26),a(4)),l=(a(27),a(7)),o=a(1),j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(l.b,{className:"navbar-brand",to:"/",children:Object(o.jsx)("b",{children:" NewsMonkey "})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link",to:"/business",children:"business"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link",to:"/entertainment",children:"entertainment"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link",to:"/health",children:"health"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link",to:"/science",children:"science"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link",to:"/sports",children:"sports"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(l.b,{className:"nav-link",to:"/technology",children:"technology"})})]})})]})})})},b=a(11),d=a.n(b),u=a(16),h=function(e){var t=e.title,a=e.description,c=e.url,s=e.urlToImage,n=e.author,r=e.publishedAt,i=e.source;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:s,className:"card-img-top",alt:"https://jooinn.com/images/beautiful-sea-5.jpg"}),Object(o.jsxs)("span",{className:"position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger",children:[Object(o.jsx)("span",{className:"badge bg-danger",children:i.name}),Object(o.jsx)("span",{className:"visually-hidden",children:"unread messages"})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:t}),Object(o.jsx)("p",{className:"card-text",children:a}),Object(o.jsx)("p",{className:"card-text",children:Object(o.jsxs)("small",{className:"text-muted",children:["Last updated ",Object(o.jsx)("b",{children:r})," ago by ",Object(o.jsx)("i",{children:n})]})}),Object(o.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",className:"btn btn-sm btn-outline-dark",children:"Read more"})]})]})})},g=a.p+"static/media/loading.5e01ee79.gif",p=function(){return Object(o.jsx)("div",{className:"text-center w-100",children:Object(o.jsx)("img",{src:g,alt:"Loding"})})},x=a(20),O=function(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!0),l=Object(i.a)(r,2),j=l[0],b=l[1],g=Object(c.useState)(1),O=Object(i.a)(g,2),m=O[0],v=O[1],y=Object(c.useState)(0),f=Object(i.a)(y,2),N=f[0],S=f[1],k=function(){var t=Object(u.a)(d.a.mark((function t(){var a,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setProgress(70),a="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=").concat(m,"&pageSize=").concat(e.pageSize),t.next=4,fetch(a);case 4:return c=t.sent,t.next=7,c.json();case 7:s=t.sent,e.setProgress(90),n(s.articles),S(s.totalResults),b(!1),e.setProgress(100);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){k(),document.title="NewsMonkey-".concat(e.category)}),[]);var w=function(){var t=Object(u.a)(d.a.mark((function t(){var a,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=".concat(e.country,"&category=").concat(e.category,"&apiKey=d093053d72bc40248998159804e0e67d&page=").concat(m+1,"&pageSize=").concat(e.pageSize),v(m+1),t.next=4,fetch(a);case 4:return c=t.sent,t.next=7,c.json();case 7:r=t.sent,n(s.concat(r.articles)),S(r.totalResults);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{className:"text-center my-5 pt-5",style:{textTransform:"capitalize"},children:[e.category,"-Top Headings"]}),j&&Object(o.jsx)(p,{}),Object(o.jsx)(x.a,{dataLength:s.length,next:w,hasMore:s.length!==N,loader:Object(o.jsx)(p,{}),children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:s.map((function(e){return console.log(e.category),Object(o.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 my-3",children:[" ",Object(o.jsx)(h,{urlToImage:e.urlToImage,url:e.url,title:e.title,description:e.description,author:e.author,publishedAt:e.publishedAt,source:e.source})]},e.url)}))})})})]})};O.defaultProps={country:"us",pageSize:8,category:"genaral"};var m=O,v=a(2),y=a(21);var f=function(){var e=12,t=Object(c.useState)(0),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(o.jsxs)(l.a,{children:[Object(o.jsxs)("header",{children:[Object(o.jsx)(j,{}),Object(o.jsx)(y.a,{color:"#f11946",progress:s,onLoaderFinished:function(){return n(100)}})]}),Object(o.jsxs)(v.c,{children:[Object(o.jsx)(v.a,{exact:!0,path:"/",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"general"},"general")}),Object(o.jsx)(v.a,{exact:!0,path:"/business",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"business"},"business")}),Object(o.jsx)(v.a,{exact:!0,path:"/entertainment",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"entertainment"},"entertainment")}),Object(o.jsx)(v.a,{exact:!0,path:"/health",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"health"},"health")}),Object(o.jsx)(v.a,{exact:!0,path:"/science",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"science"},"science")}),Object(o.jsx)(v.a,{exact:!0,path:"/sports",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"sports"},"sports")}),Object(o.jsx)(v.a,{exact:!0,path:"/technology",children:Object(o.jsx)(m,{setProgress:n,pageSize:e,country:"us",category:"technology"},"technology")})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.a7dba578.chunk.js.map