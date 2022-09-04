---
slug: wa-moderation
title: Wumpus Advertisements Mod Guide
authors: nziie
tags: [Guides, Wumpus Advertisements]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Button from '../src/components/Button';
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../src/components/DiscordComponent";

## Tasks
--- 

- Send 10 messages in the main server
- Issue **5** valid advertisements warnings

## Advertisement Warnings {#ad-warnings}
---
Advertisement warnings are our form of verbal warnings for advertisements. 

## Moderation
---
Please make sure to use command flags correctly and use commands correctly.

### Commands
---
| Usage | Description |
| ----- | ----- |
| * <code>.warn &lt;member&gt; [flags]</code> | Warn a member |
| <code>.warnings [member]</code> | View warnings for a member or yourself |
| <code>.delwarn &lt;warning_id&gt;</code> | Delete a warning by ID |

<details className="customdetails">
<summary>🚩 * Valid Flags</summary>

| Flag Usage | Description | Example |
| ----- | ----- | ----- |
| <code>?r</code> | The reason for the warning/action | <code>?r DM advertising</code>
| <code>?s</code> | The severity for the warning/action | <code>?s low</code> |
| <code>?c</code> | The channel (mainly meant for ad warnings) 

</details>

### Example
---
<DiscordComponent>
  <DiscordMessage profile="nziie">
    .warn <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> ?s low ?r Spam
  </DiscordMessage>
  <DiscordMessage profile="wumpusmanager">
    <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> has been warned <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> for a severity of: <code>Low</code>
    <br/>
    They now have <code>1</code> warning(s) in that category, and <code>1</code> total warnings.
  </DiscordMessage>
</DiscordComponent>
