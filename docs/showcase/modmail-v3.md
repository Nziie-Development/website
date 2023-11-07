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

<div className="box blurple no-background shadow">
<div className="title">
Purchase
</div>
Purchase Modmail v3 at <strong><a href="https://r.nziie.xyz/purchase-modmail-v3" className="discord-link">r.nziie.xyz/purchase-modmail-v3</a></strong> for as cheap as <span className="timestamp">2.25€/month</span>!
</div>

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

<details className="customdetails" open>
<summary>Configurations list</summary>
<span className="cb">modmail_category_id</span> - The category where threads are created
<br/>
<span className="cb">modmail_guild_id</span> - The guild ID of where modmail is based in.
<br/>
<span className="cb">log_channel</span> - The channel where modmail logs and update logs are sent
<br/>
<span className="cb">prefix</span> - The prefix of the bot.
<br/>
<span className="cb">mention</span> - This is the message above user information for when a new thread is created in the channel. You can use a ping here.
<br/>
<span className="cb">main_color</span> - This is the main color for Modmail (help/about/ping embed messages, subscribe, move, etc.).
<br/>
<span className="cb">success_color</span> - This is the color for Modmail when anything is successful.
<br/>
<span className="cb">error_color</span> - This is the color for Modmail when anything goes wrong, unsuccessful commands, or a stern warning.
<br/>
<span className="cb">mod_color</span> - This is the color of the messages sent by the moderators, this applies to messages within in the thread channel and the DM thread messages received by the recipient.
<br/>
<span className="cb">recipient_color</span> - This is the color of the messages sent by the recipient, this applies to messages received in the thread channel.
<br/>
<span className="cb">thread_creation_title</span> - This is the message embed title sent to the recipient upon the creation of a new thread.
<br/>
<span className="cb">thread_creation_response</span> - This is the message embed content sent to the recipient upon the creation of a new thread.
<br/>
<span className="cb">thread_creation_footer</span> - This is the message embed footer sent to the recipient upon the creation of a new thread.
<br/>
<span className="cb">thread_close_title</span> - This is the message embed title sent to the recipient upon the closure of a thread.
<br/>
<span className="cb">thread_close_response</span> - This is the message embed content sent to the recipient upon the closure of a thread.
<br/>
<span className="cb">thread_close_footer</span> - This is the message embed footer sent to the recipient upon the closure of a thread.
<br/>
<span className="cb">thread_move_title</span> - This is the message embed content sent to the recipient upon contacting a member.
<br/>
<span className="cb">thread_move_notify</span> - Notify the recipient if the thread was moved.
<br/>
<span className="cb">thread_move_response</span> - This is the title of the embed sent to the recipient upon the contacting a member.
<br/>
<span className="cb">thread_move_footer</span> - This is the message embed footer sent to the recipient upon contacting a member.
<br/>
<span className="cb">close_on_leave</span> - Closes a modmail thread upon user leave automatically
<br/>
<span className="cb">confirm_thread_creation</span> - Ensure users confirm that they want to create a new thread
<br/>
<span className="cb">confirm_thread_creation_title</span> - Title for the embed message sent to users to confirm a thread creation
<br/>
<span className="cb">confirm_thread_creation_response</span> - Description for the embed message sent to users to confirm a thread creation
<br/>
<span className="cb">confirm_thread_creation_accept</span> - Emoji to accept a thread creation
<br/>
<span className="cb">confirm_thread_creation_deny</span> - Emoji to deny a thread creation
<br/>
<span className="cb">disabled</span> - Stop accepting new Modmail threads. Users won't be able to create new threads, but existing ones will still function as expected.
<br/>
<span className="cb">disabled_new_threads_title</span> - The title of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.
<br/>
<span className="cb">disabled_new_threads_response</span> - The body of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.
<br/>
<span className="cb">disabled_new_threads_footer</span> - The footer of the message embed when Modmail new thread creation is disabled and user tries to create a new thread.
<br/>
<span className="cb">sent_emoji</span> - Emoji that indicates a thread message was sent
<br/>
<span className="cb">error_emoji</span> - Emoji that indicates something was unsuccessful
<br/>
<span className="cb">blocked_emoji</span> - Emoji that indicates a user is blocked from modmail
<br/>
<span className="cb">success_emoji</span> - Emoji that indicates success
<br/>
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
The thread menu system allows users who are creating a thread to choose from preset options set by admins. Depending on which option they select, the thread will move itself to a category set by *you*, in the option settings.

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
You can have as many options as you'd like, as long as it doesn't exceed the Discord select menu option limit.

