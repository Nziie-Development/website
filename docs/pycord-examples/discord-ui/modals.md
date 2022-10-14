---
title: Modals
description: Discord modals (forms) in Pycord
---

I recommend [subclassing](../subclassing) here!

```py title="main.py"
class MyModal(discord.ui.Modal):
  def __init__(self):
    super().__init__(title='Modal Title') # You MUST include a title!
    self.add_item(discord.ui.InputText(label='Long input', style=discord.InputTextStyle.long))
    self.add_item(discord.ui.InputText(label='Short input', style=discord.InputTextStyle.short))
  async def callback(self, interaction):
    embed = discord.Embed(color=discord.Colour.blurple())
    for child in self.children:
      embed.add_field(name=child.label, value=child.value) # this will add an embed field for every input given in the modal
    await interaction.response.send_message(embed=embed, ephemeral=True)

@client.slash_command(name="modal")
async def modal(ctx):
  MODAL = MyModal()
  await ctx.interaction.response.send_modal(MODAL) # you *CAN NOT* send a modal in `ctx.respond`
```

<div className="box blurple no-background">
<div className="title">
Helpful Documentation
</div>
<li><a href="https://docs.pycord.dev/en/master/api.html#discord.ui.Modal" className="discord-link">Modal Documentation</a></li>
<li><a href="https://docs.pycord.dev/en/master/api.html#discord.InteractionResponse.send_modal" className="discord-link"><span className="timestamp">.send_modal</span> Documentation</a></li>
<li><a href="https://docs.pycord.dev/en/master/api.html#discord.ui.InputText" className="discord-link">Text Input Documentation</a></li>
<li><a href="https://docs.pycord.dev/en/master/api.html#discord.InputTextStyle" className="discord-link">Text Input Style Documentation</a></li>
</div>