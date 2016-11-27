require 'pry'


puts "texas holdem"

# deck components
cards  = [2,3,4,5,6,7,8,9,10,"Jack","Queen","King", "Ace"]
suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
deck = []

# create deck
suits.each do |suit|
  cards.each do |card|
    deck.push("#{card} of #{suit}")
  end
end

# shuffle deck
deck = deck.shuffle


# Get number of players
puts "enter number of players (2-8):"
players = gets.to_i
puts "Dealing #{players} hands... "
puts ""

#hand details
flop = []
turn = ""
river = ""
player_hand = []

#deal cards
players.times do |player|
  puts "Player #{player}:"
  player_hand[player] = (deck.shift(2))
  puts player_hand[player]
  puts ""
end

# community cards
turn = deck.shift
river = deck.shift
puts "Turn: #{turn}"
puts "River: #{river}"

puts "Flop: "
3.times do |f|
  flop[f] = deck.shift(1)
  puts flop[f]
end
