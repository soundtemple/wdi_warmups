require 'pry'

class Scrabble

  def self.score(word, letter_bonus, word_bonus)
    @word = word
    @letter_bonus = letter_bonus[0].upcase
    @letter_mult = letter_bonus[1].to_i
    @word_bonus = word_bonus
    # convert to caps and create array
    letters = @word.upcase.split('')
    @total = 0
    letters.each do |letter|
      let_mult = letter_mult(letter)
      @total += points[letter] * let_mult
    end
    puts "Score for #{@word} is #{@total}"
    word_mult
  end

  def self.letter_mult(letter)
    if letter == @letter_bonus
      puts "Letter bonus for #{letter} of #{@letter_mult}x"
      return @letter_mult
    else
      return 1
    end
  end

  def self.word_mult
    if @word_bonus > 1
      @total *= @word_bonus
      puts "Score for #{@word} including bonus #{@word_bonus}x is #{@total} "
    end
  end


  def self.points
    {  "A"=>1, "B"=>3, "C"=>3, "D"=>2,
      "E"=>1, "F"=>4, "G"=>2, "H"=>4,
      "I"=>1, "J"=>8, "K"=>5, "L"=>1,
      "M"=>3, "N"=>1, "O"=>1, "P"=>3,
      "Q"=>10, "R"=>1, "S"=>1, "T"=>1,
      "U"=>1, "V"=>4, "W"=>4, "X"=>8,
      "Y"=>4, "Z"=>10
    }
  end
end

Scrabble.score("cabbage",'c2', 1)
Scrabble.score("cabbage",'c3', 2)
Scrabble.score("cabbage",'z1', 3)

# Scrabble Score
#
# Write a program that, given a word, computes the scrabble score for that word.
#
# ```ruby
# Scrabble.score("cabbage")
# # => 14
# ```
#
# Your program should be in a file named `scrabble.rb`.
#
# ## Letter Values
#
# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```
#
# ## Extensions
#
# * You can play a `:double` or a `:triple` letter.
# * You can play a `:double` or a `:triple` word.
