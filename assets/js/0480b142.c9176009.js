"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=c(r),p=o,y=m["".concat(i,".").concat(p)]||m[p]||l[p]||a;return r?n.createElement(y,s(s({ref:t},d),{},{components:r})):n.createElement(y,s({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],u={title:"FAQ"},i=void 0,c={unversionedId:"faq",id:"faq",title:"FAQ",description:"In this page, Frequently Asked Questions will be answered.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"defaultSidebar",previous:{title:"Simon Says",permalink:"/showcase/simon-says"},next:{title:"Terms of Use",permalink:"/terms"}},d={},l=[{value:"Music Commands",id:"music-commands",level:2},{value:"Do you make music commands?",id:"do-you-make-music-commands",level:3},{value:"Why don&#39;t you make music commands?",id:"why-dont-you-make-music-commands",level:3},{value:"3rd Party APIs",id:"3rd-party-apis",level:2},{value:"Refunds",id:"refunds",level:2},{value:"Can I get a refund?",id:"can-i-get-a-refund",level:3},{value:"Source Code",id:"source-code",level:2},{value:"Do you give source code?",id:"do-you-give-source-code",level:3},{value:"Requested Features",id:"requested-features",level:2},{value:"Why was my requested feature denied?",id:"why-was-my-requested-feature-denied",level:3}],m={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"box blurple animation no-background"},"In this page, ",(0,a.kt)("strong",null,"Frequently Asked Questions")," will be answered."),(0,a.kt)("h2",{id:"music-commands"},"Music Commands"),(0,a.kt)("h3",{id:"do-you-make-music-commands"},"Do you make music commands?"),(0,a.kt)("p",null,"The simple answer is, ",(0,a.kt)("u",null,(0,a.kt)("strong",{parentName:"p"},"no")),". "),(0,a.kt)("h3",{id:"why-dont-you-make-music-commands"},"Why don't you make music commands?"),(0,a.kt)("p",null,"I don't make music commands because it uses a 3rd party API from either YouTube (which is banned) and/or Spotify. I don't like using Spotify because I just don't like their API. I would love to use YouTube for music commands. But ",(0,a.kt)("strong",{parentName:"p"},"most music bots were cancelled")," because YouTube took action against Discord bots. Long story short, I will ",(0,a.kt)("strong",{parentName:"p"},"NEVER")," make music commands and never have. So sorry, ",(0,a.kt)("strong",{parentName:"p"},"you will have to use a public bot for that")," - since they're risking their project only to (possibly) get shutdown in the future by that music company."),(0,a.kt)("h2",{id:"3rd-party-apis"},"3rd Party APIs"),(0,a.kt)("p",null,"I don't like using third party APIs for Discord Bots. The reason for this is because 3rd party APIs can be very ",(0,a.kt)("strong",{parentName:"p"},"glitchy")," and ",(0,a.kt)("strong",{parentName:"p"},"unstable"),". 3rd party APIs can be useful for ",(0,a.kt)("strong",{parentName:"p"},"meme commands"),", ",(0,a.kt)("strong",{parentName:"p"},"dog/cat commands"),", and more commands that pull something from the internet. However, I just don't use them. Sorry."),(0,a.kt)("h2",{id:"refunds"},"Refunds"),(0,a.kt)("h3",{id:"can-i-get-a-refund"},"Can I get a refund?"),(0,a.kt)("p",null,"No, ",(0,a.kt)("strong",{parentName:"p"},"I don't give refunds under any normal circumstance.")," Since hosting costs money, you can't \"refund\" hosting. So if you make a payment for a quartly period (3 months), it's permanent. I don't give refunds for a server shutting down or a \"I don't need the bot anymore\" circumstance. If you'd like to cancel your plan, you can do so in the PingHost client panel. When you do this, please contact me on my ",(0,a.kt)("a",{parentName:"p",href:"/discord.html"},"Discord Server")," and your bot will be deleted. The source code for your bot will be stored on my pc for ",(0,a.kt)("strong",{parentName:"p"},"7 days")," then deleted - so if you purchase a tier again within 7 days, it's a little bit less work for me."),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("h3",{id:"do-you-give-source-code"},"Do you give source code?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No"),", I don't give source code to ",(0,a.kt)("strong",{parentName:"p"},"anyone")," under ",(0,a.kt)("strong",{parentName:"p"},"ANY circumstances"),". You will never get source code for your bot. The reason for this is because I don't know what you're going to do with that code. You may sell it to someone else or not even give me credit for something ",(0,a.kt)("strong",{parentName:"p"},"I made"),". "),(0,a.kt)("h2",{id:"requested-features"},"Requested Features"),(0,a.kt)("h3",{id:"why-was-my-requested-feature-denied"},"Why was my requested feature denied?"),(0,a.kt)("p",null,"The feature you requested to be added to your bot(s) may have been denied for the following reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature is to complicated"),(0,a.kt)("li",{parentName:"ul"},"Feature uses too much resources (e.g. database storage, RAM, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Feature isn't something I do - may be comparable to ",(0,a.kt)("a",{parentName:"li",href:"#music-commands"},"music commands")," or uses ",(0,a.kt)("a",{parentName:"li",href:"#3rd-party-apis"},"3rd party APIs"))))}p.isMDXComponent=!0}}]);