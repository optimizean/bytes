"use strict";(self.webpackChunkbytes2b=self.webpackChunkbytes2b||[]).push([[838],{4902:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return d}});var a=n(6540),r=n(557),l=n(6835),i=n(4794),o=n(3328),s=n(3601),c=n(8084),m=n(2174),g=n(56);var u=e=>{let{posts:t,pageContext:n}=e;const{tagsPath:a,basePath:g}=(0,s.A)();return(0,r.Y)(o.A,null,(0,r.Y)(l.so,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,r.Y)(l.DZ,{as:"h1",variant:"styles.h1",sx:{marginY:2}},n.name),(0,r.Y)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,variant:"links.secondary",marginY:2}},to:(0,m.A)(`/${g}/${a}`)},"View all tags")),(0,r.Y)(c.A,{posts:t,sx:{mt:[4,5]}}))};const p=e=>{let{pageContext:t}=e;return(0,r.Y)(g.A,{title:`Tag: ${t.name}`})};var d=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(u,Object.assign({posts:n.nodes},t))}},7715:function(e,t,n){var a=n(557),r=n(6540),l=n(4794),i=n(3601),o=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.A)();return(0,a.Y)(r.Fragment,null,t.map(((e,t)=>(0,a.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.A)(`/${s}/${n}/${e.slug}`)},e.name)))))}},8084:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(557),r=n(6540),l=n(6835),i=n(4794),o=n(7715);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.Y)(l.az,{mb:4},(0,a.Y)(i.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&n&&(0,a.Y)(r.Fragment,null," — ",(0,a.Y)(o.A,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.Y)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.Y)(s,{key:e.slug,post:e,showTags:r}))))}},56:function(e,t,n){n.d(t,{A:function(){return o}});var a=n(6540),r=n(4794),l=n(7533);var i=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,l.A)(),{siteTitle:g,siteTitleAlt:u,siteUrl:p,siteDescription:d,siteImage:E,author:f,siteLanguage:h}=m,v={title:t?`${t} | ${g}`:u,description:n||d,url:`${p}${i||""}`,image:`${p}${o||E}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:h}),a.createElement("title",null,v.title),a.createElement("meta",{name:"description",content:v.description}),a.createElement("meta",{name:"image",content:v.image}),a.createElement("meta",{property:"og:title",content:v.title}),a.createElement("meta",{property:"og:url",content:v.url}),a.createElement("meta",{property:"og:description",content:v.description}),a.createElement("meta",{property:"og:image",content:v.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:v.title}),a.createElement("meta",{name:"twitter:url",content:v.url}),a.createElement("meta",{name:"twitter:description",content:v.description}),a.createElement("meta",{name:"twitter:image",content:v.image}),a.createElement("meta",{name:"twitter:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)};function o(e){return a.createElement(a.Fragment,null,a.createElement(i,e),a.createElement("meta",{name:"google-site-verification",content:"qM97oJuX0VG4W5EXVzIVND8aLap6gpkx7uExvqR91Ys"}))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-ce83c076157409595e94.js.map