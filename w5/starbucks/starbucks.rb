require 'pry'
require 'sinatra'
require 'sinatra/reloader'


class Order
  def initialize(name, coffee_type, sugars, size, strength)
    @name = name.gsub(/D/, 'B').gsub(/T/, 'F').gsub(/P/, 'F')
    @coffee_type = coffee_type
    @sugars = sugars
    @size = size
    @strength = strength
    @collected =false
    @extras = []
    @order_time = Time.now.strftime("%H:%M:%S")
    @ready_time = (Time.now + rand(120..300)).strftime("%H:%M:%S")
  end

  def get_order
    order = "#{@name}s, #{@strength}, #{@coffee_type}, #{@size} size, with #{@sugars} sugars."

  end

  def order_time
    @order_time
  end

  def ready_time
    @ready_time
  end

  def uncollected
    @collected
  end

  def collected
    @collected
  end

  def waiting_time
    @waiting
  end

  def add_extra(extra)
    @extras.push(extra)
  end

  def get_name
    @orders.push(item)
  end
end




get '/' do
  erb :index
end

get '/coffee' do
  @@orders = []
  @name = params[:customer_name]
  @coffee_type = params[:coffee_type]
  @sugars = params[:sugars]
  @size = params[:size]
  @strength = params[:strength]
  # binding.pry
  @@orders.push(Order.new(@name, @coffee_type, @sugars, @size, @strength))


  @order_details = @@orders[0].get_order

  erb :coffee

end
