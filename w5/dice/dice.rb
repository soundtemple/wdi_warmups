require 'pry'


class Dice

  def self.rolls(num=1)
    if num == 1
      roll = rand(1..6)
      p "You rolled a #{roll}"
      return roll
    end
    @roll_count = 0
    @roll_list = []
    while @roll_count < num
      roll = rand(1..6)
      p " ====="
      if roll == 1
        p "|     |"
        p "|  *  |"
        p "|     |"
      elsif roll == 2
        p "|  *  |"
        p "|     |"
        p "|  *  |"
      elsif roll == 3
        p "|*    |"
        p "| *   |"
        p "|  *  |"
      elsif roll == 4
        p "| * * |"
        p "|     |"
        p "| * * |"
      elsif roll == 5
        p "| * * |"
        p "|  *  |"
        p "| * * |"
      elsif roll == 6
        p "| * * |"
        p "| * * |"
        p "| * * |"
      end
      p " ====="

      @roll_list.push(roll)
      @roll_count+=1
    end
    p "You rolled #{@roll_list}"

  end


  def self.sum
    @sum = 0
    @roll_list.each do |roll_value|
      @sum += roll_value
    end
    p "Sum of #{@roll_list} = #{@sum}"
    
  end
end





# r1 = Dice.new
Dice.rolls(5).sum
# r1.rolls






#
# def initialize
#   @rolls_to_do = rolls
#   @roll_list = []
#   @roll_count = 0
#   return roll
# end
#
# def rolls
#   while @roll_count < @rolls_to_do
#   roll = rand(1..6)
#   @roll_list.push(roll)
#   @roll_count+=1
#   end
#   return @roll_list
# end





#   # Dice
#
# Write a program using classes to generate a standard dice roll.
#
# ```
# Dice.roll
# # => 6
# ```
# It should give you a different result each time.
# ```
# Dice.roll
# # => 5
# Dice.roll
# # => 2
# ```
#
# When you pass in a number, it rolls the dice that many times, and returns you the array of rolled dice
# ```
# Dice.roll(3)
# # => [2,5,1]
# ```
#
# ## Extension
#
# 1. Write a method called sum you can chain directly after `Dice.roll(n)`, and will return you the dice and the total, like so:
#
# ```
# Dice.roll(5).sum
# # => [[6,6,5,5], 22]
# ```
#
# At first you will get a `NoMethodError` for *a certain ruby class*.
#
# How do you fix this?
#
# Why do you get a NoMethodError on that class instead of the class you wrote?
#
#
# 2. Display die faces after rolling.
#
#
# ```
# ________
# | *  * |
# | *  * |
# ________
# ```
