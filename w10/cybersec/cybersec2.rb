require 'pry'


lines = File.readlines('manifest.txt')
@keys = lines.shift.chomp.split(',')
@keys.shift
customers = {}

def product_hash(data)
  product = {}
  for key in @keys
    product[key.to_sym] = data[@keys.index(key)]
  end
  unit_price = data[1].to_f
  units = data[2].to_f
  product[:totalPrice] = (unit_price*units).round(2)
  return product
end

for line in lines
  data = line.chomp.split(',')
  customer = data.shift
  if customers.key?(customer)
    customers[customer].push(product_hash(data))
  else
    customers[customer] = [product_hash(data)]
  end
end


puts customers
