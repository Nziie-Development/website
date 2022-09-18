"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[394],{5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),u=a(7094),s=a(2466),m="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a,i=e.lazy,c=e.block,p=e.defaultValue,g=e.values,k=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,x=(0,r.useState)(y),E=x[0],D=x[1],M=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var z=w[k];null!=z&&z!==E&&b.some((function(e){return e.value===z}))&&D(z)}var C=function(e){var t=e.currentTarget,a=M.indexOf(t),n=b[a].value;n!==E&&(_(t),D(n),null!=k&&T(k,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=M.indexOf(e.currentTarget)+1;a=null!=(n=M[r])?n:M[0];break;case"ArrowLeft":var l,i=M.indexOf(e.currentTarget)-1;a=null!=(l=M[i])?l:M[M.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return M.push(e)},onKeyDown:Z,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},4629:function(e,t,a){var n=a(7294),r=a(9960);t.Z=function(e){var t=e.type,a=e.label,l=e.icon,i=e.link,o=e.isDisabled,u=e.onClick,s=e.children,m=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},d=n.createElement("button",{className:"pyc-button"+(t?" "+m(t):""),"aria-label":a||(null==s?void 0:s.toString()),disabled:o,onClick:u},l&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),s&&n.createElement("span",{className:"pyc-button__label"},s));return i?n.createElement(r.Z,{className:"pyc-button"+(t?" "+m(t):""),"aria-label":a||(null==s?void 0:s.toString()),href:i},l&&n.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},l),s&&n.createElement("span",{className:"pyc-button__label"},s)):d}},8624:function(e,t,a){a.d(t,{v:function(){return l}});var n=a(7294),r=a(7674),l=Object.assign({},r.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"},wumpusmanager:{author:"Wumpus Manager",avatar:"/img/wumpusmanager.PNG",bot:!0,roleColor:"#5865f2"}}});t.Z=function(e){var t=e.options,a=void 0===t?l:t,i=e.children;return n.createElement(r.qs.Provider,{value:a},n.createElement(r.dZ,null,i))}},5226:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=(a(5488),a(5162),a(4629),a(7674)),o=a(8624),u=["components"],s={slug:"wa-moderation",title:"Wumpus Advertisements Mod Guide",authors:"nziie",tags:["Guides","Wumpus Advertisements"]},m=void 0,d={permalink:"/blog/wa-moderation",source:"@site/blog/2022-9-4-wa-mod-guide.md",title:"Wumpus Advertisements Mod Guide",description:"Tasks",date:"2022-09-04T00:00:00.000Z",formattedDate:"September 4, 2022",tags:[{label:"Guides",permalink:"/blog/tags/guides"},{label:"Wumpus Advertisements",permalink:"/blog/tags/wumpus-advertisements"}],readingTime:1.385,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"who?",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"wa-moderation",title:"Wumpus Advertisements Mod Guide",authors:"nziie",tags:["Guides","Wumpus Advertisements"]},prevItem:{title:"A break from Discord",permalink:"/blog/break"},nextItem:{title:"First blog post",permalink:"/blog/first"}},c={authorsImageUrls:[void 0]},p=[{value:"Tasks",id:"tasks",level:2},{value:"Advertisement Warnings",id:"ad-warnings",level:2},{value:"Example",id:"example",level:3},{value:"Moderation",id:"moderation",level:2},{value:"Commands",id:"commands",level:3},{value:"Example",id:"example-1",level:3}],g={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tasks"},"Tasks"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Send 10 messages in the main server"),(0,l.kt)("li",{parentName:"ul"},"Issue ",(0,l.kt)("strong",{parentName:"li"},"5")," valid advertisements warnings")),(0,l.kt)("h2",{id:"ad-warnings"},"Advertisement Warnings"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Advertisement warnings are our form of verbal warnings for advertisements. "),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("hr",null),(0,l.kt)(o.Z,{mdxType:"DiscordComponent"},(0,l.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".warn ",(0,l.kt)(i.Hz,{highlight:!1,mdxType:"DiscordMention"},o.v.profiles.member.author)," ?s aw ?c ",(0,l.kt)("span",{className:"mention"},"#\ud83c\udfe0\u30fbcommunity-servers")," ?r Lack of description"),(0,l.kt)(i.kK,{profile:"wumpusmanager",mdxType:"DiscordMessage"},(0,l.kt)(i.Hz,{highlight:!1,mdxType:"DiscordMention"},o.v.profiles.member.author)," has been warned ",(0,l.kt)(i.Hz,{highlight:!0,mdxType:"DiscordMention"},o.v.profiles.nziie.author)," for a severity of: ",(0,l.kt)("code",null,"Advertisement Warning"),(0,l.kt)("br",null),"They now have ",(0,l.kt)("code",null,"1")," warning(s) in that category, and ",(0,l.kt)("code",null,"1")," total warnings.")),(0,l.kt)("h2",{id:"moderation"},"Moderation"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Please make sure to use command flags correctly and use commands correctly."),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"* ",(0,l.kt)("code",null,".warn ","<","member",">"," ","[flags]")),(0,l.kt)("td",{parentName:"tr",align:null},"Warn a member")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,".warnings ","[member]")),(0,l.kt)("td",{parentName:"tr",align:null},"View warnings for a member or yourself")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,".delwarn ","<","warning_id",">")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete a warning by ID")))),(0,l.kt)("details",{className:"customdetails"},(0,l.kt)("summary",null,"\ud83d\udea9 * Valid Flags"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag Usage"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"?r")),(0,l.kt)("td",{parentName:"tr",align:null},"The reason for the warning/action"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"?r DM advertising"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"?s")),(0,l.kt)("td",{parentName:"tr",align:null},"The severity for the warning/action"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"?s low"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"?c")),(0,l.kt)("td",{parentName:"tr",align:null},"The channel (mainly meant for ad warnings)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"?c #unlimited-advertising")))))),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("hr",null),(0,l.kt)(o.Z,{mdxType:"DiscordComponent"},(0,l.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".warn ",(0,l.kt)(i.Hz,{highlight:!1,mdxType:"DiscordMention"},o.v.profiles.member.author)," ?s low ?r Spam"),(0,l.kt)(i.kK,{profile:"wumpusmanager",mdxType:"DiscordMessage"},(0,l.kt)(i.Hz,{highlight:!1,mdxType:"DiscordMention"},o.v.profiles.member.author)," has been warned by ",(0,l.kt)(i.Hz,{highlight:!0,mdxType:"DiscordMention"},o.v.profiles.nziie.author)," for a severity of: ",(0,l.kt)("code",null,"Low"),(0,l.kt)("br",null),"They now have ",(0,l.kt)("code",null,"1")," warning(s) in that category, and ",(0,l.kt)("code",null,"1")," total warnings.")))}k.isMDXComponent=!0}}]);