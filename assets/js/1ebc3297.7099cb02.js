"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[5200],{8624:function(e,t,a){a.d(t,{v:function(){return s}});var i=a(7294),o=a(7674),s=Object.assign({},o.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},moonlightmanager:{author:"Moonlight Manager",avatar:"/img/moonlight.png",roleColor:"#fff99a",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"},bot:{author:"Bot",avatar:"blue",bot:!0},wumpusmanager:{author:"Wumpus Manager",avatar:"/img/wumpusmanager.PNG",bot:!0,roleColor:"#5865f2"}}});t.Z=function(e){var t=e.options,a=void 0===t?s:t,r=e.children;return i.createElement(o.qs.Provider,{value:a},i.createElement(o.dZ,null,r))}},1201:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c}});var i,o=a(7462),s=a(3366),r=(a(7294),a(3905)),n=a(7674),l=a(8624),d=["components"],m={title:"Giveaways",description:"A showcase of my Discord Giveaway system"},u=void 0,p={unversionedId:"showcase/giveaways",id:"showcase/giveaways",title:"Giveaways",description:"A showcase of my Discord Giveaway system",source:"@site/docs/showcase/giveaways.md",sourceDirName:"showcase",slug:"/showcase/giveaways",permalink:"/showcase/giveaways",draft:!1,tags:[],version:"current",frontMatter:{title:"Giveaways",description:"A showcase of my Discord Giveaway system"},sidebar:"defaultSidebar",previous:{title:"Forms",permalink:"/showcase/forms"},next:{title:"Moderation",permalink:"/showcase/moderation"}},g={},c=[{value:"Example",id:"example",level:2},{value:"Starting a Giveaway",id:"starting-a-giveaway",level:2},{value:"Ending a Giveaway",id:"ending-a-giveaway",level:2},{value:"Viewing a Giveaway",id:"viewing-a-giveaway",level:2}],v=(i="DiscordEmbedFields",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),h={toc:c};function y(e){var t=e.components,a=(0,s.Z)(e,d);return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"My giveaway system uses ",(0,r.kt)("span",{style:{color:"#4DB33D"}},"MongoDB"),", buttons, and other various light-weight systems in order to give Server Administrators the easiest experience when hosting a giveaway. Thus, providing a user an easy way to have their entry counted into the giveaway. My giveaway system is featured in ",(0,r.kt)("a",{href:"https://servermanagerbot.ml",style:{color:"#5865f2"}},"Server Manager"),"'s giveaway system."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This is what a giveaway looks like when starting it"),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(n.kK,{author:"Giveaways",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)(n._h,{embedTitle:"$5 Nitro Classic",authorIcon:"/img/logo.png",authorName:"Nziie Development",borderColor:"#5865F2",timestamp:"12/24/2022",footerIcon:"/img/logo.png",mdxType:"DiscordEmbed"},"$5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! \ud83c\udf89",(0,r.kt)(v,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,r.kt)(n.wY,{fieldTitle:"Ends",mdxType:"DiscordEmbedField"},(0,r.kt)("span",{className:"timestamp"},"in 12 hours")),(0,r.kt)(n.wY,{fieldTitle:"Host",mdxType:"DiscordEmbedField"},(0,r.kt)(n.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author))),(0,r.kt)("span",{slot:"footer"},"1 winner")),(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(n.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"giveaway start")),(0,r.kt)("div",{slot:"actions"},(0,r.kt)(n.jr,{mdxType:"DiscordButtons"},(0,r.kt)(n.qD,{type:"primary",emoji:"\ud83c\udf89",mdxType:"DiscordButton"}),(0,r.kt)(n.qD,{type:"secondary",disabled:"true",mdxType:"DiscordButton"},"10 entries"))))),(0,r.kt)("h2",{id:"starting-a-giveaway"},"Starting a Giveaway"),(0,r.kt)("p",null,"To start a giveaway, use the ",(0,r.kt)("span",{className:"mention"},"/giveaway start")," slash command with your bot. The bot should ask you to confirm all the details of the giveaway then ",(0,r.kt)("a",{parentName:"p",href:"#example"},"the giveaway will be started"),"."),(0,r.kt)("h2",{id:"ending-a-giveaway"},"Ending a Giveaway"),(0,r.kt)("p",null,"To end a giveaway, use the ",(0,r.kt)("span",{className:"mention"},"/giveaway end")," slash command with your bot. The bot should end the giveaway and randomly choose a winner from the giveaway entries stored in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is what it should look like when ending a giveaway")),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(n.kK,{author:"Giveaways",avatar:"blue",bot:!0,mdxType:"DiscordMessage"},(0,r.kt)(n._h,{embedTitle:"Ended | $5 Nitro Classic",authorIcon:"/img/logo.png",authorName:"Nziie Development",borderColor:"#2f3136",timestamp:"12/24/2022",footerIcon:"/img/logo.png",mdxType:"DiscordEmbed"},"$5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! \ud83c\udf89",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("blockquote",null,(0,r.kt)("span",{className:"timestamp"},"10:05 AM")," ",(0,r.kt)("a",{href:""},"Winner(s)")),(0,r.kt)(v,{slot:"fields",inline:"true",mdxType:"DiscordEmbedFields"},(0,r.kt)(n.wY,{fieldTitle:"Ended",mdxType:"DiscordEmbedField"},(0,r.kt)("span",{className:"timestamp"},"5 minutes ago")),(0,r.kt)(n.wY,{fieldTitle:"Host",mdxType:"DiscordEmbedField"},(0,r.kt)(n.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author))),(0,r.kt)("span",{slot:"footer"},"1 winner")),(0,r.kt)("div",{slot:"actions"},(0,r.kt)(n.jr,{mdxType:"DiscordButtons"},(0,r.kt)(n.qD,{type:"primary",disabled:"true",mdxType:"DiscordButton"},"10 entries"))))),(0,r.kt)("h2",{id:"viewing-a-giveaway"},"Viewing a Giveaway"),(0,r.kt)("p",null,"To view a giveaway, use the ",(0,r.kt)("span",{className:"mention"},"/giveaway view")," slash command with your bot. If you provide the ",(0,r.kt)("span",{className:"timestamp"},"giveaway_id")," argument it will pull up a specific giveaway. If that argument isn't provided, it will paginate through all the existing giveaways that are either still running or ended."))}y.isMDXComponent=!0}}]);