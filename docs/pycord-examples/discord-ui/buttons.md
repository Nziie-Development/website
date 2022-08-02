---
title: Buttons
description: Discord Buttons in Pycord
---
I recommend [subclassing](../subclassing) here!

:::note

Credit: https://github.com/Pycord-Development/pycord/blob/master/examples/views/confirm.py

:::


```py
import discord
from discord.ext import commands

class Confirm(discord.ui.View):
  def __init__(self, author: discord.User):
    self.author = author # this is what you will set when defining the view in your other code: this user object that is the person that invoked the command or event and that person will be the only one confirming/canceling
    super().__init__(timeout=30) # you can edit this to whatever you want in SECONDS
    self.value = None
    # AND THEN YOU CAN DO:
    # view = Confirm(author=myauthorobject)
    # await view.wait()
    # if view.value == "Yes":
    # (do something)
    # if view.value == "No":
    # (do something)

    async def on_timeout(self): # if you don't want this, remove it. you will need to do `view.message = myMessageObject` after doing view = Confirm(author=myauthorobject)
      for child in self.children:
        child.disabled = True # making all the components on the message disabled
      await self.message.edit(content="Timeout exceeded!", view=self) # if you want, you can pass in 'embed=None' to make sure that the message edits itself with no embed.

    async def interaction_check(self, interaction: discord.Interaction) -> bool: # you have to retuen this as a bool object or it wont work
      if interaction.user != self.author: # accessing the discord.User object we set earlier
        await interaction.response.send_message("This is not for you.", ephemeral=True)
        return False
      else:
        return True

    @discord.ui.button(label="Yes", style=discord.ButtonStyle.green)
    async def confirm(self, button, interaction):
      for child in self.children:
        child.disabled = True
      self.value = "Yes"
      self.stop()

    @discord.ui.button(label="No", style=discord.ButtonStyle.red)
    async def cancel(self, button, interaction):
      for child in self.children:
        child.disabled = True
      self.value = "No"
      self.stop()
    

# somewhere else

class MyCog(commands.Cog):
  def __init__(self, bot):
    self.bot = bot
  
  @commands.command()
  async def confirm(self, ctx):
    view = Confirm(author=ctx.author) # defining view and setting author
    message = await ctx.send("Would you like to confirm?", view=view)
    view.message = message
    await view.wait()
    if view.value == "Yes":
      await view.message.edit(content=f"You confirmed with {view.value}!", view=view) # we edit view to view because the buttons have been disabled in the class when the user clicks a button
    if view.value == "No":
      await view.message.edit(content=f"You canceled with {view.value}!", view=view)

def setup(bot):
  bot.add_cog(MyCog(bot))

```
