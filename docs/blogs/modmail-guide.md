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

--- 
➝ <span className="mention">#member-0000</span>
<DiscordComponent>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      hello
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    !snippet hi
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Hello, what can we assist you with today?
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    !alert
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    You will be notified on a new thread message received!
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      i would like to report a member
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    !snippet report
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Please fill out the format below to report a member
      <br/>
      <code>
        User ID:
        <br/>
        Reason:
        <br/>
        Proof:
      </code>
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      User ID: 12345678901234567
      <br/>
      Reason: DM advertising
      Proof:
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    !reply Your report will be investigated and appropriate action will be taken. Is there anything else we can help you with?
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Your report will be investigated and appropriate action will be taken. Is there anything else we can help you with?
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      thanks that's all for today.
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    !snippet thanks
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Thanks for contacting (server) support staff! We hope you had a good experience and that we full-filled your request!
      <br/>
      <br/>
      <blockquote>This thread will close <strong>in 10 minutes</strong>. Please note that replying to this message will cancel the timed closure. <strong>Please only reply to this message if you need more help.</strong></blockquote>
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    .close 10m
  </DiscordMessage>
  <DiscordMessage profile="modmail">
    🔒 This thread will close <span className="timestamp">in 10 minutes</span> if the user doesn't reply within that time limit.
  </DiscordMessage>
  <DiscordMessage profile="wumpus">
    <DiscordEmbed borderColor="#5865f2">
      This thread has been closed.
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

---

## Moving Threads

You can move threads to other modmail categories with `<prefix>move <category_name>`. `category_name` can be a shorthand name of a category name. For example:
*(example prefix: `!`)*
<DiscordComponent>
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
