---
title: Economy Bot (Concept)
description: A showcase of my Economy System version 2. Newly and improved customization and economy handler.
sidebar_position: 1
---
# Economy Bot (Concept)
Economy v1 was, *good enough* for how it was. It had a decent money handling system, but what it lacked was customization. It wasn’t really popular because I didn’t showcase it often, as I wasn’t very proud of it. **But oh damn,** __Economy v2__ is the exact opposite of what I just said. 

*You’re in for a wild ride for these release notes*
<iframe src="https://giphy.com/embed/PUBxelwT57jsQ" width="480" height="332" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

## Settings Tree
*Here is a tree diagram of all the settings, their “children” and other stuff related to economy settings.*
- **Global settings**
  - **Currency Name**: name of the currency (e.g. coins)
  - **Currency Emoji**: emoji representing the currency (e.g. :coin:; custom emojis accepted)
  - **Starting amount**: the starting amount users get when they first are registered (when they first use an economy command ~ default: 10)
  - **Maximum Payout:** a random number between 0-this number is chosen for any economy payout, or an event where a user loses money
    - You can double this to do something like a double economy day or anything, up to you!
  - **Robbing:** whether robbing is enabled ("No" by default to disable robbing; you can change the settings for the slash command in your server’s **Integrations** tab to lock it to certain roles if needed)
- **Crimes**
  - **Crime item (object):**
    - **Name:** name of the crime; displayed on the button
    - **Caught Weight:** a number 0-10 (0=never caught 10=always caught; higher the number, the more of a chance a user will get caught while committing a crime)
    - **Ability to die:** Yes or No whether a user can die committing this crime, usually "No", if they don’t any item marked as a "Life saver", they will lose all their items, economy XP, and anything they had in the bank or wallet; **completely restarting**. 
    - **Payout Multiplier:** if the crime was successful, the randomly generated payout will be multiplied by this number for a total payout; for no multiplier set to 0; once decimal value is supported (e.g. 1.5, 2.5, etc.)
    - **Success Messages:** a list of messages (with variables supported) that are randomly chose from if the crime was successful (e.g. "You robbed a bank and got away with {economy.currency_emoji} **{payout.formatted}** {economy.currency_name}!" —> "You robbed a bank and got away with :coin: **1,239** coins!"
    - **Caught Messages:** same as above, but if the user was caught during a crime, the `payout` variable and attributed will be set to 0, since there is no payout; `lost` (without comma) and `lost.formatted` (with comma for thousands) are introduced and valid
- **Items**
  - **Item (represents an item object):**
    - **Name:** name of the item (e.g. banknote)
    - **Description:** description of the item
    - **Type:** type of the item; valid types: bank note (gives bank capacity), life saver (saves someone from dying), coin multiplier item, 
    - **Rarity:** common, rare, super rare, or legendary (determines how often it is given)
- **Searches**
  - **Search place (represents a search place object):**
    - **Name:** name of the place (e.g. pocket)
    - **Chance:** chance type of finding something (low, medium, high)
    - **Possible Items:** items that are possible to find in the spot (coins by default, but can be removed and changed to only items; at least one thing is required for it to be saved)
    - **Payout Multiplier:** if the user found something, the randomly generated payout will be multiplied by this number for a total payout; for no multiplier set to 0; once decimal value is supported (e.g. 1.5, 2.5, etc.)

## Commands
*Here is a list of all the commands in economy. All of these are customizable via the integrations tab*
<span className="mention">/admin general</span> - Manage the general economy settings
<br/>
<span className="mention">/admin crimes</span> - Manage crimes
<br/>
<span className="mention">/admin items</span> - Manage items, custom actions can be defined for each item when it's redeemed (aka the item callback), such as sending a message to a channel, adding a role, removing a role, etc.
<br/>
<span className="mention">/admin shop</span> - Manage the shop, items are able to be added to the shop
<br/>
<span className="mention">/admin accounts &lt;user&gt;</span> - Manage <code>user</code>'s account in a menu; you can reset a user's balance, items, remove items, remove/add coins, and more
<br/>
<span className="mention">/beg</span> - Beg for coins from random bots in the server
<br/>
<span className="mention">/search</span> - Search a spot for items
<br/>
<span className="mention">/crime</span> - Commit a crime
<br/>
<span className="mention">/shop</span> - View the shop and buy items from it in a menu
<br/>
<span className="mention">/trade</span> - Start a trade request with a user
<br/>
<span className="mention">/give</span> - Give coins to a user
<br/>
<span className="mention">/user-settings</span> - Manage your specific user settings
<br/>
<span className="mention">/profile</span> - View your profile, badges, and more
<br/>
<span className="mention">/inventory</span> - See your inventory, shows your items and categories items by type