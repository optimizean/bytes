"use strict";(self.webpackChunkbytes2b=self.webpackChunkbytes2b||[]).push([[156],{2502:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return d}});var a=n(6540),r=n(557),l=n(6835),i=n(4794),o=n(2648),s=n(8084),c=n(3601),m=n(2174),g=n(7169);var u=e=>{let{posts:t}=e;const{tagsPath:n,basePath:a}=(0,c.A)();return(0,r.Y)(o.A,null,(0,r.Y)(l.so,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,r.Y)(l.DZ,{as:"h1",variant:"styles.h1",sx:{marginY:2}},"Blog"),(0,r.Y)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,variant:"links.secondary",marginY:2}},to:(0,m.A)(`/${a}/${n}`)},"View all tags")),(0,r.Y)(s.A,{posts:t,sx:{mt:[4,5]}}))};const p=()=>(0,r.Y)(g.A,{title:"Blog"});var d=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(u,Object.assign({posts:n.nodes},t))}},7715:function(e,t,n){var a=n(557),r=n(6540),l=n(4794),i=n(3601),o=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.A)();return(0,a.Y)(r.Fragment,null,t.map(((e,t)=>(0,a.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.Y)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.A)(`/${s}/${n}/${e.slug}`)},e.name)))))}},8084:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(557),r=n(6540),l=n(6835),i=n(4794),o=n(7715);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.Y)(l.az,{mb:4},(0,a.Y)(i.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&n&&(0,a.Y)(r.Fragment,null," — ",(0,a.Y)(o.A,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.Y)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.Y)(s,{key:e.slug,post:e,showTags:r}))))}},7169:function(e,t,n){var a=n(6540),r=n(4794),l=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,l.A)(),{siteTitle:g,siteTitleAlt:u,siteUrl:p,siteDescription:d,siteImage:h,author:f,siteLanguage:y}=m,E={title:t?`${t} | ${g}`:u,description:n||d,url:`${p}${i||""}`,image:`${p}${o||h}`};return a.createElement(a.Fragment,null,a.createElement("html",{lang:y}),a.createElement("title",null,E.title),a.createElement("meta",{name:"description",content:E.description}),a.createElement("meta",{name:"image",content:E.image}),a.createElement("meta",{property:"og:title",content:E.title}),a.createElement("meta",{property:"og:url",content:E.url}),a.createElement("meta",{property:"og:description",content:E.description}),a.createElement("meta",{property:"og:image",content:E.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:E.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:E.title}),a.createElement("meta",{name:"twitter:url",content:E.url}),a.createElement("meta",{name:"twitter:description",content:E.description}),a.createElement("meta",{name:"twitter:image",content:E.image}),a.createElement("meta",{name:"twitter:image:alt",content:E.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-blog-query-tsx-f0e331655467a9f15693.js.map