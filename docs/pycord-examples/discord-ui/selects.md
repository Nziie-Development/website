---
title: Selects
description: Discord selects (dropdowns) in Pycord
---

I recommend [subclassing](../subclassing) here!

```py
import discord
from discord.ext import commands

class Select(discord.ui.View):
  def __init__(self, author: discord.User):
    self.author = author # this is what you will set when defining the view in your other code: this user object that is the person that invoked the command or event and that person will be the only one confirming/canceling
  async def interaction_check(self, interaction): # check if the interaction user is the same as the command author
    if interaction.user != self.author:
      await interaction.response.send_message('This interaction is not for you!', ephemeral=True)
      return False
    return True

  @discord.ui.select(placeholder="Select color...", options=[discord.SelectOption(label="Red", emoji="🔴", description="The color red"), discord.SelectOption(label="Green", emoji="🟢", description="The color green"), discord.SelectOption(label="Blue", emoji="🔵", description="The color blue")])
  async def select_callback(self, select, interaction):
    await interaction.response.send_message(f"Your favorite color is **{select.values[0].label}**!", ephemeral=True)

bot = commands.Bot(command_prefix="!")

@bot.command()
async def color(ctx):
  view = Select(author=ctx.author)
  await ctx.send("Select your favorite color from the dropdown below!", view=view)
```

<div className="box blurple no-background">
<div className="title">
Helpful Documentation
</div>
<li><a href="https://docs.pycord.dev/en/master/api.html#discord.ui.Select" className="discord-link">Selects Documentation</a></li>
<li><a href="https://docs.pycord.dev/en/master/api.html#discord.ui.View" className="discord-link">View Documentation</a></li>
</div>