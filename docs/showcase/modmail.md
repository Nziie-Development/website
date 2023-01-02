---
title: Modmail
description: A showcase of my Discord Modmail system
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

---

My modmail system features a feature-rich support system that helps server members get in contact with staff easier than ever. Using Discord UI (buttons and more) to make sure threads are *squeaky clean* 🧽.

## Main Functionality

With a choice of either slash commands or prefix commands, you can choose how much Discord UI the bot uses. Slash commands may provide an easier UI, but prefix commands are more light-weight and are better supported on all devices and all types of devices (PC, Mobile, iOS, Android, Samsung, etc.).

<h3>Slash commands</h3>
<DiscordComponent>
  <DiscordMessage profile="modmail" avatar="blue">
    <div slot="interactions">
      <DiscordInteraction profile="nziie" command>
        reply
      </DiscordInteraction>
    </div>
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Hello, what can we assist you with today?
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>
<h3>Prefix commands</h3>

<DiscordComponent>
  <DiscordMessage profile="nziie">
  .reply Hello, what can we assist you with today?
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed authorIcon="/img/logo.png" authorName="vNziie--#7777" borderColor="#2ecc71" timestamp="12/24/2022">
      Hello, what can we assist you with today?
      <span slot="footer">Anonymous Reply</span>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

## Snippets
Snippets are pre-defined text shortcuts for you to use on the fly while replying to a thread. Snippets help take away the time of writing out a long message over and over again.

### Adding a snippet {#adding-snippets}

<h4>Slash commands</h4>

Use the <span className="mention">/snippet add</span> slash command and provide the `name` and `value` arguments.

<h4>Prefix commands</h4>

Use `.snippet add`
<DiscordComponent>
  <DiscordMessage profile="nziie">
  .snippet add morehelp Is there anything else we can help you with today?
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    ✅ Successfully added snippet!
    <br/>
    <blockquote>
    <strong>Name:</strong> morehelp
    <br/>
    <strong>Value:</strong> Is there anything else we can help you with today?
    </blockquote>
  </DiscordMessage>
</DiscordComponent>

### Deleting a snippet {#deleting-snippets}

<h4>Slash commands</h4>

Use the <span className="mention">/snippet remove</span> slash command and provide the `name` argument of the snippet you'd like to delete.

<h4>Prefix commands</h4>

Use `.snippet delete`
<DiscordComponent>
  <DiscordMessage profile="nziie">
  .snippet delete morehelp
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    🗑 Successfully deleted the snippet named <code>morehelp</code>!
  </DiscordMessage>
</DiscordComponent>

## Moving Threads {#moving}

Having different categories to move a thread to is helpful for categorizing threads in to where they belong (e.g. Moderation, Partnership, etc.). To move a thread with a slash command, use <span className="mention">/move</span>. To move a thread with prefix commands, use the `.move` command.

--- 

:::info
If you'd like to read the expanded guide on modmail, feel free to [read here](../blogs/modmail-guide.md).
:::

## Example Thread
Here is an example modmail thread.

➝ <span className="mention">#member-0000</span>
<DiscordComponent>
  <DiscordMessage profile="wumpus">
    <DiscordEmbed borderColor="#5865f2" authorIcon="/img/discord.png" authorName="Thread created">
      This thread was created <span className="timestamp">1 minute ago</span>. An index message is displayed here of the user's information.
    </DiscordEmbed>
  </DiscordMessage>
  <hr/>
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


