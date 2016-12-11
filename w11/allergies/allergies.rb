require 'pry'

class Allergies

  def initialize(score)
    @score = score
    @item_values = {
      "eggs" => 1,
      "peanuts"=> 2,
      "shellfish"=> 4,
      "strawberries" => 8,
      "tomatoes" => 16,
      "chocolate"=> 32,
      "pollen"=> 64,
      "cats"=> 128
    }
    @allergies = []
  end

  def allergic_to?(food_item)
    if !@item_values[food_item]
      return "not a valid food item"
    end
    if @score > @item_values[food_item]
      return true
    else
      return false
    end
  end

  def list
    @item_values.each do |key, aller_val|
      if @score > aller_val
        @allergies.push(key)
      end
    end
    return @allergies
  end

end

allergies = Allergies.new(34)
binding.pry

# symbols use less memory than strings as keys. Access a hash using its key must take into account symbol or string.  Symbols assume will not change. therfore can use less memory.



# # Allergies
#
# An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
#
# The list of items (and their value) that were tested are:
#
# * eggs (1)
# * peanuts (2)
# * shellfish (4)
# * strawberries (8)
# * tomatoes (16)
# * chocolate (32)
# * pollen (64)
# * cats (128)
#
# So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
#
# Write a program that, given a person's score can tell them
#
# a) whether or not they're allergic to a given item, and
# b) the full list of allergies.
#
# ```ruby
# allergies = Allergies.new(34)
# allergies.allergic_to?('chocolate')
# => true
# allergies.allergic_to?('cats')
# => false
# allergies.list
# => ['peanuts', 'chocolate']
# ```
