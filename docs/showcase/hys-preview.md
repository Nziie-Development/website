---
title: 🌟 HelpYourServer (Preview)
description: HelpYourServer is a  user-friendly, feature-rich, highly customizable moderation bot with (customizable) prefix commands, making it a valuable tool for effortlessly overseeing and managing your server. Statistics to track moderators' careers, new and improved cases system, message customization, appeals, custom punishments, mod logging, command argument flags, and much more.
sidebar_position: 1
unlisted: true
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


---

*Moderation v3 provides a user-friendly, feature-rich moderation system complete with prefix commands, serving as a valuable tool for effectively supervising and managing your server. It includes statistical tracking for a moderator's performance, an enhanced case system, customizable messages, appeals, command argument flags, and a range of additional functionalities. With a fusion of features from multiple bots, Moderation v3 streamlines these capabilities into one unified system. Maintaining a pristine and organized server through effective moderation has never been more straightforward.*

## Commands

Similar to [Moderation v2](./moderation.md#v2), v3 uses command flags for easier understanding of argument slicing, so you can get your command arguments correct without something getting cut off.

| Usage | Description | Example |
| ----------- | ----------- | ----------- |
| <code>h!warn &lt;member&gt &lt;flags&gt</code> | Warn a member in the server | <code>!warn @nziie.dev ?r Pinging members randomly ?p https://nziie.xyz/video</code>
| <code>h!mute &lt;member&gt &lt;flags&gt</code> | Mute a member using Discord's timeout system | <code>!mute @nziie.dev ?r Mass pinging members ?t 12h ?p https://cdn.nziie.xyz/proof.png</code>
|  |  |
|  |  |
|  |  |

### Command Flags

<div className="box blurple no-background shadow">
<div className="title">
Command-Specific Flags
</div>
<h4><div class="tooltip"><span class="tooltiptext">Available in every moderation</span><span class="question-mark"><FontAwesomeIcon icon={faQuestion} style={{color: "#edf05c"}} /></span></div> Global Flags</h4>

> <div class="tooltip"><span class="tooltiptext"><code>r</code> = reason</span><span class="question-mark"><FontAwesomeIcon icon={faQuestion} style={{color: "#edf05c"}} /></span></div> <span className="timestamp">?r</span> - The reason for the action; shown to the user and logged in cases
<br/>
> <div class="tooltip"><span class="tooltiptext"><code>p</code> = proof</span><span class="question-mark"><FontAwesomeIcon icon={faQuestion} style={{color: "#edf05c"}} /></span></div> <span className="timestamp">?p</span> - Proof being attached to the action; usually a message or image link
<br/>
> 

<h4>Warning Flags</h4>

> <div class="tooltip"><span class="tooltiptext"><code>s</code> = severity</span><span class="question-mark"><FontAwesomeIcon icon={faQuestion} style={{color: "#edf05c"}} /></span></div> <span className="timestamp">?s</span> - How sensitive or how bad the warn is for the user; accepts: <code>minor</code> <code>low</code> <code>medium</code> and <code>high</code> as types

<h4>Mute Flags</h4>

> <div class="tooltip"><span class="tooltiptext"><code>t</code> = time</span><span class="question-mark"><FontAwesomeIcon icon={faQuestion} style={{color: "#edf05c"}} /></span></div> <span className="timestamp">?t</span> - A time argument for the action (e.g. <code>1h</code>, <code>1d</code>, <code>10m</code>; 1 hour, 1 day, 10 minutes)

<h4>Ban Flags</h4>

> <div class="tooltip"><span class="tooltiptext"><code>ddays</code> = Delete days</span><span class="question-mark"><FontAwesomeIcon icon={faQuestion} style={{color: "#edf05c"}} /></span></div> <span className="timestamp">?ddays</span> - The number of days to delete messages from the member

</div>
