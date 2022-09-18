"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"break","metadata":{"permalink":"/blog/break","source":"@site/blog/2022-9-17-break.md","title":"A break from Discord","description":"Hey everyone, I\'d just like to brief you on the 1-2 week (maybe longer) break I am going to be starting on 9/18/2022 (Sunday PST).","date":"2022-09-17T00:00:00.000Z","formattedDate":"September 17, 2022","tags":[],"readingTime":2.15,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"who?","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"break","title":"A break from Discord","authors":"nziie"},"nextItem":{"title":"Wumpus Advertisements Mod Guide","permalink":"/blog/wa-moderation"}},"content":"Hey everyone, I\'d just like to brief you on the **1-2 week** (maybe longer) break I am going to be starting on 9/18/2022 (Sunday PST). \\n\\nI have taken it upon myself to decide to take a **1-2 week** break from Discord for my own good. I\'ve realized that it\'s taken control over my life because of how many projects I manage. I\'m starting to see how it can negatively affect my physical and mental health. In myself, i\'ve seen a decline in my mental health, I used to go out with friends and stuff but now that dopamine is starting to take control of my actions, it\'s noticeable. I\'m definitely not as productive as I was a month ago - and I think to get there I need to step away from the productivity. \\n\\n:::caution Warning\\n\\nI will be deleting Discord off my phone and will be unplugging my PC so that it\'s not tempting to touch Discord. So I won\'t get **ANY** notifications.\\n\\n:::\\n\\nTherefore, I am going to be a **Dopamine Detox**. Dopamine is essentially a __chemical in your brain that is released when you do go on social media (Discord), listen to music, eat junk food or sweets, and other things that can be bad for you__. So, I will not be on Discord or social media for 1-2 weeks (not sure the duration). I know this may be bad timing since some of you are requesting features for your bots. All I\'m asking is just 2 weeks so that I can get rid of my dopamine and I\'ll be very productive. If I continue like this, I don\'t see great actions from me and possibly depression, which I don\'t want. Listening to music is going to be the hardest but I think I can do it. This is an oppurtunity for me to get my life straight and to stop worrying about Discord even when I\'m in a damn math class.\\n\\nI will be starting my detox **tomorrow** morning and it will last either 1 or 2 weeks, I\'m not sure. If im not back within 2 weeks please just don\'t panic I may just want to take a longer break because it\'s working or I may need more time. Anyway, I\'d like to thank everyone and hope you understand.\\n\\n:::info \\"Dopamine\\" - by Google\\nDopamine is a type of neurotransmitter and hormone. It plays a role in many important body functions, including movement, memory and pleasurable reward and motivation. High or low levels of dopamine are associated with several mental health and neurological diseases.\\n:::"},{"id":"wa-moderation","metadata":{"permalink":"/blog/wa-moderation","source":"@site/blog/2022-9-4-wa-mod-guide.md","title":"Wumpus Advertisements Mod Guide","description":"Tasks","date":"2022-09-04T00:00:00.000Z","formattedDate":"September 4, 2022","tags":[{"label":"Guides","permalink":"/blog/tags/guides"},{"label":"Wumpus Advertisements","permalink":"/blog/tags/wumpus-advertisements"}],"readingTime":1.385,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"who?","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"wa-moderation","title":"Wumpus Advertisements Mod Guide","authors":"nziie","tags":["Guides","Wumpus Advertisements"]},"prevItem":{"title":"A break from Discord","permalink":"/blog/break"},"nextItem":{"title":"First blog post","permalink":"/blog/first"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\nimport {\\n  DiscordButton,\\n  DiscordButtons,\\n  DiscordInteraction,\\n  DiscordMessage,\\n  DiscordMessages,\\n  DiscordMention,\\n} from \\"discord-message-components/packages/react\\";\\nimport \\"discord-message-components/packages/react/dist/style.css\\";\\nimport DiscordComponent, { defaultOptions } from \\"../src/components/DiscordComponent\\";\\n\\n## Tasks\\n--- \\n\\n- Send 10 messages in the main server\\n- Issue **5** valid advertisements warnings\\n\\n## Advertisement Warnings {#ad-warnings}\\n---\\nAdvertisement warnings are our form of verbal warnings for advertisements. \\n\\n### Example\\n---\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"nziie\\">\\n    .warn <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> ?s aw ?c <span className=\\"mention\\">#\ud83c\udfe0\u30fbcommunity-servers</span> ?r Lack of description\\n  </DiscordMessage>\\n  <DiscordMessage profile=\\"wumpusmanager\\">\\n    <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> has been warned <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> for a severity of: <code>Advertisement Warning</code>\\n    <br/>\\n    They now have <code>1</code> warning(s) in that category, and <code>1</code> total warnings.\\n  </DiscordMessage>\\n</DiscordComponent>\\n\\n## Moderation\\n---\\nPlease make sure to use command flags correctly and use commands correctly.\\n\\n### Commands\\n---\\n| Usage | Description |\\n| ----- | ----- |\\n| * <code>.warn &lt;member&gt; [flags]</code> | Warn a member |\\n| <code>.warnings [member]</code> | View warnings for a member or yourself |\\n| <code>.delwarn &lt;warning_id&gt;</code> | Delete a warning by ID |\\n\\n<details className=\\"customdetails\\">\\n<summary>\ud83d\udea9 * Valid Flags</summary>\\n\\n| Flag Usage | Description | Example |\\n| ----- | ----- | ----- |\\n| <code>?r</code> | The reason for the warning/action | <code>?r DM advertising</code>\\n| <code>?s</code> | The severity for the warning/action | <code>?s low</code> |\\n| <code>?c</code> | The channel (mainly meant for ad warnings) | <code>?c #unlimited-advertising</code> |\\n\\n</details>\\n\\n### Example\\n---\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"nziie\\">\\n    .warn <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> ?s low ?r Spam\\n  </DiscordMessage>\\n  <DiscordMessage profile=\\"wumpusmanager\\">\\n    <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> has been warned by <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> for a severity of: <code>Low</code>\\n    <br/>\\n    They now have <code>1</code> warning(s) in that category, and <code>1</code> total warnings.\\n  </DiscordMessage>\\n</DiscordComponent>"},{"id":"first","metadata":{"permalink":"/blog/first","source":"@site/blog/2022-8-26-first.md","title":"First blog post","description":"My first blog post!","date":"2022-08-26T00:00:00.000Z","formattedDate":"August 26, 2022","tags":[],"readingTime":0.26,"hasTruncateMarker":false,"authors":[{"name":"Nziie","title":"who?","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"first","title":"First blog post","authors":"nziie"},"prevItem":{"title":"Wumpus Advertisements Mod Guide","permalink":"/blog/wa-moderation"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\n\\nimport {\\n  DiscordButton,\\n  DiscordButtons,\\n  DiscordInteraction,\\n  DiscordMessage,\\n  DiscordMessages,\\n} from \\"discord-message-components/packages/react\\";\\nimport \\"discord-message-components/packages/react/dist/style.css\\";\\nimport DiscordComponent from \\"../src/components/DiscordComponent\\";\\n\\nMy first blog post!\\n\\n<DiscordComponent>\\n  <DiscordMessage author=\\"vNziie--\\" avatar=\\"/img/logo.png\\">\\n    !post\\n  </DiscordMessage>\\n  <DiscordMessage author=\\"Blog Bot\\" avatar=\\"red\\">\\n    \ud83c\udf89 Congrats, you\'ve posted your first blog post!\\n  </DiscordMessage>\\n</DiscordComponent>"}]}')}}]);