require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'


def run_sql(sql)
  db = PG.connect(dbname: 'pokedex')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  @collection = run_sql("select * from pokemon;")
  erb :index
end

get '/new' do
  erb :add_new
end

post '/new' do
  run_sql("INSERT INTO pokemon (species, nickname, level ) VALUES ('#{params[:species]}','#{params[:nickname]}','#{params[:level]}');")

  redirect to '/'
end










# # Pokedex
#
# ![Let me show you them](http://i2.kym-cdn.com/photos/images/newsfeed/000/001/023/4A3WG3NACXH63ZDCNOM4PE2GJIYZNBT7.jpg)
#
# You are Ash Ketchum, and you just lost your pokedex!. How will you appease Oak now? Luckily, you are a web developer in addition to a pokemon master.
#
# Create a sinatra site that will allow you to record the pokemon you capture, and store them in a postgres database.
#
# Here are some instructions to help you get started:
#
# 1. Make a database in postgres called 'pokedex'
# 2. Create a table called pokemon
# 3. Your pokemon table should have species, nickname, and level as available fields. Pick suitable data types for these. eg: `Pikachu, Frank, 32` For a level 32 Pikachu nicknamed Frank.
# 4. Make a sinatra app that has two views, one for viewing current pokemons in the pokedex, and one for recording new ones.
#
# ### Bonus:
#
# Add some additional functionality to your pokedex. Some ideas are being able to release pokemon, or give them new nicknames, or a new view for being able to search pokemans by name/nickname or id!
