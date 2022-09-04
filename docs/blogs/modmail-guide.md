---
title: Modmail Guide
description: A modmail guide reference to all my clients whom have a modmail bot
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
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

:::note Overview

In this guide you will learn how to use and operate **all modmail bots** made by me (vNziie--#7777). 

:::

<details className="customdetails">
<summary>🔑 Key</summary>

> `<prefix>` - This should be the prefix of the modmail bot you are using (e.g. `.` `!` `?` `-`)

> `[foo|bar]` - Text separated in brackets means you can use either **foo** or **bar** to get the same command result

> `[arg=value]` - An argument in brackets means this is an **optional argument**, if it's not provided a default value of '**value**' will take it's place

> `<arg>` - An argument in less and greater than signs means that this is a **required argument**, it must be provided or the command will fail

</details>

## Modmail Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <code>&lt;prefix&gt[reply\|r] &lt;message&gt</code> | Reply to a modmail thread (this is an anonymous reply) |
| <code>&lt;prefix&gt[close\|c] <a></a>[time] <a></a>[message]</code> | Close a thread with an optional duration to wait to close the thread (timed close) - `message` will appear on the user's end. This can be 'Have a great day' |
| <code>&lt;prefix&gtalert [member]</code> | Notify yourself or another member of the next thread messaged received |
| <code>&lt;prefix&gtmove &lt;name&gt</code> | Move a thread to a category by name |

:::tip
`category_name` can be a shorthand word of a category name.

For example, you can use `.move moderation` to move a thread to the moderation team.

:::


## Snippet Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <code>&lt;prefix&gt[snippet\|s] <a></a>[name] </code> | View all the snippets or send one in the thread by providing `name` |
| <code>&lt;prefix&gt[snippet\|s]<a></a> plain [name] </code> | Send a snippet in a plain (non-embedded) message |
| <code>&lt;prefix&gt[snippet\|s] add &lt;name&gt &lt;value&gt</code> | (Admins Only) Add a snippet |
| <code>&lt;prefix&gt[snippet\|s] remove &lt;name&gt </code> | (Admins Only) Remove/delete a snippet |

## Example Situations

<details className="customdetails">
<summary>Situation 1</summary>

> **User:** Hey, I'd like to report a member

*Runs `<prefix>snippet report`*

> **You:** 
To report a member, please use this format:
```
User ID:
Reason:
Proof:
```

> **User:**
User ID: 1234567890123456789
Reason: DM advertising
Proof: *(attachment)*

`...`

</details>

<details className="customdetails">
<summary>Situation 2</summary>

> **User:** Can I partner?

*Runs `<prefix>move partnership`*

`...`

</details>

## Moving Threads

You can move threads to other modmail categories with `<prefix>move <category_name>`. `category_name` can be a shorthand name of a category name. For example:
*(example prefix: `!`)*
<br/>
<DiscordComponent>
  <DiscordMessage profile="nziie">
    <blockquote> Make sure to use your modmail bot's prefix!</blockquote>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    !move moderation
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    ✅ Successfully moved this thread to <code>Moderation Team</code>!
  </DiscordMessage>
</DiscordComponent>
<br/>
<DiscordComponent>
  <DiscordMessage profile="nziie">
    !move partnership
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    ✅ Successfully moved this thread to <code>Partnership Team</code>!
  </DiscordMessage>
</DiscordComponent>
<br/>
:::note
This guide is not completely done yet as more feature to modmail will be added eventually.
:::
