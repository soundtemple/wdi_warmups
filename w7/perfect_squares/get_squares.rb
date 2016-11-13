require 'pry'


#MY SOLUTION
def get_squares(array)
  results = []
  array.each do |number|
    ps_test = Math.sqrt(number)
    if ps_test.modulo(1) == 0
      results.push(number)
    end
  end
  return "Perfect squares in ascending order are #{results.uniq.sort}"
end


# CHAZ's solution
def get_sqrs(arr)
 result = arr.select { |value| Math.sqrt(value) % 1 == 0 }.uniq.sort
end

get_squares([4, 1, 16, 1, 10, 35, 22])
get_sqrs([4, 1, 16, 1, 10, 35, 22])
binding.pry



# ## Ruby Squares!
#
#
#
# A perfect square is defined as a whole number that when square rooted is a whole
# number (such as 1, 4, 9, 16, etc.).
#
# Make a new file called `get_squares.rb`.
#
# Write a method called `get_squares` that takes an argument, an array of numbers. This method will return a new
# array of numbers that qualify as perfect squares from the argument array.
#
# **NOTE:** The returned array of perfect squares should be in ascending order with no duplicates.
#
# ```rb
# get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]
# ```
#
# ### Done?
# Solve it with a JavaScript function!
#
# Store your solution in a new file called `getSquares.js` and run it in the console.
#
# **HINT:** Sorting an array of numbers with `.sort` in JS would produce the following...
#
# ```js
# getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]
# ```
# What's that all about?!?!?!
