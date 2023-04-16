---
slug: python-classes
title: Python Classes & Usages
description: What are Python classes and how do you use them?
authors: nziie
tags: [Guides]
---

![](./assets/car_example.png)

## What are Python classes?
To put it simply, Python classes are like an object constructor or a "*blueprint*" for creating objects. You can also create a class to organize commands or event listeners and load them later using [Pycord](https://pycord.dev) or [discord.js](https://discord.js.org).

## Breakdown
Lets break down a simple class of a **Car**.


So here is our code that we're working with...
```py title="car.py"
class Car:
  # highlight-start
  def __init__(self, year, made, model): # When you use 'Car()' you will pass
    # in these values that are set in the class
    self.year = year
    self.made = made
    self.model = model
  # highlight-end

  def start(self):
    print('Vrrroooooooooommmm!!!')
  
  def turn_off(self):
    print('*Powering down...*')

  def year_made(self):
    return self.year

  def month_made(self):
    return self.made

  def show_model(self):
    return self.model

# highlight-start
my_car = Car(2000, 'December', 'Lexus') # Create the car from the class
# Setting the year to 2000, the month to 'December' and
# and the model to 'Lexus'
# highlight-end
my_car.start() # >>> 'Vrrroooooooooommmm!!!'
my_car.year_made() # >>> 2022
my_car.show_model() # >>> 'Lexus'
my_car.month_made() # >>> 'December'
my_car.turn_off() # >>> '*Powering down...*'
```

The class <span className="timestamp">Car</span> has some functions being <span className="timestamp">start</span>, <span className="timestamp">turn_off</span>, <span className="timestamp">year_made</span>, <span className="timestamp">month_made</span>, and <span className="timestamp">show_model</span>. All of these functions return or print a value from the class, the values being the attributes of the class (<span className="timestamp">year</span>, <span className="timestamp">made</span>, and <span className="timestamp">model</span>). You can access these attributes by doing `car.year`, etc.

If you're using **Pycord** or **discord.py** it would look something like this...

```py title="mycog.py"
import discord
from discord.ext import commands

class MyCog(commands.Cog):
  def __init__(self, bot):
    self.bot = bot # you can access your bot object here
  
  ### stuff ###

def setup(bot):
  bot.add_cog(MyCog(bot))
```

Then in your main.py or bot.py file...
```py title="main.py"
# ...

# if you have your cog file in a 'cogs' folder:
bot.load_extension('cogs.mycog')
# if you don't:
bot.load_extension('mycog')
```

## Functions Setting Attributes
You can even make functions to set attributes within the class.

```py title="car.py"
class Car:
  def __init__(self, year, made, model):
    self.year = year
    self.made = made
    self.model = model

  def start(self):
    print('Vrrroooooooooommmm!!!')
  
  def turn_off(self):
    print('*Powering down...*')

  def year_made(self):
    return self.year

  def month_made(self):
    return self.made

  def show_model(self):
    return self.model

  # highlight-start
  def set_year(self, year):
    self.year = year
    print(f'Set year to: {year}')
  # highlight-end

my_car = Car(2000, 'December', 'Lexus')
# highlight-start
my_car.year_made() # >>> 2000
my_car.set_year(2005) # >>> 'Set year to: 2005'
my_car.year_made() # >>> 2005
# highlight-end
```

<div className="box red animation no-background">
<div className="title">
Warning
</div>
Make sure you have correct syntax in or you will get an error!
</div>
