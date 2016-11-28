require 'pry'


def convert_to_roman(number)
  number_to_convert = number
  roman_1s = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  roman_10s = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'lXX', 'LXXX', 'XC', 'C']
  roman_100s = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']
  result = []

  if number >= 1000
    thousands = number / 1000
    number = number%1000
    thousands.times do
      result << 'M'
    end
  end

  if number >= 100
    one_hundreds = number / 100
    number = number%100
    result.push(roman_100s[one_hundreds - 1])
  end

  if number >= 10
    tens = number / 10
    result.push(roman_10s[tens - 1])
    number = number%10
  end

  if number < 10 && number > 0
    result.push(roman_1s[number - 1])
  end

  result = result.join("")
  return "Given #{number_to_convert}.  Converts to #{result}"
end




binding.pry
convert_to_roman(3564)










# Roman Numerals
#
# The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.
#
# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).
#
# Write a function to convert from normal numbers to Roman Numerals: e.g.
#
# ```
#  1  => I
# 10  => X
#  7  => VII
# ```
#
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
#
# Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
#
# To see this in practice, consider the example of 1990.
#
# In Roman numerals 1990 is MCMXC:
#
# 1000=M
# 900=CM
# 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM
# 8=VIII
#
# See also: http://www.novaroma.org/via_romana/numbers.html
