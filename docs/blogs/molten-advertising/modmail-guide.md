---
title: Modmail Guide
description: The modmail guide for Molten Advertising (staff only)
---

import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
  DiscordReactions,
  DiscordReaction,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../../src/components/DiscordComponent";

:::note Overview
In this guide you will learn how to use and operate [Molten Support](https://discord.gg/gbFJm7D7BJ). 

[Molten Support](https://discord.gg/gbFJm7D7BJ)'s prefix is `.` [**period**]
:::

<details className="customdetails">
<summary>🔑 Key</summary>

> `[foo|bar]` - Text separated in brackets means you can use either **foo** or **bar** to get the same command result

> `[arg=value]` - An argument in brackets means this is an **optional argument**, if it's not provided a default value of '**value**' will take it's place

> `<arg>` - An argument in less and greater than signs means that this is a **required argument**, it must be provided or the command will fail

</details>

## Modmail Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <code>.[reply\|r] &lt;message&gt</code> | Reply to a modmail thread (this is an anonymous reply) |
| <code>.[close\|c] <a></a>[time] <a></a>[message]</code> | Close a thread with an optional duration to wait to close the thread (timed close) - `message` will appear on the user's end. This can be 'Have a great day' |
| <code>.alert [member]</code> | Notify yourself or another member of the next thread messaged received |
| <code>.move &lt;name&gt</code> | Move a thread to a category by name |

:::tip
`category_name` can be a shorthand word of a category name.

For example, you can use `.move moderation` to move a thread to the moderation team.

:::


## Snippet Commands
|     Usage               |  Description   |
| ----------------------- | ----------- |
| <code>.[snippet\|s] <a></a>[name] </code> | View all the snippets or send one in the thread by providing `name` |
| <code>.[snippet\|s] add &lt;name&gt &lt;value&gt</code> | (Management Only) Add a snippet |
| <code>.[snippet\|s] remove &lt;name&gt </code> | (Management Only) Remove/delete a snippet |

## Modmail Rules
**1.** When a thread is made, all online staff will get pinged. **To claim a thread, simply say 'mine'**, other staff should obey that you claimed the thread. If you’re inactive in a thread for a few hours when a user responds, they have the right to 'overclaim.'

**2.** There is such a thing as "over-claiming" where you claim a claimed thread. **You can only overclaim if you are a management member and need your serious intervention**, you were asked by the person who originally claimed the ticket to claim or if the person who claimed it isn't responding to your ping after 6 hours. Overclaim for no good reason will get you a strike or your modmail permissions revoked for a duration of time.

**3.** When handling a thread, **remain professional at all times**. **Don't use shortened words** such as "**k**" or "**xD**" or "**lol**". That doesn't look very professional. With this, capitalization and grammar must be used as well. 

**4.** <u>Stay respectful at all times</u>. Everyone must be treated with respect regardless of their words. In this case, ping an online management member.

**5.** If someone reported a member, you aren't supposed to be sharing the actions. Use the proper snippets according to the situation. You may not tell a thread user **any** actions against anyone. If you do this, you may receive a staff strike or your modmail license will be **revoked**.

**6.** Move a thread to the correct team category with `.move <team>`. Please don't handle threads that aren't for your department. 

## Example Situation

--- 
➝ <span className="mention">#member-0000</span>
<DiscordComponent>
  <DiscordMessage profile="moltensupport">
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      hello
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    .s hi
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Hello, what can we assist you with today?
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    .alert
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    You will be notified on a new thread message received!
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      why can't I send messages in lounge?
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    .s loungerole
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      You can’t talk in the main lounge because you don’t have the correct role. Please read <a href="#">this</a> announcement.
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    <DiscordEmbed authorIcon="/img/discord.png" authorName="Member#0000" borderColor="#5865f2" timestamp="12/24/2022">
      okay, thanks that's all for today.
      <span slot="footer">User</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    .s thanks
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Thanks for contacting Molten Advertising support staff! We hope you had a good experience and that we full-filled your request!
      <br/>
      <br/>
      <blockquote>This thread will close <strong>in 10 minutes</strong>. Please note that replying to this message will cancel the timed closure. <strong>Please only reply to this message if you need more help.</strong></blockquote>
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie">
    .close 10m
  </DiscordMessage>
  <DiscordMessage profile="moltensupport">
    🔒 This thread will close <span className="timestamp">in 10 minutes</span> if the user doesn't reply within that time limit.
  </DiscordMessage>
  <DiscordMessage profile="wumpus">
    <DiscordEmbed borderColor="#5865f2">
      This thread has been closed.
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

---

## Ready to handle threads?
Message <span className="mention">@vNziie--</span> on Discord and make sure to say you've read the modmail guide!
