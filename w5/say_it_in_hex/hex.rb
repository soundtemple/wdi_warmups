require 'pry'

class Hex_convert

  def initialize
    @result = []
  end

  def self.to_words(num)
    hex1 = ''
    hex2 = ''
    hex3 = ''
    hex4 = ''
    dash1 = ''
    dash2 = ''
    bitey = ''
    @lookup = ['0', '1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    @char1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ayee', 'bee', 'cee', 'dee', 'eee', 'eff']
    @char2 = ['bitey', 'onetee', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'atta', 'bibbity', 'city', 'dickety', 'ebbity', 'fleventy']
    if num.length > 6
      return puts "Too long for me to convert"
    end
    if num.length < 3
      return puts "Too short for me to convert"
    end

    # remove 0x from input
    num = num[2..-1]

    hex1 = @char1[@lookup.index(num[-1])]
    if num.length > 1
      hex2 = @char2[@lookup.index(num[-2])]
      dash1 = '-'
    end
    if num.length > 2
      hex3 = @char1[@lookup.index(num[-3])]
      bitey = ' bitey '
    end
    if num.length > 3
      hex4 = @char2[@lookup.index(num[-4])]
      dash2 = '-'
    end

    puts 'Number said in hex = ' + hex4 + dash2 + hex3 + bitey + hex2 + dash1 + hex1

  end


end



Hex_convert.to_words('0xF5')
Hex_convert.to_words('0xB3')
Hex_convert.to_words('0xE4')
Hex_convert.to_words('0xBBBB')
Hex_convert.to_words('0xA1C9')
Hex_convert.to_words('0xA1C9FFFF')
Hex_convert.to_words('0x')
Hex_convert.to_words('0xED3')
Hex_convert.to_words('0xF')




# ## Say it in Hex

#
# ### The hexidecimal pronunciation rules:
# HEX PLACE VALUE	WORD
# 0xA0	“Atta”
# 0xB0	“Bibbity”
# 0xC0	“City”
# 0xD0	“Dickety”
# 0xE0	“Ebbity”
# 0xF0	“Fleventy”
# 0xA000	"Atta-bitey"
# 0xB000	"Bibbity-bitey"
# 0xC000	"City-bitey"
# 0xD000	"Dickety-bitey"
# 0xE000	"Ebbity-bitey"
# 0xF000	"Fleventy-bitey"
# Combinations like 0xABCD are then spelled out "atta-bee bitey city-dee".
# For this challenge you'll be given some hex strings and asked to pronounce them.
# Input Description
#
# You'll be given a list of hex values, one per line.
#
# ### Examples:
# 0xF5
# 0xB3
# 0xE4
# 0xBBBB
# 0xA0C9
# Output Description
#
# Your program should emit the pronounced hex.
#
# ### Examples from above:
# 0xF5 "fleventy-five"
# 0xB3 “bibbity-three”
# 0xE4 “ebbity-four”
# 0xBBBB “bibbity-bee bitey bibbity-bee”
# 0xA0C9 “atta-bitey city-nine”
