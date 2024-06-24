"use strict";(self.webpackChunkbytes2b=self.webpackChunkbytes2b||[]).push([[456],{1173:function(e,t,n){n.d(t,{p:function(){return h},A:function(){return d}});var l=n(6540),a=n(557),o=n(6835),r=n(3328),i=n(7715),s=n(7169);var c=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var m=e=>{let{data:{post:t},children:n}=e;return(0,a.Y)(r.A,null,(0,a.Y)(o.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,a.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.Y)("time",null,t.date),t.tags&&(0,a.Y)(l.Fragment,null," — ",(0,a.Y)(i.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.Y)("span",null,t.timeToRead," min read")),(0,a.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.Y)(c,{post:t}))};const h=e=>{var t,n,l;let{data:{post:o}}=e;return(0,a.Y)(s.A,{title:o.title,description:o.description?o.description:o.excerpt,image:o.banner?null===(t=o.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:o.slug,canonicalUrl:o.canonicalUrl})};function d(e){let{...t}=e;return l.createElement(m,t)}},7715:function(e,t,n){var l=n(557),a=n(6540),o=n(4794),r=n(3601),i=n(2174);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,r.A)();return(0,l.Y)(a.Fragment,null,t.map(((e,t)=>(0,l.Y)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.Y)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.A)(`/${s}/${n}/${e.slug}`)},e.name)))))}},7169:function(e,t,n){var l=n(6540),a=n(4794),o=n(7533);t.A=e=>{let{title:t="",description:n="",pathname:r="",image:i="",children:s=null,canonicalUrl:c=""}=e;const u=(0,o.A)(),{siteTitle:m,siteTitleAlt:h,siteUrl:d,siteDescription:p,siteImage:g,author:E,siteLanguage:y}=u,b={title:t?`${t} | ${m}`:h,description:n||p,url:`${d}${r||""}`,image:`${d}${i||g}`};return l.createElement(l.Fragment,null,l.createElement("html",{lang:y}),l.createElement("title",null,b.title),l.createElement("meta",{name:"description",content:b.description}),l.createElement("meta",{name:"image",content:b.image}),l.createElement("meta",{property:"og:title",content:b.title}),l.createElement("meta",{property:"og:url",content:b.url}),l.createElement("meta",{property:"og:description",content:b.description}),l.createElement("meta",{property:"og:image",content:b.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:b.title}),l.createElement("meta",{name:"twitter:url",content:b.url}),l.createElement("meta",{name:"twitter:description",content:b.description}),l.createElement("meta",{name:"twitter:image",content:b.image}),l.createElement("meta",{name:"twitter:image:alt",content:b.description}),l.createElement("meta",{name:"twitter:creator",content:E}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),c?l.createElement("link",{rel:"canonical",href:c}):null,s)}},2677:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.p},default:function(){return s}});var l=n(6540),a=n(8453);function o(e){const t=Object.assign({h2:"h2",p:"p",strong:"strong",em:"em",ol:"ol",li:"li",sup:"sup",a:"a",h3:"h3",blockquote:"blockquote",img:"img",ul:"ul",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4",section:"section"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h2,null,"What to expect from here on out"),"\n",l.createElement(t.p,null,"What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ",l.createElement(t.strong,null,"bold text"),", unordered lists, ordered lists, code blocks, block quotes, ",l.createElement(t.em,null,"and even italics"),"."),"\n",l.createElement(t.p,null,"It's important to cover all of these use cases for a few reasons:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"We want everything to look good out of the box."),"\n",l.createElement(t.li,null,"Really just the first reason, that's the whole point of the plugin."),"\n",l.createElement(t.li,null,"Here's a third pretend reason though a list with three items looks more realistic than a list with two items."),"\n"),"\n",l.createElement(t.p,null,"Footnotes",l.createElement(t.sup,null,l.createElement(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label"},"1"))," should also work."),"\n",l.createElement(t.p,null,"Now we're going to try out another header style."),"\n",l.createElement(t.h3,null,"Typography should be easy"),"\n",l.createElement(t.p,null,"So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable."),"\n",l.createElement(t.p,null,"Something a wise person once told me about typography is:"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad."),"\n"),"\n",l.createElement(t.p,null,"It's probably important that images look okay here by default as well:"),"\n",l.createElement(t.img,{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}),"\n",l.createElement(t.p,null,"Now I'm going to show you an example of an unordered list to make sure that looks good, too:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"So here is the first item in this list."),"\n",l.createElement(t.li,null,"In this example we're keeping the items short."),"\n",l.createElement(t.li,null,"Later, we'll use longer, more complex list items."),"\n"),"\n",l.createElement(t.p,null,"And that's the end of this section."),"\n",l.createElement(t.h2,null,"What if we stack headings?"),"\n",l.createElement(t.h3,null,"We should make sure that looks good, too."),"\n",l.createElement(t.p,null,"Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be."),"\n",l.createElement(t.h3,null,"When a heading comes after a paragraph …"),"\n",l.createElement(t.p,null,"When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"I often do this thing where list items have headings.")),"\n",l.createElement(t.p,null,"For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right."),"\n",l.createElement(t.p,null,"I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Since this is a list, I need at least two items.")),"\n",l.createElement(t.p,null,"I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"It's not a bad idea to add a third item either.")),"\n",l.createElement(t.p,null,"I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it."),"\n"),"\n"),"\n",l.createElement(t.p,null,"After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading."),"\n",l.createElement(t.h2,null,"Code should look okay by default."),"\n",l.createElement(t.p,null,"I think most people are going to use ",l.createElement(t.a,{href:"https://highlightjs.org/"},"highlight.js")," or ",l.createElement(t.a,{href:"https://prismjs.com/"},"Prism")," or something if they want to style their code blocks but it wouldn't hurt to make them look ",l.createElement(t.em,null,"okay")," out of the box, even with no syntax highlighting."),"\n",l.createElement(t.p,null,"Here's what a default ",l.createElement(t.code,null,"tailwind.config.js")," file looks like at the time of writing:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},"module.exports = {\n  purge: [],\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n}\n")),"\n",l.createElement(t.p,null,"Hopefully that looks good enough to you."),"\n",l.createElement(t.h3,null,"What about nested lists?"),"\n",l.createElement(t.p,null,"Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Nested lists are rarely a good idea."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,'You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.'),"\n",l.createElement(t.li,null,"Nested navigation in UIs is a bad idea too, keep things as flat as possible."),"\n",l.createElement(t.li,null,"Nesting tons of folders in your source code is also not helpful."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Since we need to have more items, here's another one."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I'm not sure if we'll bother styling more than two levels deep."),"\n",l.createElement(t.li,null,"Two is already too much, three is guaranteed to be a bad idea."),"\n",l.createElement(t.li,null,"If you nest four levels deep you belong in prison."),"\n"),"\n"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Two items isn't really a list, three is good though."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Again please don't nest lists if you want people to actually read your content."),"\n",l.createElement(t.li,null,"Nobody wants to look at this."),"\n",l.createElement(t.li,null,"I'm upset that we even have to bother styling this."),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,"The most annoying thing about lists in Markdown is that ",l.createElement(t.code,null,"<li>")," elements aren't given a child ",l.createElement(t.code,null,"<p>")," tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"For example, here's another nested list.")),"\n",l.createElement(t.p,null,"But this time with a second paragraph."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"These list items won't have ",l.createElement(t.code,null,"<p>")," tags"),"\n",l.createElement(t.li,null,"Because they are only one line each"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"But in this second top-level list item, they will.")),"\n",l.createElement(t.p,null,"This is especially annoying because of the spacing on this paragraph."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"As you can see here, because I've added a second line, this list item now has a ",l.createElement(t.code,null,"<p>")," tag."),"\n",l.createElement(t.p,null,"This is the second line I'm talking about by the way."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Finally here's another list item so it's more like a list."),"\n"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"A closing list item, but with no nested list, because why not?"),"\n"),"\n"),"\n",l.createElement(t.p,null,"And finally a sentence to close off this section."),"\n",l.createElement(t.h2,null,"There are other elements we need to style"),"\n",l.createElement(t.p,null,"I almost forgot to mention links, like ",l.createElement(t.a,{href:"https://tailwindcss.com"},"this link to the Tailwind CSS website"),". We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier."),"\n",l.createElement(t.p,null,"We even included table styles, check it out:"),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Wrestler"),l.createElement(t.th,null,"Origin"),l.createElement(t.th,null,"Finisher"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,'Bret "The Hitman" Hart'),l.createElement(t.td,null,"Calgary, AB"),l.createElement(t.td,null,"Sharpshooter")),l.createElement(t.tr,null,l.createElement(t.td,null,"Stone Cold Steve Austin"),l.createElement(t.td,null,"Austin, TX"),l.createElement(t.td,null,"Stone Cold Stunner")),l.createElement(t.tr,null,l.createElement(t.td,null,"Randy Savage"),l.createElement(t.td,null,"Sarasota, FL"),l.createElement(t.td,null,"Elbow Drop")),l.createElement(t.tr,null,l.createElement(t.td,null,"Vader"),l.createElement(t.td,null,"Boulder, CO"),l.createElement(t.td,null,"Vader Bomb")),l.createElement(t.tr,null,l.createElement(t.td,null,"Razor Ramon"),l.createElement(t.td,null,"Chuluota, FL"),l.createElement(t.td,null,"Razor's Edge")))),"\n",l.createElement(t.p,null,"We also need to make sure inline code looks good, like if I wanted to talk about ",l.createElement(t.code,null,"<span>")," elements or tell you the good news about ",l.createElement(t.code,null,"@tailwindcss/typography"),"."),"\n",l.createElement(t.h3,null,"Sometimes I even use ",l.createElement(t.code,null,"code")," in headings"),"\n",l.createElement(t.p,null,"Even though it's probably a bad idea, and historically I've had a hard time making it look good. This ",l.createElement(t.em,null,'"wrap the code blocks in backticks"')," trick works pretty well though really."),"\n",l.createElement(t.p,null,"Another thing I've done in the past is put a ",l.createElement(t.code,null,"code")," tag inside of a link, like if I wanted to tell you about the ",l.createElement(t.a,{href:"https://github.com/tailwindcss/docs"},l.createElement(t.code,null,"tailwindcss/docs"))," repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it."),"\n",l.createElement(t.h4,null,"We haven't used an ",l.createElement(t.code,null,"h4")," yet"),"\n",l.createElement(t.p,null,"But now we have. Please don't use ",l.createElement(t.code,null,"h5")," or ",l.createElement(t.code,null,"h6")," in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a ",l.createElement(t.code,null,"before")," pseudo-element to scream at you if you use an ",l.createElement(t.code,null,"h5")," or ",l.createElement(t.code,null,"h6"),"."),"\n",l.createElement(t.p,null,"We don't style them at all out of the box because ",l.createElement(t.code,null,"h4")," elements are already so small that they are the same size as the body copy. What are we supposed to do with an ",l.createElement(t.code,null,"h5"),", make it ",l.createElement(t.em,null,"smaller")," than the body copy? No thanks."),"\n",l.createElement(t.h3,null,"We still need to think about stacked headings though."),"\n",l.createElement(t.h4,null,"Let's make sure we don't screw that up with ",l.createElement(t.code,null,"h4")," elements, either."),"\n",l.createElement(t.p,null,"Phew, with any luck we have styled the headings above this text and they look pretty good."),"\n",l.createElement(t.p,null,"Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document."),"\n",l.createElement(t.p,null,"What I've written here is probably long enough, but adding this final sentence can't hurt."),"\n",l.createElement(t.section,{"data-footnotes":!0,className:"footnotes"},l.createElement(t.h2,{className:"sr-only",id:"footnote-label"},"Footnotes"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,{id:"user-content-fn-1"},"\n",l.createElement(t.p,null,"This is a footnote. ",l.createElement(t.a,{href:"#user-content-fnref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content"},"↩")),"\n"),"\n"),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},i=n(1173);function s(e){return l.createElement(i.A,e,l.createElement(r,e))}i.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-markdown-reference-index-mdx-2d7a45a7ecbddacacedf.js.map