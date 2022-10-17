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

my_car = Car(2000, 'December', 'Lexus')
my_car.start() # >>> 'Vrrroooooooooommmm!!!'
my_car.year_made() # >>> 2022
my_car.show_model() # >>> 'Lexus'
my_car.month_made() # >>> 'December'
my_car.turn_off() # >>> '*Powering down...*'