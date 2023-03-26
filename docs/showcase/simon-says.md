---
title: Simon Says
description: A showcase of my Discord Simon Says system
sidebar_position: 2
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
import Admonition from '@theme/Admonition';

--- 

## Overview
I made this Simon Says system many goals in mind. The most important one being to make it simple to use, and highly advanced, including advanced *game logging*. I've included game logging like no other bot has so server admins can keep track of games and makes sure they're running smoothly. Any errors the bot encounters will be logged in the game log. 

**I recommend only requesting this system if you are on the [Premium Plan](../services.md#premium-plan)!**

## ⭐ Setup {#setup}

Getting started with simon says is simple, the <span className="mention">/simonsays setup</span> command is all you need to use. The bot will try and find existing Simon Says roles, if not, it will create the following roles in order to be eligible to start games.

- Simon Says Controller (controller role)
- Simon Says Player (player role)

## Games

All games are stored in the database, including players in the queue, valid players, and the Simon (controller).

### Starting Games

To start a game, you're going to want to use the <span className="mention">/simonsays start</span> command in the current channel.

<img src="/img/simonsays2.png" className="betterimage"/>
<p className="caption">Creating a game</p>

### Viewing Games

To view past and current games (including game logs), use the <span className="mention">/simonsays games view</span> command.

<img src="/img/simonsays1.png" className="betterimage"/>
<p className="caption">Viewing games</p>

### Force ending games {#force-ending}

Sometimes things can go wrong, so I've added a command to force-end a game in case something goes *boom*. Use the <span className="mention">/simonsays games end</span> to force-end a game.

---

I really enjoyed making this event system, I look forward to creating more event systems like this soon!