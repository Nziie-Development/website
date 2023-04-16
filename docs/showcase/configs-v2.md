---
title: Configs v2
description: A showcase of my Discord Forms/application system
---
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
  DiscordEmbedField
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

Ever wanted to have [Modmail v3](./modmail-v3.md)'s configuration system in your normal bot? Then this is the migration for you!

## Commands


| Usage | Description | Example |
| ----------------------- | ----------- | ---------- |
| <span className="timestamp">!config</span> | View all the configurations in a paginated session |
| <span className="timestamp">!config list</span> | View all the configurations in a compact message |
| <span className="timestamp">!config set &lt;key&gt; &lt;value&gt;</span> | Set a configuration to the according value | <span className="timestamp">!config set main_color #5865f2 </span> |

## Default Configurations
The following configurations are used globally throughout extensions and other systems in your bot.

<span className="cb">log_channel</span> - The channel where bot logs and update logs are sent by default
<br/>
<span className="cb">prefix</span> - The prefix of the bot
<br/>
<span className="cb">main_color</span> - This is the main color for the entire bot
<br/>
<span className="cb">success_color</span> - This is the color when anything is successful
<br/>
<span className="cb">error_color</span> - This is the color when anything goes wrong, unsuccessful commands, or a stern warning
<br/>
<span className="cb">error_emoji</span> - Emoji that indicates something was unsuccessful
<br/>
<span className="cb">success_emoji</span> - Emoji that indicates success
<br/>