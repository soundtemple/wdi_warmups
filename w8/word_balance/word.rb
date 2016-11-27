require 'pry'

alphabet = ('A'..'Z').to_a

val_total_left = 0
val_total_right =0
balanced = false
balance_pt = ''
balance_index = 0

# word = "STEAD"
word = "CONSUBSTANTIATION"
# word = "WRONGHEADED"
word_arr = word.split("")

word_arr.each_with_index do |letter, index|
  increment = 1
  val_total_left = 0
  val_total_right = 0
  # binding.pry
  loop do
    if index-increment >= 0
      letter_left = word_arr[index-increment]
      letter_left_val = alphabet.index(letter_left.upcase) + 1
      val_total_left += increment * letter_left_val
      # binding.pry
    end

    if index+increment < word_arr.length
      letter_right = word_arr[index+increment]
      letter_right_val = alphabet.index(letter_right.upcase) + 1
      val_total_right += increment * letter_right_val
      # binding.pry
    end
    # binding.pry
    increment+=1
    break if letter_left.nil? && letter_right.nil?
  end
  # binding.pry

  if val_total_left == val_total_right
    balanced = true
    balance_pt = word_arr[index]
    balance_index = index
    break
  end
end

p "Balanced: #{balanced}"
p "Point: #{balance_pt}"
p "Index: #{balance_index}"

word_arr.insert(balance_index, " ")
word_arr.insert(balance_index + 2, " ")

p word_arr.join






### Word Balance

#### Special WDI9 Version

# **STRICT PAIR PROGRAMMING WITH PERSON NEXT TO YOU**
#
#
# We're going to balance words on one of the letters in them.
#
# We'll use the position and letter itself to calculate the weight around the balance point. A word can be balanced if the weight on either side of the balance point is equal. Not all words can be balanced, but those that can are interesting for this challenge.
#
# The formula to calculate the weight of the word is to look at the letter position in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight, then multiply that by the distance from the balance point, so the first letter away is multiplied by 1, the second away by 2, etc.
#
# As an example:
#
# ```
# STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))
# ```
#
#
# Input Description - You'll be given a series of English words.
#
# Example: ```STEAD```
#
#
# Output Description - Your program or function should emit the words split by their balance point and the weight on either side of the balance point.
#
# Example: ```S T EAD - 19```
#
# This indicates that the T is the balance point and that the weight on either side is 19.
#
#
#
# #### Try these words...
#
# ```
# CONSUBSTANTIATION
# WRONGHEADED
# UNINTELLIGIBILITY
# SUPERGLUE
# Challenge Output```
#
# #### Output should be...
# ```
# CONSUBST A NTIATION - 456
# WRO N GHEADED - 120
# UNINTELL I GIBILITY - 521
# SUPERGLUE DOES NOT BALANCE```
