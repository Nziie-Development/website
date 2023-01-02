---
title: Giveaways
description: A showcase of my Discord Giveaway system
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

---

My giveaway system uses <span style={{color: '#4DB33D'}}>MongoDB</span>, buttons, and other various light-weight systems in order to give Server Administrators the easiest experience when hosting a giveaway. Thus, providing a user an easy way to have their entry counted into the giveaway. My giveaway system is featured in <a href="https://servermanagerbot.ml" style={{color: '#5865f2'}}>Server Manager</a>'s giveaway system.

## Example
This is what a giveaway looks like when starting it

<DiscordComponent>
    <DiscordMessage author="Giveaways" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="$5 Nitro Classic"
        authorIcon="/img/logo.png"
        authorName="Nziie Development"
        borderColor="#5865F2"
        timestamp="12/24/2022"
        footerIcon="/img/logo.png"
        >
        $5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! 🎉       
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Ends">
                <span className="timestamp">in 12 hours</span>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Host">
                  <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">1 winner</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          giveaway start
        </DiscordInteraction>
      </div>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="primary" emoji="🎉"></DiscordButton>
          <DiscordButton type="secondary" disabled="true">10 entries</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

## Starting a Giveaway

To start a giveaway, use the <span className="mention">/giveaway start</span> slash command with your bot. The bot should ask you to confirm all the details of the giveaway then [the giveaway will be started](#example).

## Ending a Giveaway

To end a giveaway, use the <span className="mention">/giveaway end</span> slash command with your bot. The bot should end the giveaway and randomly choose a winner from the giveaway entries stored in the database.

**This is what it should look like when ending a giveaway**

<DiscordComponent>
    <DiscordMessage author="Giveaways" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="Ended | $5 Nitro Classic"
        authorIcon="/img/logo.png"
        authorName="Nziie Development"
        borderColor="#2f3136"
        timestamp="12/24/2022"
        footerIcon="/img/logo.png"
        >
        $5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! 🎉<br/><br/> <blockquote><span className="timestamp">10:05 AM</span> <a href="">Winner(s)</a></blockquote> 
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Ended">
                <span className="timestamp">5 minutes ago</span>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Host">
                  <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">1 winner</span>
        </DiscordEmbed>
      <div slot="actions">
        <DiscordButtons>
          <DiscordButton type="primary" disabled="true">10 entries</DiscordButton>
        </DiscordButtons>
      </div>
    </DiscordMessage>
</DiscordComponent>

## Viewing a Giveaway

To view a giveaway, use the <span className="mention">/giveaway view</span> slash command with your bot. If you provide the <span className="timestamp">giveaway_id</span> argument it will pull up a specific giveaway. If that argument isn't provided, it will paginate through all the existing giveaways that are either still running or ended.