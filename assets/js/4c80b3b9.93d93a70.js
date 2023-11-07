"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[1499],{8624:function(e,t,a){a.d(t,{v:function(){return o}});var s=a(7294),n=a(7674),o=Object.assign({},n.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},moonlightmanager:{author:"Moonlight Manager",avatar:"/img/moonlight.png",roleColor:"#fff99a",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"},bot:{author:"Bot",avatar:"blue",bot:!0},wumpusmanager:{author:"Wumpus Manager",avatar:"/img/wumpusmanager.PNG",bot:!0,roleColor:"#5865f2"}}});t.Z=function(e){var t=e.options,a=void 0===t?o:t,r=e.children;return s.createElement(n.qs.Provider,{value:a},s.createElement(n.dZ,null,r))}},8989:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return u}});var s=a(7462),n=a(3366),o=(a(7294),a(3905)),r=a(7674),l=a(8624),i=["components"],m={title:"Modmail v3",description:"Modmail v3, a new, easy way to communicate with server members with a fully customizable system."},d=void 0,c={unversionedId:"showcase/modmail-v3",id:"showcase/modmail-v3",title:"Modmail v3",description:"Modmail v3, a new, easy way to communicate with server members with a fully customizable system.",source:"@site/docs/showcase/modmail-v3.md",sourceDirName:"showcase",slug:"/showcase/modmail-v3",permalink:"/showcase/modmail-v3",draft:!1,tags:[],version:"current",frontMatter:{title:"Modmail v3",description:"Modmail v3, a new, easy way to communicate with server members with a fully customizable system."},sidebar:"defaultSidebar",previous:{title:"Moderation",permalink:"/showcase/moderation"},next:{title:"Modmail",permalink:"/showcase/modmail"}},p={},u=[{value:"\ud83c\udf89 v3.0.0",id:"why-v3",level:2},{value:"Customizable Prefix",id:"customizable-prefix",level:2},{value:"Highly customizable",id:"highly-customizable",level:2},{value:"Integrated Menus System",id:"integrated-menus-system",level:2},{value:"Adding options",id:"adding-options",level:3},{value:"How it looks",id:"how-it-looks",level:3},{value:"Thread Logging",id:"thread-logging",level:2},{value:"Pastebin API Logs",id:"pastebin-api-logs",level:3},{value:"Permission Levels",id:"permission-levels",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Full Commands List",id:"commands-list",level:2}],k={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"why-v3"},"\ud83c\udf89 v3.0.0"),(0,o.kt)("p",null,"Modmail v3 includes a robust configuration system to configure 99% of the bot's responses, leaving the sky as the limit of possibilites of how your bot can be customized to your liking, theme, or needs. v3 showcases ",(0,o.kt)("strong",{parentName:"p"},"Discord's newest and greatest UI")," while providing you a crisp low-response time. Modmail v3 is the only bot you'll ever need for user support!"),(0,o.kt)("div",{className:"box blurple no-background shadow"},(0,o.kt)("div",{className:"title"},"Purchase"),"Purchase Modmail v3 at ",(0,o.kt)("strong",null,(0,o.kt)("a",{href:"https://r.nziie.xyz/purchase-modmail-v3",className:"discord-link"},"r.nziie.xyz/purchase-modmail-v3"))," for as cheap as ",(0,o.kt)("span",{className:"timestamp"},"2.25\u20ac/month"),"!"),(0,o.kt)("h2",{id:"customizable-prefix"},"Customizable Prefix"),(0,o.kt)("p",null,"Now, you can customize the prefix of your bot on the fly and have it update immediately. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{className:"timestamp"},"!config set prefix ?")," (changes to ",(0,o.kt)("strong",null,"?"),")")),(0,o.kt)(l.Z,{mdxType:"DiscordComponent"},(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"!config set prefix ?"),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Set ",(0,o.kt)("span",{className:"cb"},"prefix")," to ",(0,o.kt)("span",{className:"cb"},"?")))),(0,o.kt)("h2",{id:"highly-customizable"},"Highly customizable"),(0,o.kt)("p",null,"The system is highly customizable, giving you the power to customize it to your liking or needs. "),(0,o.kt)("details",{className:"customdetails",open:!0},(0,o.kt)("summary",null,"Configurations list"),(0,o.kt)("span",{className:"cb"},"modmail_category_id")," - The category where threads are created",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"modmail_guild_id")," - The guild ID of where modmail is based in.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"log_channel")," - The channel where modmail logs and update logs are sent",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"prefix")," - The prefix of the bot.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"mention")," - This is the message above user information for when a new thread is created in the channel. You can use a ping here.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"main_color")," - This is the main color for Modmail (help/about/ping embed messages, subscribe, move, etc.).",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"success_color")," - This is the color for Modmail when anything is successful.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"error_color")," - This is the color for Modmail when anything goes wrong, unsuccessful commands, or a stern warning.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"mod_color")," - This is the color of the messages sent by the moderators, this applies to messages within in the thread channel and the DM thread messages received by the recipient.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"recipient_color")," - This is the color of the messages sent by the recipient, this applies to messages received in the thread channel.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_creation_title")," - This is the message embed title sent to the recipient upon the creation of a new thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_creation_response")," - This is the message embed content sent to the recipient upon the creation of a new thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_creation_footer")," - This is the message embed footer sent to the recipient upon the creation of a new thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_close_title")," - This is the message embed title sent to the recipient upon the closure of a thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_close_response")," - This is the message embed content sent to the recipient upon the closure of a thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_close_footer")," - This is the message embed footer sent to the recipient upon the closure of a thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_move_title")," - This is the message embed content sent to the recipient upon contacting a member.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_move_notify")," - Notify the recipient if the thread was moved.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_move_response")," - This is the title of the embed sent to the recipient upon the contacting a member.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"thread_move_footer")," - This is the message embed footer sent to the recipient upon contacting a member.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"close_on_leave")," - Closes a modmail thread upon user leave automatically",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"confirm_thread_creation")," - Ensure users confirm that they want to create a new thread",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"confirm_thread_creation_title")," - Title for the embed message sent to users to confirm a thread creation",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"confirm_thread_creation_response")," - Description for the embed message sent to users to confirm a thread creation",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"confirm_thread_creation_accept")," - Emoji to accept a thread creation",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"confirm_thread_creation_deny")," - Emoji to deny a thread creation",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"disabled")," - Stop accepting new Modmail threads. Users won't be able to create new threads, but existing ones will still function as expected.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"disabled_new_threads_title")," - The title of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"disabled_new_threads_response")," - The body of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"disabled_new_threads_footer")," - The footer of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"sent_emoji")," - Emoji that indicates a thread message was sent",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"error_emoji")," - Emoji that indicates something was unsuccessful",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"blocked_emoji")," - Emoji that indicates a user is blocked from modmail",(0,o.kt)("br",null),(0,o.kt)("span",{className:"cb"},"success_emoji")," - Emoji that indicates success",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{mdxType:"DiscordComponent"},(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"!config set thread_creation_response Thanks for contacting our staff team, please wait for a response."),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Set ",(0,o.kt)("span",{className:"cb"},"thread_creation_response")," to ",(0,o.kt)("span",{className:"cb"},"Thanks for contacting our staff team, please wait for a response.")))),(0,o.kt)(l.Z,{mdxType:"DiscordComponent"},(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"!config set thread_close_response {closer.mention} has closed this thread."),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Set ",(0,o.kt)("span",{className:"cb"},"thread_creation_response")," to ",(0,o.kt)("span",{className:"cb"},"{closer.mention} has closed this thread.")))),(0,o.kt)(l.Z,{mdxType:"DiscordComponent"},(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"!config set success_emoji \u2611"),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Set ",(0,o.kt)("span",{className:"cb"},"success_emoji")," to \u2611"))),(0,o.kt)("h2",{id:"integrated-menus-system"},"Integrated Menus System"),(0,o.kt)("p",null,"The thread menu system allows users who are creating a thread to choose from preset options set by admins. Depending on which option they select, the thread will move itself to a category set by ",(0,o.kt)("em",{parentName:"p"},"you"),", in the option settings."),(0,o.kt)("h3",{id:"adding-options"},"Adding options"),(0,o.kt)(l.Z,{mdxType:"DiscordComponent"},(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"!menu options add"),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#5865f2",mdxType:"DiscordEmbed"},"Please send what you want the dropdown option label to be.")),(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"Report User"),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#5865f2",mdxType:"DiscordEmbed"},"Please send the description you would like to be displayed in the option. Use 'none' for no description.")),(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"Report a user (not staff member) for breaking server rules."),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#5865f2",mdxType:"DiscordEmbed"},"Please send the category ID you would like the thread to be sent to. Use 'none' for the thread not to be moved.")),(0,o.kt)(r.kK,{profile:"nziie",roleColor:"none",mdxType:"DiscordMessage"},"1089262352530161684"),(0,o.kt)(r.kK,{profile:"modmail",avatar:"blue",mdxType:"DiscordMessage"},(0,o.kt)(r._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Successfully created menu option!",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("blockquote",null,(0,o.kt)("strong",null,"Label:")," Report User",(0,o.kt)("br",null),(0,o.kt)("strong",null,"Description:")," Report a user (not staff member) for breaking server rules.",(0,o.kt)("br",null),(0,o.kt)("strong",null,"Move to:")," 1089262352530161684")))),(0,o.kt)("h3",{id:"how-it-looks"},"How it looks"),(0,o.kt)("img",{className:"betterimage",src:"https://cdn.nziie.is-a.dev/u/files/7thrGbvIIjhs"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can have as many options as you'd like, as long as it doesn't exceed the Discord select menu option limit."),(0,o.kt)("h2",{id:"thread-logging"},"Thread Logging"),(0,o.kt)("p",null,"v3 showcases enhanced thread logging. You can manage the ",(0,o.kt)("em",{parentName:"p"},"global thread logs")," with the ",(0,o.kt)("span",{className:"cb"},"!logs")," command and sub-commands."),(0,o.kt)("h3",{id:"pastebin-api-logs"},"Pastebin API Logs"),(0,o.kt)("p",null,"Yup! Instead of the old ",(0,o.kt)("em",{parentName:"p"},"gloomy")," Discord file logs like v1 or v2, v3 uses ",(0,o.kt)("a",{parentName:"p",href:"https://pastebin.com"},"Pastebin")," logs. The entire thread history is uploaded to Pastebin for ease of use and makes it easier to view later."),(0,o.kt)("h2",{id:"permission-levels"},"Permission Levels"),(0,o.kt)("p",null,"v3 uses permission levels to decide which user can use what command."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Improvements are being made to v3, so if you have a v1 or v2 modmail bot, you will need to ",(0,o.kt)("a",{parentName:"p",href:"https://redirect.nziie.is-a.dev/donate"},"pay $2 USD")," for your bot to be migrated to v3. This includes me manually transferring any snippets you have, or other configurations you want saved in v3; which is a pain."),(0,o.kt)("div",{className:"box blurple no-background shadow"},(0,o.kt)("div",{className:"title"},"Purchase"),"Purchase Modmail v3 at ",(0,o.kt)("strong",null,(0,o.kt)("a",{href:"https://r.nziie.xyz/purchase-modmail-v3",className:"discord-link"},"r.nziie.xyz/purchase-modmail-v3"))," for as cheap as ",(0,o.kt)("span",{className:"timestamp"},"2.25\u20ac/month"),"!"),(0,o.kt)("div",{className:"box green no-background shadow"},(0,o.kt)("div",{className:"title"},"Join my Development Server!"),"You will need to join my development server in order to purchase this new system. ",(0,o.kt)("a",{href:"https://discord.gg/b9GPHgJ6TK",className:"discord-link"},"Join here"),"."),(0,o.kt)("h2",{id:"commands-list"},"Full Commands List"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!anonreply ","<","message",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Reply to a modmail thread anonymously")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!move ","<","category_name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Move a modmail thread")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!logging ","[user]")),(0,o.kt)("td",{parentName:"tr",align:null},"Get previous Modmail thread logs of a member, or all if user isn't provided.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!logging delete ","[user]")),(0,o.kt)("td",{parentName:"tr",align:null},"Wipe a log entry from the database, don't provide a log ID to wipe all.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!help ","[command]")),(0,o.kt)("td",{parentName:"tr",align:null},"Shows this message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!contact ","<","member",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Contact a user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!block ","[user][reason]")),(0,o.kt)("td",{parentName:"tr",align:null},"Block a user from modmail, reason is optional and is ",(0,o.kt)("strong",{parentName:"td"},"not")," shown to the user.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!close ","[time][message]")),(0,o.kt)("td",{parentName:"tr",align:null},"Close a thread with an optional time argument")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!close cancel ","[time][message]")),(0,o.kt)("td",{parentName:"tr",align:null},"Cancel a closeure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!status ")),(0,o.kt)("td",{parentName:"tr",align:null},"Customize the bot's status loop")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!status remove ")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove an entry to the bot's status loop")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!status add ")),(0,o.kt)("td",{parentName:"tr",align:null},"Add an entry to the bot's status loop")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!snippet ","[name]")),(0,o.kt)("td",{parentName:"tr",align:null},"Invoke a snippet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!snippet remove ","[name]")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove a snippet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!snippet add ","[name]")),(0,o.kt)("td",{parentName:"tr",align:null},"Add a snippet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!reply ","<","message",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Reply to a modmail thread")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!config ")),(0,o.kt)("td",{parentName:"tr",align:null},"Manage configurations for the bot.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!config list ")),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!config set ")),(0,o.kt)("td",{parentName:"tr",align:null},"Set a configuration variable and its value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!menu ")),(0,o.kt)("td",{parentName:"tr",align:null},"Customize options users can select when creating a Modmail thread.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!menu embed_text ")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the text that is displayed in the embed of the menu message.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!menu enable ")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable the thread menu.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!menu dropdown_placeholder ")),(0,o.kt)("td",{parentName:"tr",align:null},"Set the text that is displayed in the dropdown menu.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!menu disable ")),(0,o.kt)("td",{parentName:"tr",align:null},"Disable the thread menu.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!menu options ")),(0,o.kt)("td",{parentName:"tr",align:null},"Manage options for the Modmail menu")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!alert ","[member]")),(0,o.kt)("td",{parentName:"tr",align:null},"Get notified of the next thread message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!unblock ","[user]")),(0,o.kt)("td",{parentName:"tr",align:null},"Unblock a user from modmail.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!permissions ")),(0,o.kt)("td",{parentName:"tr",align:null},"Manage permissions for each permission level")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!permissions view ")),(0,o.kt)("td",{parentName:"tr",align:null},"View the roles for all permission levels")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!permissions add ")),(0,o.kt)("td",{parentName:"tr",align:null},"Add a role to a permission level. Permission levels: ",(0,o.kt)("inlineCode",{parentName:"td"},"OWNER"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ADMIN"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"MODERATOR"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"SUPPORTER"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"REGULAR"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{className:"cb"},"!permissions remove ")),(0,o.kt)("td",{parentName:"tr",align:null},"Remove a role from a permission level. Permission levels: ",(0,o.kt)("inlineCode",{parentName:"td"},"OWNER"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"ADMIN"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"MODERATOR"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"SUPPORTER"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"REGULAR"))))))}h.isMDXComponent=!0}}]);