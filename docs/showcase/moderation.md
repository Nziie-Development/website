---
title: Moderation
description: A showcase of my Discord moderation systems
---
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

Currently, I have 2 moderation systems that you can choose from. **v1** includes a more robust command usage, **slash commands**. While **v2** uses prefix commands, however, it uses a custom flags system similar to [Wick](https://wickbot.com)'s flag system and uses a better severity system compared to v1. Both versions include a cases system, in which cases are permanently stored in the database for future use until the case is deleted.


## Moderation v1 (slash commands) {#v1}
---
<div className="box yellow no-background shadow">
<div className="title">
Warning
</div>
You <strong>cannot</strong> use this system with normal prefix commands, it will not be modified to meet your needs usage-wise.
</div>

### Main Commands {#v1-commands}
|     Usage               |  Description  |
| ----------------------- | ----------- |
| <span className="mention">/warn &lt;member&gt; [duration] [reason] [custom_reason] [moderator_hidden]</span>  | Warn a member (`moderator_hidden` hides the moderator from the actioned user)       |
| <span className="mention">/warnings [member]</span>         | View warnings for yourself or a member | 
| <span className="mention">/remove_warning &lt;id&gt; [notify_user=True]</span>  | Remove a warning (`notify_user` will direct message the warned member that it was deleted)        |
| <span className="mention">/delete_all_warnings</span>  | Delete **ALL** warnings from your server. This is useful if your bot is acting slow when warning users        |
| <span className="mention">/ban &lt;member&gt; [reason] [custom_reason] [moderator_hidden] [delete_message_days]</span>   | Ban a member from the server (`delete_message_days` is the amount of message days to delete)       |
| <span className="mention">/kick &lt;member&gt; [reason] [custom_reason] [moderator_hidden]</span>   | Kick a member from the server    |
| <span className="mention">/purge &lt;amount&gt;</span>   | Purge an amount of messages in the current channel    |
| <span className="mention">/mute &lt;member&gt; &lt;duration&gt; [reason] [custom_reason] [moderator_hidden]</span>   | Mute a member for a duration using **Discord's Timeout Feature**. (Example `duration` argument: '1h' = 1 hour)    |

> Warnings that are set to have a `duration` are removed after the duration, but the case linked to that warning ID is not deleted for further reference.

### Cases {#v1-cases}
| Command | Description | 
| ----------------------- | ----------- |
| <span className="mention">/case &lt;case_id&gt;</span> | View/manage a case - **you can edit a case in this command** |
| <span className="mention">/createcase &lt;member&gt; &lt;reason&gt; [action=Other] [proof=image url] [duration]</span> | Create a case for a user |
| <span className="mention">/case [member]</span> | View cases for the whole server or yourself |

### Examples {#v1-examples}

#### Warnings
<DiscordComponent>
    <DiscordMessage profile="bot" bot>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          warn
        </DiscordInteraction>
      </div>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="Warned vNziie--#7777"
        borderColor="#fee75c"
        >
        <img src='/img/warning.png' className='emoji'/> <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> <strong>(vNziie--#7777 | 550476809280421903)</strong> has successfully been warned.
        <span slot="footer">Case ID: x</span>
            <DiscordEmbedFields slot="fields" inline="false">
                <DiscordEmbedField fieldTitle="Reason" inline="false">
                A bad developer!
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Moderator" inline="false">
                  vNziie--#7777
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Member Notified" inline="false">
                  True
                </DiscordEmbedField>
            </DiscordEmbedFields>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

---
#### Kick
<DiscordComponent>
    <DiscordMessage profile="bot" bot>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          kick
        </DiscordInteraction>
      </div>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="Kicked vNziie--#7777"
        borderColor="#e74c3c"
        >
        <img src='/img/kick.png' className='emoji'/> <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> <strong>(vNziie--#7777 | 550476809280421903)</strong> has successfully been kicked.
        <span slot="footer">Case ID: x</span>
            <DiscordEmbedFields slot="fields" inline="false">
                <DiscordEmbedField fieldTitle="Reason" inline="false">
                A bad developer!
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Moderator" inline="false">
                  vNziie--#7777
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Member Notified" inline="false">
                  True
                </DiscordEmbedField>
            </DiscordEmbedFields>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

---

<div className="box green no-background shadow">
If you'd like the v1 moderation system in your bot, simply just ask!
</div>

## Moderation v2 (prefix commands) {#v2}
| Usage | Description |
| ----------------------- | ----------- |
| <code>!warn &lt;member&gt &lt;flags&gt🚩</code> | Issue an warning |
| <code>!case &lt;warning_id&gt</code> | View an warning by ID |
| <code>!delwarn &lt;warning_id&gt</code> | Delete an warning by ID (Admins only) |

<details className="customdetails" open>
<summary>🚩 Command Flags</summary>
<h4>Warning Flags</h4>

> <span className="timestamp">?s</span> - How sensitive or how bad the warn is for the user; accepts: <code>minor</code> <code>low</code> <code>medium</code> and <code>high</code> as types
<br/>
> <span className="timestamp">?r</span> - The reason for the action, can be any type of string

<h4>Mute Flags</h4>

> <span className="timestamp">?r</span> - The reason for the action, can be any type of string
<br/>
> <span className="timestamp">?t</span> - A time argument for the action (e.g. <code>1h</code>, <code>1d</code>, <code>10m</code>; 1 hour, 1 day, 10 minutes)

<h4>Kick Flags</h4>

> <span className="timestamp">?r</span> - The reason for the action, can be any type of string

<h4>Ban Flags</h4>

> <span className="timestamp">?r</span> - The reason for the action, can be any type of string
<br/>
> <span className="timestamp">?ddays</span> - The number of days to delete messages from the member

</details> 



> Warnings that are set to have a `duration` are removed after the duration, but the case linked to that warning ID is not deleted for further reference.

### Cases {#v2-cases}
| Command | Description | 
| ----------------------- | ----------- |
| <span className="mention">/case &lt;case_id&gt;</span> | View/manage a case - **you can edit a case in this command** |
| <span className="mention">/createcase &lt;member&gt; &lt;reason&gt; [action=Other] [proof=image url] [duration]</span> | Create a case for a user |
| <span className="mention">/case [member]</span> | View cases for the whole server or yourself |

### Examples {#v2-examples}

#### Warnings
<DiscordComponent>
    <DiscordMessage profile="nziie">
    !warn <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> ?r A bad developer!
    </DiscordMessage>
    <DiscordMessage profile="bot" bot>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="Warned vNziie--#7777"
        borderColor="#fee75c"
        >
        <img src='/img/warning.png' className='emoji'/> <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> <strong>(vNziie--#7777 | 550476809280421903)</strong> has successfully been warned.
        <span slot="footer">Case ID: x</span>
            <DiscordEmbedFields slot="fields" inline="false">
                <DiscordEmbedField fieldTitle="Reason" inline="false">
                A bad developer!
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Moderator" inline="false">
                  vNziie--#7777
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Member Notified" inline="false">
                  True
                </DiscordEmbedField>
            </DiscordEmbedFields>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

---
#### Kick
<DiscordComponent>
    <DiscordMessage profile="nziie">
    !kick <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> ?r A bad developer!
    </DiscordMessage>
    <DiscordMessage profile="bot" bot>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="Kicked vNziie--#7777"
        borderColor="#e74c3c"
        >
        <img src='/img/kick.png' className='emoji'/> <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> <strong>(vNziie--#7777 | 550476809280421903)</strong> has successfully been kicked.
        <span slot="footer">Case ID: x</span>
            <DiscordEmbedFields slot="fields" inline="false">
                <DiscordEmbedField fieldTitle="Reason" inline="false">
                A bad developer!
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Moderator" inline="false">
                  vNziie--#7777
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Member Notified" inline="false">
                  True
                </DiscordEmbedField>
            </DiscordEmbedFields>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

---

#### Ban
<DiscordComponent>
    <DiscordMessage profile="nziie">
    !ban <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> ?r A bad developer! ?ddays 7
    </DiscordMessage>
    <DiscordMessage profile="bot" bot>
        <DiscordEmbed
        authorIcon="/img/logo.png"
        authorName="Banned vNziie--#7777"
        borderColor="red"
        >
        <img src='/img/ban.png' className='emoji'/> <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention> <strong>(vNziie--#7777 | 550476809280421903)</strong> has successfully been banned.
        <span slot="footer">Case ID: x</span>
            <DiscordEmbedFields slot="fields" inline="false">
                <DiscordEmbedField fieldTitle="Reason" inline="false">
                A bad developer!
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Moderator" inline="false">
                  vNziie--#7777
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Member Notified" inline="false">
                  True
                </DiscordEmbedField>
            </DiscordEmbedFields>
        </DiscordEmbed>
    </DiscordMessage>
</DiscordComponent>

---
<div className="box green no-background shadow">
If you'd like the v2 moderation system in your bot, simply just ask!
</div>