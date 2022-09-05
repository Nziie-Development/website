"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"wa-moderation","metadata":{"permalink":"/blog/wa-moderation","source":"@site/blog/2022-9-4-wa-mod-guide.md","title":"Wumpus Advertisements Mod Guide","description":"Tasks","date":"2022-09-04T00:00:00.000Z","formattedDate":"September 4, 2022","tags":[{"label":"Guides","permalink":"/blog/tags/guides"},{"label":"Wumpus Advertisements","permalink":"/blog/tags/wumpus-advertisements"}],"readingTime":1.385,"hasTruncateMarker":false,"authors":[{"name":"Nziie","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"wa-moderation","title":"Wumpus Advertisements Mod Guide","authors":"nziie","tags":["Guides","Wumpus Advertisements"]},"nextItem":{"title":"First blog post","permalink":"/blog/first"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\nimport {\\n  DiscordButton,\\n  DiscordButtons,\\n  DiscordInteraction,\\n  DiscordMessage,\\n  DiscordMessages,\\n  DiscordMention,\\n} from \\"discord-message-components/packages/react\\";\\nimport \\"discord-message-components/packages/react/dist/style.css\\";\\nimport DiscordComponent, { defaultOptions } from \\"../src/components/DiscordComponent\\";\\n\\n## Tasks\\n--- \\n\\n- Send 10 messages in the main server\\n- Issue **5** valid advertisements warnings\\n\\n## Advertisement Warnings {#ad-warnings}\\n---\\nAdvertisement warnings are our form of verbal warnings for advertisements. \\n\\n### Example\\n---\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"nziie\\">\\n    .warn <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> ?s aw ?c <span className=\\"mention\\">#\ud83c\udfe0\u30fbcommunity-servers</span> ?r Lack of description\\n  </DiscordMessage>\\n  <DiscordMessage profile=\\"wumpusmanager\\">\\n    <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> has been warned <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> for a severity of: <code>Advertisement Warning</code>\\n    <br/>\\n    They now have <code>1</code> warning(s) in that category, and <code>1</code> total warnings.\\n  </DiscordMessage>\\n</DiscordComponent>\\n\\n## Moderation\\n---\\nPlease make sure to use command flags correctly and use commands correctly.\\n\\n### Commands\\n---\\n| Usage | Description |\\n| ----- | ----- |\\n| * <code>.warn &lt;member&gt; [flags]</code> | Warn a member |\\n| <code>.warnings [member]</code> | View warnings for a member or yourself |\\n| <code>.delwarn &lt;warning_id&gt;</code> | Delete a warning by ID |\\n\\n<details className=\\"customdetails\\">\\n<summary>\ud83d\udea9 * Valid Flags</summary>\\n\\n| Flag Usage | Description | Example |\\n| ----- | ----- | ----- |\\n| <code>?r</code> | The reason for the warning/action | <code>?r DM advertising</code>\\n| <code>?s</code> | The severity for the warning/action | <code>?s low</code> |\\n| <code>?c</code> | The channel (mainly meant for ad warnings) | <code>?c #unlimited-advertising</code> |\\n\\n</details>\\n\\n### Example\\n---\\n<DiscordComponent>\\n  <DiscordMessage profile=\\"nziie\\">\\n    .warn <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> ?s low ?r Spam\\n  </DiscordMessage>\\n  <DiscordMessage profile=\\"wumpusmanager\\">\\n    <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> has been warned by <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> for a severity of: <code>Low</code>\\n    <br/>\\n    They now have <code>1</code> warning(s) in that category, and <code>1</code> total warnings.\\n  </DiscordMessage>\\n</DiscordComponent>"},{"id":"first","metadata":{"permalink":"/blog/first","source":"@site/blog/2022-8-26-first.md","title":"First blog post","description":"My first blog post!","date":"2022-08-26T00:00:00.000Z","formattedDate":"August 26, 2022","tags":[],"readingTime":0.26,"hasTruncateMarker":false,"authors":[{"name":"Nziie","url":"https://nziie.is-a.dev","imageURL":"https://github.com/Nzii3.png","key":"nziie"}],"frontMatter":{"slug":"first","title":"First blog post","authors":"nziie"},"prevItem":{"title":"Wumpus Advertisements Mod Guide","permalink":"/blog/wa-moderation"}},"content":"import Tabs from \\"@theme/Tabs\\";\\nimport TabItem from \\"@theme/TabItem\\";\\nimport Button from \'../src/components/Button\';\\n\\nimport {\\n  DiscordButton,\\n  DiscordButtons,\\n  DiscordInteraction,\\n  DiscordMessage,\\n  DiscordMessages,\\n} from \\"discord-message-components/packages/react\\";\\nimport \\"discord-message-components/packages/react/dist/style.css\\";\\nimport DiscordComponent from \\"../src/components/DiscordComponent\\";\\n\\nMy first blog post!\\n\\n<DiscordComponent>\\n  <DiscordMessage author=\\"vNziie--\\" avatar=\\"/img/logo.png\\">\\n    !post\\n  </DiscordMessage>\\n  <DiscordMessage author=\\"Blog Bot\\" avatar=\\"red\\">\\n    \ud83c\udf89 Congrats, you\'ve posted your first blog post!\\n  </DiscordMessage>\\n</DiscordComponent>"}]}')}}]);