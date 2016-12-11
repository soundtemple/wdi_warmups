require 'pry'


def dateConvert(date)
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  # create array separated by input '-'
  date_arr = date.split("-")
  mm = month[date_arr[1].to_i - 1]
  yy = date_arr[0].to_i
  # remove 0 if day less than 10 eg '03'
  dd_arr = date_arr[2].split("")
  if dd_arr[0] == 0
    dd_arr.shift
  end
  # get day number for output. arr back to int 
  dd = dd_arr.join().to_i
  if dd%10 == 1
    suff = 'st'
  elsif dd%10 == 2
    suff = 'nd'
  elsif dd%10 == 3
    suff = 'rd'
  else
    suff = 'th'
  end
  # pre teens
  if dd > 10 && dd < 14
    suff = 'th'
  end

  puts "#{mm} #{dd}#{suff}, #{yy}"

end


dateConvert("2016-01-01")
dateConvert("2016-02-02")
dateConvert("2016-03-03")
dateConvert("2016-04-04")
dateConvert("2016-05-05")
dateConvert("2016-06-10")
dateConvert("2016-07-11")
dateConvert("2016-08-12")
dateConvert("2016-09-13")
dateConvert("2016-10-14")
dateConvert("2016-11-20")
dateConvert("2016-12-21")
dateConvert("2016-01-22")
dateConvert("2016-02-23")
dateConvert("2016-03-24")
dateConvert("2016-04-30")
dateConvert("2016-05-31")



# Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
#
# The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
#
# Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.
#
# Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.
#
# If the range ends in the same month that it begins, do not display the ending year or month.
#
# Examples:
#
# makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
#
# makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