## Thread Logging

v3 showcases enhanced thread logging. You can manage the *global thread logs* with the <span className="cb">!logs</span> command and sub-commands.

### Discord-Styled Logs
Yup! No gloomy Pastebin logs anymore, v3 uses [logs.discord.website](https://logs.discord.we site) that uses Discord styles. The entire thread history is uploaded to the website for ease of use and makes it easier to view later (your data is 100% safe).

## Permission Levels
v3 uses permission levels to decide which user can use what command.


## Conclusion
Improvements are being made to v3, so if you have a v1 or v2 modmail bot, you will need to [pay $2 USD](https://redirect.nziie.is-a.dev/donate) for your bot to be migrated to v3. This includes me manually transferring any snippets you have, or other configurations you want saved in v3; which is a pain.

<div className="box blurple no-background shadow">
<div className="title">
Purchase
</div>
Purchase Modmail v3 at <strong><a href="https://r.nziie.xyz/purchase-modmail-v3" className="discord-link">r.nziie.xyz/purchase-modmail-v3</a></strong> for as cheap as <span className="timestamp">2.25€/month</span>!
</div>

<div className="box green no-background shadow">
<div className="title">
Join my Development Server!
</div>
You will need to join my development server in order to purchase this new system. <a href="https://discord.gg/b9GPHgJ6TK" className="discord-link">Join here</a>.
</div>

## Full Commands List {#commands-list}
| Name | Description |
| ----- | ----- |
| <span className="cb">!anonreply &lt;message&gt;</span> | Reply to a modmail thread anonymously |
| <span className="cb">!move &lt;category_name&gt;</span> | Move a modmail thread |
| <span className="cb">!logging [user]</span> | Get previous Modmail thread logs of a member, or all if user isn't provided. |
| <span className="cb">!logging delete [user]</span> | Wipe a log entry from the database, don't provide a log ID to wipe all. |
| <span className="cb">!help [command]</span> | Shows this message |
| <span className="cb">!contact &lt;member&gt;</span> | Contact a user |
| <span className="cb">!block [user] [reason]</span> | Block a user from modmail, reason is optional and is **not** shown to the user. |
| <span className="cb">!close [time] [message]</span> | Close a thread with an optional time argument |
| <span className="cb">!close cancel [time] [message]</span> | Cancel a closeure |
| <span className="cb">!status </span> | Customize the bot's status loop |
| <span className="cb">!status remove </span> | Remove an entry to the bot's status loop |
| <span className="cb">!status add </span> | Add an entry to the bot's status loop |
| <span className="cb">!snippet [name]</span> | Invoke a snippet |
| <span className="cb">!snippet remove [name]</span> | Remove a snippet |
| <span className="cb">!snippet add [name]</span> | Add a snippet |
| <span className="cb">!reply &lt;message&gt;</span> | Reply to a modmail thread |
| <span className="cb">!config </span> | Manage configurations for the bot. |
| <span className="cb">!config list </span> | None |
| <span className="cb">!config set </span> | Set a configuration variable and its value |
| <span className="cb">!menu </span> | Customize options users can select when creating a Modmail thread. |
| <span className="cb">!menu embed_text </span> | Set the text that is displayed in the embed of the menu message. |
| <span className="cb">!menu enable </span> | Enable the thread menu. |
| <span className="cb">!menu dropdown_placeholder </span> | Set the text that is displayed in the dropdown menu. |
| <span className="cb">!menu disable </span> | Disable the thread menu. |
| <span className="cb">!menu options </span> | Manage options for the Modmail menu |
| <span className="cb">!alert [member]</span> | Get notified of the next thread message |
| <span className="cb">!unblock [user]</span> | Unblock a user from modmail. |
| <span className="cb">!permissions </span> | Manage permissions for each permission level |
| <span className="cb">!permissions view </span> | View the roles for all permission levels |
| <span className="cb">!permissions add </span> | Add a role to a permission level. Permission levels: `OWNER`, `ADMIN`, `MODERATOR`, `SUPPORTER`, and `REGULAR` |
| <span className="cb">!permissions remove </span> | Remove a role from a permission level. Permission levels: `OWNER`, `ADMIN`, `MODERATOR`, `SUPPORTER`, and `REGULAR` 
