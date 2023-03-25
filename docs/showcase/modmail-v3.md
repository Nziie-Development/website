---
title: Modmail v3
description: Modmail v3, a new, easy way to communicate with server members with a fully customizable system.
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

## 🎉 v3.0.0 {#why-v3}
Modmail v3 includes a robust configuration system to configure 99% of the bot's responses, leaving the sky as the limit of possibilites of how your bot can be customized to your liking, theme, or needs. v3 showcases **Discord's newest and greatest UI** while providing you a crisp low-response time. Modmail v3 is the only bot you'll ever need for user support!

## Customizable Prefix
Now, you can customize the prefix of your bot on the fly and have it update immediately. 
- <span className="timestamp">!config set prefix ?</span> (changes to <strong>?</strong>)

<DiscordComponent>
  <DiscordMessage profile="nziie" roleColor="none">
  !config set prefix ?
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Set <span className="cb">prefix</span> to <span className="cb">?</span>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

## Highly customizable
The system is highly customizable, giving you the power to customize it to your liking or needs. 

<details className="customdetails">
<summary>Configurations list</summary>
<span className="cb">disabled</span> - Disable or enable modmail functionality
</details>

<DiscordComponent>
  <DiscordMessage profile="nziie" roleColor="none">
  !config set thread_creation_response Thanks for contacting our staff team, please wait for a response.
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Set <span className="cb">thread_creation_response</span> to <span className="cb">Thanks for contacting our staff team, please wait for a response.</span>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

<DiscordComponent>
  <DiscordMessage profile="nziie" roleColor="none">
  !config set thread_close_response &#123;closer.mention&#125; has closed this thread.
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Set <span className="cb">thread_creation_response</span> to <span className="cb">&#123;closer.mention&#125; has closed this thread.</span>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

<DiscordComponent>
  <DiscordMessage profile="nziie" roleColor="none">
  !config set success_emoji ☑
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Set <span className="cb">success_emoji</span> to ☑
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

## Integrated Menus System
The thread menu system allows users who are creating a thread to choose from preset options set my admins. Depending on which option they select, the thread will move itself to a category set by *you*, in the option settings.

### Adding options

<DiscordComponent>
  <DiscordMessage profile="nziie" roleColor="none">
  !menu options add
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#5865f2">
      Please send what you want the dropdown option label to be.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie" roleColor="none">
  Report User
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#5865f2">
      Please send the description you would like to be displayed in the option. Use 'none' for no description.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie" roleColor="none">
  Report a user (not staff member) for breaking server rules.
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#5865f2">
      Please send the category ID you would like the thread to be sent to. Use 'none' for the thread not to be moved.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage profile="nziie" roleColor="none">
  1089262352530161684
  </DiscordMessage>
  <DiscordMessage profile="modmail" avatar="blue">
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Successfully created menu option!<br/><br/><blockquote><strong>Label:</strong> Report User<br/><strong>Description:</strong> Report a user (not staff member) for breaking server rules.<br/><strong>Move to:</strong> 1089262352530161684</blockquote>
    </DiscordEmbed>
  </DiscordMessage>
</DiscordComponent>

### How it looks

<img className="betterimage" src="https://cdn.nziie.is-a.dev/u/files/7thrGbvIIjhs"/>

---
You can have as many options as you'd like, as long as it doesn't exceeed the select menu option limit.

---

