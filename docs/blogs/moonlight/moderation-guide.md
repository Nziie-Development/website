---
title: Moderation Guide
description: The modmail guide for Moonlight (moderation team only)
---

import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../../src/components/DiscordComponent";

<div className="box blurple no-background">
<div className="title">
Overview
</div>
In this guide, you will learn how to do your <strong>tasks</strong>, <strong>moderate the server</strong> efficently, and everything there is to being in the <strong>Moonlight Moderation Team</strong>.
</div>

## Tasks
Your tasks as a member of the **Moderation Team** consists of (but not limited to):

  - Make sure our server is safe and no one is breaking the rules
  - Moderate <span className="mention">╭╯🍵・lounge</span>
  - Handle [Modmail](./modmail-guide.md) **threads**
  - Handle [Modmail](./modmail-guide.md) **reports** (and other reports)

<details className="customdetails">
<summary>🔑 Key</summary>

> `[foo|bar]` - Text separated in brackets means you can use either **foo** or **bar** to get the same command result

> `[arg=value]` - An argument in brackets means this is an **optional argument**, if it's not provided a default value of '**value**' will take it's place

> `<arg>` - An argument in less and greater than signs means that this is a **required argument**, it must be provided or the command will fail

</details>

### Commands

<div className="box green no-background">
The commands we use for moderations are mainly prefixed commands. <strong>Make sure you're using the latest version of Discord</strong>!

If you are ever unsure on how to do some of the moderations please check <span className="mention">﹕🔧・punishments</span>
</div>

| Usage | Description |
| ----------------------- | ----------- |
| <code>!warn &lt;member&gt &lt;reason&gt &lt;channel&gt [belongs_to_channel] [notes]</code> | Issue an warning |
| <code>!case &lt;warning_id&gt</code> | View an warning by ID |
| <code>!delwarn &lt;warning_id&gt</code> | Delete an warning by ID (Admins only) |

## Example

<DiscordComponent>
  <DiscordMessage profile="nziie">
  !warn <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> ?r Dm Advertising ?s low
  </DiscordMessage>
  <DiscordMessage profile="moonlightmanager">
  <DiscordMention highlight={false}>{defaultOptions.profiles.member.author}</DiscordMention> has been warned by <DiscordMention highlight={false}>vNziie--</DiscordMention> for a severity of <code>Low</code>
  \nThey now have <code>1</code> warning(s) in that category, and <code>1</code> total warnings.
  </DiscordMessage>
</DiscordComponent>

<br/>

## Breakdown

<details className="customdetails">
<summary>⭐ Command Breakdown</summary>

<details className="customdetails">
<summary>Command Arguments</summary>

*These are the arguments that aren't self explanatory*

> <span className="timestamp">?s</span> - How sensitive or how bad the warn is for the user; *accepts: `minor` `low` `medium` and `high` as types*
> <span className="timestamp">?r</span> - The reason for the warning/action, can be any type of string

</details> 

</details>

