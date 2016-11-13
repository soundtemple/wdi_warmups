require 'pry'

def can_make_word(word)
  letters_found = []
  blocks = [
  ['B','O'],
  ['X','K'],
  ['D','Q'],
  ['C','P'],
  ['N','A'],
  ['G','T'],
  ['R','E'],
  ['T','G'],
  ['Q','D'],
  ['F','S'],
  ['J','W'],
  ['H','U'],
  ['V','I'],
  ['A','N'],
  ['E','R'],
  ['F','S'],
  ['L','Y'],
  ['P','C'],
  ['Z','M']]
  puts "Word to find = #{word}"
  # convert word to test to upcase array so searchable
  word_to_test = word.upcase.chars.to_a
  #serch each letter of word
  word_to_test.each do |letter|
    # search each array in blocks
    blocks.each do |block|
      if block[0].include?(letter)
        letters_found.push(block[0])
        block[0] = '?'
        block[1] = '?'
        break
      elsif block[1].include?(letter)
        letters_found.push(block[1])
        block[0] = '?'
        block[1] = '?'
        break
      end
    end
  end
  letters_found = letters_found.join().to_s
  puts "Letters found #{letters_found}"
  if letters_found == word
    puts "TRUE"
  else
    puts "FALSE"
  end
end

# predicate methods should end with a ? by convention
# can_make_word?

can_make_word("A")
# => true
can_make_word("BARK")
# => true
can_make_word("BOOK")
# => false
can_make_word("TREAT")
# => true
can_make_word("COMMON")
# => false
can_make_word("SQUAD")
# => true
can_make_word("CONFUSE")
# => true
can_make_word("BOUGHT")
# => false


# METHOD
# take word to test
# split to an array so its searchable. make upcase
# each letter of word search each array in blocks
# if letter found make other vaue unavailable
# if all lettters can be found word can be made
# else not possible to make word



# Quiz Letter blocks

## Language: Javascript or Ruby
#
# You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are twenty blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:

# If you test these words, these results will happen:
#
# ```
# can_make_word("A")
# # => true
# can_make_word("BARK")
# # => true
# can_make_word("BOOK")
# # => false
# can_make_word("TREAT")
# # => true
# can_make_word("COMMON")
# # => false
# can_make_word("SQUAD")
# # => true
# can_make_word("CONFUSE")
# # => true
# can_make_word("BOUGHT")
# # => false
# ```
# Write a program in `ruby` that evaluates `can_make_word`
#
# ## Extension
#
# Use the `lots_of_words.txt` file to test your code.
#
# Now order the words that can be made by length.
