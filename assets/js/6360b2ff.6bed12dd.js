"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[2816],{8624:function(e,t,a){a.d(t,{v:function(){return i}});var n=a(7294),r=a(7674),i=Object.assign({},r.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},moonlightmanager:{author:"Moonlight Manager",avatar:"/img/moonlight.png",roleColor:"#fff99a",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"},bot:{author:"Bot",avatar:"blue",bot:!0},wumpusmanager:{author:"Wumpus Manager",avatar:"/img/wumpusmanager.PNG",bot:!0,roleColor:"#5865f2"}}});t.Z=function(e){var t=e.options,a=void 0===t?i:t,o=e.children;return n.createElement(r.qs.Provider,{value:a},n.createElement(r.dZ,null,o))}},3665:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(7674),l=a(8624),s=["components"],d={title:"Moderation",description:"A showcase of my Discord moderation systems"},m=void 0,k={unversionedId:"showcase/moderation",id:"showcase/moderation",title:"Moderation",description:"A showcase of my Discord moderation systems",source:"@site/docs/showcase/moderation.md",sourceDirName:"showcase",slug:"/showcase/moderation",permalink:"/showcase/moderation",draft:!1,tags:[],version:"current",frontMatter:{title:"Moderation",description:"A showcase of my Discord moderation systems"},sidebar:"defaultSidebar",previous:{title:"Giveaways",permalink:"/showcase/giveaways"},next:{title:"Modmail v3",permalink:"/showcase/modmail-v3"}},u={},p=[{value:"Moderation v1 (slash commands)",id:"v1",level:2},{value:"Main Commands",id:"v1-commands",level:3},{value:"Cases",id:"v1-cases",level:3},{value:"Examples",id:"v1-examples",level:3},{value:"Warnings",id:"warnings",level:4},{value:"Kick",id:"kick",level:4},{value:"Moderation v2 (prefix commands)",id:"v2",level:2},{value:"Cases",id:"v2-cases",level:3},{value:"Examples",id:"v2-examples",level:3},{value:"Warnings",id:"warnings-1",level:4},{value:"Kick",id:"kick-1",level:4},{value:"Ban",id:"ban",level:4}],c={toc:p};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Currently, I have 2 moderation systems that you can choose from. ",(0,i.kt)("strong",{parentName:"p"},"v1")," includes a more robust command usage, ",(0,i.kt)("strong",{parentName:"p"},"slash commands"),". While ",(0,i.kt)("strong",{parentName:"p"},"v2")," uses prefix commands, however, it uses a custom flags system similar to ",(0,i.kt)("a",{parentName:"p",href:"https://wickbot.com"},"Wick"),"'s flag system and uses a better severity system compared to v1. Both versions include a cases system, in which cases are permanently stored in the database for future use until the case is deleted."),(0,i.kt)("h2",{id:"v1"},"Moderation v1 (slash commands)"),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"box yellow no-background shadow"},(0,i.kt)("div",{className:"title"},"Warning"),"You ",(0,i.kt)("strong",null,"cannot")," use this system with normal prefix commands, it will not be modified to meet your needs usage-wise."),(0,i.kt)("h3",{id:"v1-commands"},"Main Commands"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/warn ","<","member",">"," ","[duration][reason]"," ","[custom_reason][moderator_hidden]")),(0,i.kt)("td",{parentName:"tr",align:null},"Warn a member (",(0,i.kt)("inlineCode",{parentName:"td"},"moderator_hidden")," hides the moderator from the actioned user)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/warnings ","[member]")),(0,i.kt)("td",{parentName:"tr",align:null},"View warnings for yourself or a member")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/remove_warning ","<","id",">"," ","[notify_user=True]")),(0,i.kt)("td",{parentName:"tr",align:null},"Remove a warning (",(0,i.kt)("inlineCode",{parentName:"td"},"notify_user")," will direct message the warned member that it was deleted)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/delete_all_warnings")),(0,i.kt)("td",{parentName:"tr",align:null},"Delete ",(0,i.kt)("strong",{parentName:"td"},"ALL")," warnings from your server. This is useful if your bot is acting slow when warning users")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/ban ","<","member",">"," ","[reason][custom_reason]"," ","[moderator_hidden][delete_message_days]")),(0,i.kt)("td",{parentName:"tr",align:null},"Ban a member from the server (",(0,i.kt)("inlineCode",{parentName:"td"},"delete_message_days")," is the amount of message days to delete)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/kick ","<","member",">"," ","[reason][custom_reason]"," ","[moderator_hidden]")),(0,i.kt)("td",{parentName:"tr",align:null},"Kick a member from the server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/purge ","<","amount",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Purge an amount of messages in the current channel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/mute ","<","member",">"," ","<","duration",">"," ","[reason][custom_reason]"," ","[moderator_hidden]")),(0,i.kt)("td",{parentName:"tr",align:null},"Mute a member for a duration using ",(0,i.kt)("strong",{parentName:"td"},"Discord's Timeout Feature"),". (Example ",(0,i.kt)("inlineCode",{parentName:"td"},"duration")," argument: '1h' = 1 hour)")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warnings that are set to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," are removed after the duration, but the case linked to that warning ID is not deleted for further reference.")),(0,i.kt)("h3",{id:"v1-cases"},"Cases"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/case ","<","case_id",">")),(0,i.kt)("td",{parentName:"tr",align:null},"View/manage a case - ",(0,i.kt)("strong",{parentName:"td"},"you can edit a case in this command"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/createcase ","<","member",">"," ","<","reason",">"," ","[action=Other][proof=image url]"," ","[duration]")),(0,i.kt)("td",{parentName:"tr",align:null},"Create a case for a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/case ","[member]")),(0,i.kt)("td",{parentName:"tr",align:null},"View cases for the whole server or yourself")))),(0,i.kt)("h3",{id:"v1-examples"},"Examples"),(0,i.kt)("h4",{id:"warnings"},"Warnings"),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"bot",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(o.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"warn")),(0,i.kt)(o._h,{authorIcon:"/img/logo.png",authorName:"Warned vNziie--#7777",borderColor:"#fee75c",mdxType:"DiscordEmbed"},(0,i.kt)("img",{src:"/img/warning.png",className:"emoji"})," ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ",(0,i.kt)("strong",null,"(vNziie--#7777 | 550476809280421903)")," has successfully been warned.",(0,i.kt)("span",{slot:"footer"},"Case ID: x"),(0,i.kt)(o.Rb,{slot:"fields",inline:"false",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",inline:"false",mdxType:"DiscordEmbedField"},"A bad developer!"),(0,i.kt)(o.wY,{fieldTitle:"Moderator",inline:"false",mdxType:"DiscordEmbedField"},"vNziie--#7777"),(0,i.kt)(o.wY,{fieldTitle:"Member Notified",inline:"false",mdxType:"DiscordEmbedField"},"True"))))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"kick"},"Kick"),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"bot",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(o.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"kick")),(0,i.kt)(o._h,{authorIcon:"/img/logo.png",authorName:"Kicked vNziie--#7777",borderColor:"#e74c3c",mdxType:"DiscordEmbed"},(0,i.kt)("img",{src:"/img/kick.png",className:"emoji"})," ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ",(0,i.kt)("strong",null,"(vNziie--#7777 | 550476809280421903)")," has successfully been kicked.",(0,i.kt)("span",{slot:"footer"},"Case ID: x"),(0,i.kt)(o.Rb,{slot:"fields",inline:"false",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",inline:"false",mdxType:"DiscordEmbedField"},"A bad developer!"),(0,i.kt)(o.wY,{fieldTitle:"Moderator",inline:"false",mdxType:"DiscordEmbedField"},"vNziie--#7777"),(0,i.kt)(o.wY,{fieldTitle:"Member Notified",inline:"false",mdxType:"DiscordEmbedField"},"True"))))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"box green no-background shadow"},"If you'd like the v1 moderation system in your bot, simply just ask!"),(0,i.kt)("h2",{id:"v2"},"Moderation v2 (prefix commands)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"!warn ","<","member",">"," ","<","flags",">","\ud83d\udea9")),(0,i.kt)("td",{parentName:"tr",align:null},"Issue an warning")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"!case ","<","warning_id",">")),(0,i.kt)("td",{parentName:"tr",align:null},"View an warning by ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"!delwarn ","<","warning_id",">")),(0,i.kt)("td",{parentName:"tr",align:null},"Delete an warning by ID (Admins only)")))),(0,i.kt)("p",null,"(Above is unfinished)"),(0,i.kt)("details",{className:"customdetails",open:!0},(0,i.kt)("summary",null,"\ud83d\udea9 Command Flags"),(0,i.kt)("h4",null,"Warning Flags"),(0,i.kt)("blockquote",null,(0,i.kt)("span",{className:"timestamp"},"?s")," - How sensitive or how bad the warn is for the user; accepts: ",(0,i.kt)("code",null,"minor")," ",(0,i.kt)("code",null,"low")," ",(0,i.kt)("code",null,"medium")," and ",(0,i.kt)("code",null,"high")," as types",(0,i.kt)("br",null),(0,i.kt)("span",{className:"timestamp"},"?r")," - The reason for the action, can be any type of string"),(0,i.kt)("h4",null,"Mute Flags"),(0,i.kt)("blockquote",null,(0,i.kt)("span",{className:"timestamp"},"?r")," - The reason for the action, can be any type of string",(0,i.kt)("br",null),(0,i.kt)("span",{className:"timestamp"},"?t")," - A time argument for the action (e.g. ",(0,i.kt)("code",null,"1h"),", ",(0,i.kt)("code",null,"1d"),", ",(0,i.kt)("code",null,"10m"),"; 1 hour, 1 day, 10 minutes)"),(0,i.kt)("h4",null,"Kick Flags"),(0,i.kt)("blockquote",null,(0,i.kt)("span",{className:"timestamp"},"?r")," - The reason for the action, can be any type of string"),(0,i.kt)("h4",null,"Ban Flags"),(0,i.kt)("blockquote",null,(0,i.kt)("span",{className:"timestamp"},"?r")," - The reason for the action, can be any type of string",(0,i.kt)("br",null),(0,i.kt)("span",{className:"timestamp"},"?ddays")," - The number of days to delete messages from the member")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warnings that are set to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," are removed after the duration, but the case linked to that warning ID is not deleted for further reference.")),(0,i.kt)("h3",{id:"v2-cases"},"Cases"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/case ","<","case_id",">")),(0,i.kt)("td",{parentName:"tr",align:null},"View/manage a case - ",(0,i.kt)("strong",{parentName:"td"},"you can edit a case in this command"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/createcase ","<","member",">"," ","<","reason",">"," ","[action=Other][proof=image url]"," ","[duration]")),(0,i.kt)("td",{parentName:"tr",align:null},"Create a case for a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("span",{className:"mention"},"/case ","[member]")),(0,i.kt)("td",{parentName:"tr",align:null},"View cases for the whole server or yourself")))),(0,i.kt)("h3",{id:"v2-examples"},"Examples"),(0,i.kt)("h4",{id:"warnings-1"},"Warnings"),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!warn ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ?r A bad developer!"),(0,i.kt)(o.kK,{profile:"bot",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)(o._h,{authorIcon:"/img/logo.png",authorName:"Warned vNziie--#7777",borderColor:"#fee75c",mdxType:"DiscordEmbed"},(0,i.kt)("img",{src:"/img/warning.png",className:"emoji"})," ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ",(0,i.kt)("strong",null,"(vNziie--#7777 | 550476809280421903)")," has successfully been warned.",(0,i.kt)("span",{slot:"footer"},"Case ID: x"),(0,i.kt)(o.Rb,{slot:"fields",inline:"false",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",inline:"false",mdxType:"DiscordEmbedField"},"A bad developer!"),(0,i.kt)(o.wY,{fieldTitle:"Moderator",inline:"false",mdxType:"DiscordEmbedField"},"vNziie--#7777"),(0,i.kt)(o.wY,{fieldTitle:"Member Notified",inline:"false",mdxType:"DiscordEmbedField"},"True"))))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"kick-1"},"Kick"),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!kick ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ?r A bad developer!"),(0,i.kt)(o.kK,{profile:"bot",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)(o._h,{authorIcon:"/img/logo.png",authorName:"Kicked vNziie--#7777",borderColor:"#e74c3c",mdxType:"DiscordEmbed"},(0,i.kt)("img",{src:"/img/kick.png",className:"emoji"})," ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ",(0,i.kt)("strong",null,"(vNziie--#7777 | 550476809280421903)")," has successfully been kicked.",(0,i.kt)("span",{slot:"footer"},"Case ID: x"),(0,i.kt)(o.Rb,{slot:"fields",inline:"false",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",inline:"false",mdxType:"DiscordEmbedField"},"A bad developer!"),(0,i.kt)(o.wY,{fieldTitle:"Moderator",inline:"false",mdxType:"DiscordEmbedField"},"vNziie--#7777"),(0,i.kt)(o.wY,{fieldTitle:"Member Notified",inline:"false",mdxType:"DiscordEmbedField"},"True"))))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"ban"},"Ban"),(0,i.kt)(l.Z,{mdxType:"DiscordComponent"},(0,i.kt)(o.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!ban ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ?r A bad developer! ?ddays 7"),(0,i.kt)(o.kK,{profile:"bot",bot:!0,mdxType:"DiscordMessage"},(0,i.kt)(o._h,{authorIcon:"/img/logo.png",authorName:"Banned vNziie--#7777",borderColor:"red",mdxType:"DiscordEmbed"},(0,i.kt)("img",{src:"/img/ban.png",className:"emoji"})," ",(0,i.kt)(o.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author)," ",(0,i.kt)("strong",null,"(vNziie--#7777 | 550476809280421903)")," has successfully been banned.",(0,i.kt)("span",{slot:"footer"},"Case ID: x"),(0,i.kt)(o.Rb,{slot:"fields",inline:"false",mdxType:"DiscordEmbedFields"},(0,i.kt)(o.wY,{fieldTitle:"Reason",inline:"false",mdxType:"DiscordEmbedField"},"A bad developer!"),(0,i.kt)(o.wY,{fieldTitle:"Moderator",inline:"false",mdxType:"DiscordEmbedField"},"vNziie--#7777"),(0,i.kt)(o.wY,{fieldTitle:"Member Notified",inline:"false",mdxType:"DiscordEmbedField"},"True"))))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"box green no-background shadow"},"If you'd like the v2 moderation system in your bot, simply just ask!"))}g.isMDXComponent=!0}}]);