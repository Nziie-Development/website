---
title: 🆕 Tickets v2
description: A showcase of my Ticket System version 2.
sidebar_position: 1
---
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordMention,
  DiscordEmbedField
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

🎟️ **Tickets v2** uses the [configs v2](./configs-v2.md) system to maximize your control over how the system acts and responds. With this system, you can give your server members an easy way to get in contact with your staff team. Give your members the fast support they deserve. This system is inspired by my old public ticket bot, **Ticket System**, but simplified.

## Features

- Simplified ticket management
- Simplified ticket handler
- [More configurations](#configurations)
- Support for [multiple ticket categories](#ticket-categories) on one panel
- Ticket panels
- [Beautified ticket logging](#ticket-logging)

## Logging {#ticket-logging}
Enable ticket logging by running: `<prefix>config set ticket_transcripts yes` and make sure to set the `log_channel` configuration as it inherits the ticket log channel from there. 

__Example:__ https://logs.discord.website/logs/akmw9p6t4XdoZCsQcCmexL

## Configurations
The following configurations are what comes with tickets v2:

- `ticket_embed_color` - Color of the embed sent when a ticket is created (default: inherits from `main_color`)
- `ticket_transcripts` - Whether transcripts (logs) of tickets should be created when a ticket is closed (default: yes)
- `ticket_created_response` - The default description of the embed sent when a ticket is created, this can be customized for every ticket category via the create ticket category command
- `ticket_created_title` - Same as above, but the title of the embed
- `ticket_limit` - The maximum amount of tickets a user can have open at a time (default: 1)
- `tickets_dm_recipient_on_close` - Whether the log of the ticket should be sent to the ticket author when their ticket is closed (default: yes)
- `tickets_dm_recipient_transcript` - Whether the transcript of the ticket should be attached to the DM if the parent config is true (default: yes)

## Ticket Categories

Ticket categories allow you to add multiple buttons on a panel and allows users to click a button on that message to make a ticket in a certain category.

<DiscordComponent>
  <DiscordMessage author="Bot" avatar="blue">
  <div slot="interactions">
    <DiscordInteraction profile="nziie" command>
      panels create
    </DiscordInteraction>
  </div>
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Successfully created panel.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage author="Bot" avatar="blue">
  <div slot="interactions">
    <DiscordInteraction profile="nziie" command>
      ticket categories create
    </DiscordInteraction>
  </div>
    <DiscordEmbed borderColor="#2ecc71" embedTitle="Success">
      Successfully added ticket category to panel.
    </DiscordEmbed>
  </DiscordMessage>
  <DiscordMessage author="Bot" avatar="blue">
    <DiscordEmbed borderColor="#5865f2" embedTitle="Support Tickets" authorIcon="/img/nziiedev.png" authorName="Nziie Development">
      Click on the button below to create a new support ticket.
    </DiscordEmbed>
  <div slot="actions">
    <DiscordButtons>
      <DiscordButton type="primary">Create Ticket</DiscordButton>
    </DiscordButtons>
  </div>
  </DiscordMessage>
</DiscordComponent>