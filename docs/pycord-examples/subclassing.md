---
title: Subclassing
description: Learn how to easily subclass
---

I recommend subclassing anything you can as with subclassing, you can customize more stuff that you need to. In any bot, I subclass mostly everything.

```py title="Subclassing 'discord.Bot'"
import discord

class Bot(discord.Bot):
  def success(self):
    embed = discord.Embed(color=discord.Colour.green(), description="✅ Successfully executed command action!")
    return embed
  def error(self):
    embed = discord.Embed(color=discord.Colour.red(), description="❌ This command failed!")
    return embed

bot = Bot(command_prefix="!", intents=discord.Intents.all())

@bot.command()
async def success(ctx):
  await ctx.send(embed=bot.success())
  # sends a success message

@bot.command()
async error(ctx):
  await ctx.send(embed=bot.error())
  # sends an error message
```

:::info Related
• [Buttons](pycord-examples/discord-ui/buttons)
:::
