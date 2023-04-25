---
title: Tickets v2
description: A showcase of my Ticket System version 2.
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
- Support for [multiple ticket categories](#ticket-categories) on one panel
- Ticket panels
- [Beautified ticket logging](#ticket-logging)

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