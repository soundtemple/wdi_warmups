require 'pry'

class Say

  def initialize
    @convert = []
    @result = ''
  end

  def self.in_english(num)
    int1 = ''
    int2 = ''
    @convert = num.to_s.split('')
    @char1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    @char2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    # raise ArgumentError.new('Number must be between 0 & 100') unless self.valid?

    if num > 99
      return puts "Too hi for me to convert"
    end
    if num < 0
      return puts "Too low for me to convert"
    end

    if num < 20
      @result = @char1[num]
      puts 'Number ' + num.to_s + ' said in english = ' + @result
    end

    if num >= 20
      int2 = @char1[@convert[1].to_i]
      int1 = @char2[@convert[0].to_i - 2]
      @result = int1 + "-" + int2
      puts 'Number ' + num.to_s + ' said in english = ' + @result
    end
  end

  # def valid?
  #   self >=0 && self <= 99
  # end

end



Say.in_english(1)
Say.in_english(9)
Say.in_english(13)
Say.in_english(19)
Say.in_english(24)
Say.in_english(56)
Say.in_english(63)
Say.in_english(88)
Say.in_english(99)
Say.in_english(150)
Say.in_english(-34)



# ## Say it in English

#
# Write a program that will take a number from 0 to 99 and spell out that number in English.
#
# In other words, if the input to the program is `22`, then the output should be `'twenty-two'`
#
# e.g.
#
# ```ruby
# Say.new(22).in_english
# ```
#
# ```ruby
# Say.new(-1).in_english
# # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
# ```
#
# The program must also report any values that are out of range.
#
# Some good test cases for this program are:
#
# * 0
# * 14
# * 50
# * 98
# * -1
# * 100
#
# ## Extensions
#
# Re-write the method for the Fixnum class.
