"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[488],{8624:function(e,t,a){a.d(t,{v:function(){return r}});var o=a(7294),n=a(7674),r=Object.assign({},n.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"}}});t.Z=function(e){var t=e.options,a=void 0===t?r:t,i=e.children;return o.createElement(n.qs.Provider,{value:a},o.createElement(n.dZ,null,i))}},7440:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=a(7674),l=a(8624),s=["components"],m={title:"Modmail Guide",description:"The modmail guide for Molten Advertising (staff only)"},d=void 0,p={unversionedId:"blogs/molten-advertising/modmail-guide",id:"blogs/molten-advertising/modmail-guide",title:"Modmail Guide",description:"The modmail guide for Molten Advertising (staff only)",source:"@site/docs/blogs/molten-advertising/modmail-guide.md",sourceDirName:"blogs/molten-advertising",slug:"/blogs/molten-advertising/modmail-guide",permalink:"/blogs/molten-advertising/modmail-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"Modmail Guide",description:"The modmail guide for Molten Advertising (staff only)"},sidebar:"defaultSidebar",previous:{title:"Moderation Guide",permalink:"/blogs/molten-advertising/moderation-guide"},next:{title:"Pycord Examples",permalink:"/category/pycord-examples"}},u={},k=[{value:"Modmail Commands",id:"modmail-commands",level:2},{value:"Snippet Commands",id:"snippet-commands",level:2},{value:"Modmail Rules",id:"modmail-rules",level:2},{value:"Example Situation",id:"example-situation",level:2},{value:"Ready to handle threads?",id:"ready-to-handle-threads",level:2}],g={toc:k};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Overview",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this guide you will learn how to use and operate ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/gbFJm7D7BJ"},"Molten Support"),". "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/gbFJm7D7BJ"},"Molten Support"),"'s prefix is ",(0,r.kt)("inlineCode",{parentName:"p"},".")," ","[",(0,r.kt)("strong",{parentName:"p"},"period"),"]")),(0,r.kt)("details",{className:"customdetails"},(0,r.kt)("summary",null,"\ud83d\udd11 Key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"[foo|bar]")," - Text separated in brackets means you can use either ",(0,r.kt)("strong",{parentName:"p"},"foo")," or ",(0,r.kt)("strong",{parentName:"p"},"bar")," to get the same command result")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"[arg=value]")," - An argument in brackets means this is an ",(0,r.kt)("strong",{parentName:"p"},"optional argument"),", if it's not provided a default value of '",(0,r.kt)("strong",{parentName:"p"},"value"),"' will take it's place")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"<arg>")," - An argument in less and greater than signs means that this is a ",(0,r.kt)("strong",{parentName:"p"},"required argument"),", it must be provided or the command will fail"))),(0,r.kt)("h2",{id:"modmail-commands"},"Modmail Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".","[reply","|","r]"," ","<","message",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Reply to a modmail thread (this is an anonymous reply)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".","[close","|","c]"," ",(0,r.kt)("a",null),"[time]"," ",(0,r.kt)("a",null),"[message]")),(0,r.kt)("td",{parentName:"tr",align:null},"Close a thread with an optional duration to wait to close the thread (timed close) - ",(0,r.kt)("inlineCode",{parentName:"td"},"message")," will appear on the user's end. This can be 'Have a great day'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".alert ","[member]")),(0,r.kt)("td",{parentName:"tr",align:null},"Notify yourself or another member of the next thread messaged received")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".move ","<","name",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Move a thread to a category by name")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"category_name")," can be a shorthand word of a category name."),(0,r.kt)("p",{parentName:"admonition"},"For example, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},".move moderation")," to move a thread to the moderation team.")),(0,r.kt)("h2",{id:"snippet-commands"},"Snippet Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".","[snippet","|","s]"," ",(0,r.kt)("a",null),"[name]"," ")),(0,r.kt)("td",{parentName:"tr",align:null},"View all the snippets or send one in the thread by providing ",(0,r.kt)("inlineCode",{parentName:"td"},"name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".","[snippet","|","s]"," add ","<","name",">"," ","<","value",">")),(0,r.kt)("td",{parentName:"tr",align:null},"(Management Only) Add a snippet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,".","[snippet","|","s]"," remove ","<","name",">"," ")),(0,r.kt)("td",{parentName:"tr",align:null},"(Management Only) Remove/delete a snippet")))),(0,r.kt)("h2",{id:"modmail-rules"},"Modmail Rules"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," When a thread is made, all online staff will get pinged. ",(0,r.kt)("strong",{parentName:"p"},"To claim a thread, simply say 'mine'"),", other staff should obey that you claimed the thread. If you\u2019re inactive in a thread for a few hours when a user responds, they have the right to 'overclaim.'"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2."),' There is such a thing as "over-claiming" where you claim a claimed thread. ',(0,r.kt)("strong",{parentName:"p"},"You can only overclaim if you are a management member and need your serious intervention"),", you were asked by the person who originally claimed the ticket to claim or if the person who claimed it isn't responding to your ping after 6 hours. Overclaim for no good reason will get you a strike or your modmail permissions revoked for a duration of time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," When handling a thread, ",(0,r.kt)("strong",{parentName:"p"},"remain professional at all times"),". ",(0,r.kt)("strong",{parentName:"p"},"Don't use shortened words"),' such as "',(0,r.kt)("strong",{parentName:"p"},"k"),'" or "',(0,r.kt)("strong",{parentName:"p"},"xD"),'" or "',(0,r.kt)("strong",{parentName:"p"},"lol"),"\". That doesn't look very professional. With this, capitalization and grammar must be used as well. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," ",(0,r.kt)("u",null,"Stay respectful at all times"),". Everyone must be treated with respect regardless of their words. In this case, ping an online management member."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," If someone reported a member, you aren't supposed to be sharing the actions. Use the proper snippets according to the situation. You may not tell a thread user ",(0,r.kt)("strong",{parentName:"p"},"any")," actions against anyone. If you do this, you may receive a staff strike or your modmail license will be ",(0,r.kt)("strong",{parentName:"p"},"revoked"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," Move a thread to the correct team category with ",(0,r.kt)("inlineCode",{parentName:"p"},".move <team>"),". Please don't handle threads that aren't for your department. "),(0,r.kt)("h2",{id:"example-situation"},"Example Situation"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u279d ",(0,r.kt)("span",{className:"mention"},"#member-0000")),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"hello",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".s hi"),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"Hello, what can we assist you with today?",(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".alert"),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},"You will be notified on a new thread message received!"),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},(0,r.kt)(i.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author),(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"why can't I send messages in lounge?",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".s loungerole"),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"You can\u2019t talk in the main lounge because you don\u2019t have the correct role. Please read ",(0,r.kt)("a",{href:"#"},"this")," announcement.",(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"okay, thanks that's all for today.",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".s thanks"),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"Thanks for contacting Molten Advertising support staff! We hope you had a good experience and that we full-filled your request!",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,"This thread will close ",(0,r.kt)("strong",null,"in 10 minutes"),". Please note that replying to this message will cancel the timed closure. ",(0,r.kt)("strong",null,"Please only reply to this message if you need more help.")),(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".close 10m"),(0,r.kt)(i.kK,{profile:"moltensupport",mdxType:"DiscordMessage"},"\ud83d\udd12 This thread will close ",(0,r.kt)("span",{className:"timestamp"},"in 10 minutes")," if the user doesn't reply within that time limit."),(0,r.kt)(i.kK,{profile:"wumpus",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{borderColor:"#5865f2",mdxType:"DiscordEmbed"},"This thread has been closed."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"ready-to-handle-threads"},"Ready to handle threads?"),(0,r.kt)("p",null,"Message ",(0,r.kt)("span",{className:"mention"},"@vNziie--")," on Discord and make sure to say you've read the modmail guide!"))}h.isMDXComponent=!0}}]);