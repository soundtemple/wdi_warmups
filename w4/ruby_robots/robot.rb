class Robot

  def initialize
    @mac_address = get_mac_address
    @name = get_boot_id
    @operations = 0
    @created = created
  end


  def created
    # operations_count
    @created = Time.new
  end

  def get_mac_address
    time = Time.new.to_s.gsub(/[^0-9]/, "")
    id = rand(100-999)
    mac_address = "#{time} - RB#{id}"
  end

  def get_boot_id
    alphabet = ('A'..'Z').to_a
    id_a = alphabet[rand(26)]
    id_b = alphabet[rand(26)]
    id_c = rand(100-999)
    rnd_name = "#{id_a}#{id_b}-#{id_c}"
  end

  def name
    @name
  end

  def reset
    @name = get_boot_id
  end

  def age
    age = Time.new - @created
    mm, ss = age.divmod(60)
    hh, mm = mm.divmod(60)
    dd, hh = hh.divmod(24)
    return "%d days, %d hours, %d minutes and %d seconds" % [dd, hh, mm, ss]
  end


  def operations_count
    # @operations +=1
    @operations = @operations + 1
  end


end
