"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[839],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,c=new Array(s);c[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<s;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),c=["components"],a={title:"Subclassing",description:"Learn how to easily subclass"},i=void 0,u={unversionedId:"pycord-examples/subclassing",id:"pycord-examples/subclassing",title:"Subclassing",description:"Learn how to easily subclass",source:"@site/docs/pycord-examples/subclassing.md",sourceDirName:"pycord-examples",slug:"/pycord-examples/subclassing",permalink:"/pycord-examples/subclassing",draft:!1,tags:[],version:"current",frontMatter:{title:"Subclassing",description:"Learn how to easily subclass"},sidebar:"defaultSidebar",previous:{title:"Buttons",permalink:"/pycord-examples/discord-ui/buttons"}},l={},d=[],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"I recommend subclassing anything you can as with subclassing, you can customize more stuff that you need to. In any bot, I subclass mostly everything."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"title=\"Subclassing 'discord.Bot'\"",title:'"Subclassing',"'discord.Bot'\"":!0},'import discord\n\nclass Bot(discord.Bot):\n  def success(self):\n    embed = discord.Embed(color=discord.Colour.green(), description="\u2705 Successfully executed command action!")\n    return embed\n  def error(self):\n    embed = discord.Embed(color=discord.Colour.red(), description="\u274c This command failed!")\n    return embed\n\nbot = Bot(command_prefix="!", intents=discord.Intents.all())\n\n@bot.command()\nasync def success(ctx):\n  await ctx.send(embed=bot.success())\n  # sends a success message\n\n@bot.command()\nasync error(ctx):\n  await ctx.send(embed=bot.error())\n  # sends an error message\n\n:::info Related\n\u2022 [Buttons](/discord-ui/buttons\n:::\n')))}m.isMDXComponent=!0}}]);