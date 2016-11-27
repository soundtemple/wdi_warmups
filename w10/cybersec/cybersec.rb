require 'pry'


cybersec = {
   'Alica Brereton':[
      {
         product:'Marijuana',
         unitPrice:'9.18',
         units:'50',
         totalPrice:'459.00'
      }
   ],
   'William Kotai':[
      {
         product:'ecstasy',
         unitPrice:'19.12',
         units:'20',
         totalPrice:'382.40'
      }
   ],
   'Joel Forro':[
      {
         product:'heroin',
         unitPrice:'91.16',
         units:'5',
         totalPrice:'455.80'
      },
      {
         product:'ecstasy',
         unitPrice:'19.12',
         units:'10',
         totalPrice:'191.20'
      }
   ],
   'David Ernest':[
      {
         product:'Methamphetamine',
         unitPrice:'108.78',
         units:'5',
         totalPrice:'543.90'
      },
      {
         product:'cocaine',
         unitPrice:'80',
         units:'2',
         totalPrice:'160.00'
      }
   ],
   'Gabriella Hyde':[
      {
         product:'Marijuana',
         unitPrice:'9.18',
         units:'10',
         totalPrice:'91.80'
      },
      {
         product:'Methamphetamine',
         unitPrice:'108.78',
         units:'8',
         totalPrice:'870.24'
      }
   ]
}


drug = []
hash = {}

cybersec.keys.each do |customer|
  cybersec[customer].each do |data|
    data.keys.each do |cost_qty|
       drug.push(data[cost_qty])
       hash
    end
    puts "#{customer}, #{drug[0]}, #{drug[1]}, #{drug[2]}"
  end

  drug = []
end




# # Cybersec

# # customer,product,cost per unit,units
# Alica Brereton,Marijuana,9.18,50
# William Kotai,ecstasy,19.12,20
# Joel Forro,heroin,91.16,5
# David Ernest,Methamphetamine,108.78,5
# David Ernest,cocaine,80,2
# Joel Forro,ecstasy,19.12,10
# Gabriella Hyde,Marijuana,9.18,10
# Gabriella Hyde,Methamphetamine,108.78,8
#
# The 'penetration testing' team have obtained a file from a suspect's private machine... and the information is incriminating! The only problem is... your tracking software only accepts a particular format. Take the compromised file, and turn it into a format for your backend to process it.
#
# sample output:
#
# ```javascript
# {
#    'Alica Brereton':[
#       {
#          product:'Marijuana',
#          unitPrice:'9.18',
#          units:'50',
#          totalPrice:'459.00'
#       }
#    ],
#    'William Kotai':[
#       {
#          product:'ecstasy',
#          unitPrice:'19.12',
#          units:'20',
#          totalPrice:'382.40'
#       }
#    ],
#    'Joel Forro':[
#       {
#          product:'heroin',
#          unitPrice:'91.16',
#          units:'5',
#          totalPrice:'455.80'
#       },
#       {
#          product:'ecstasy',
#          unitPrice:'19.12',
#          units:'10',
#          totalPrice:'191.20'
#       }
#    ],
#    'David Ernest':[
#       {
#          product:'Methamphetamine',
#          unitPrice:'108.78',
#          units:'5',
#          totalPrice:'543.90'
#       },
#       {
#          product:'cocaine',
#          unitPrice:'80',
#          units:'2',
#          totalPrice:'160.00'
#       }
#    ],
#    'Gabriella Hyde':[
#       {
#          product:'Marijuana',
#          unitPrice:'9.18',
#          units:'10',
#          totalPrice:'91.80'
#       },
#       {
#          product:'Methamphetamine',
#          unitPrice:'108.78',
#          units:'8',
#          totalPrice:'870.24'
#       }
#    ]
# }
# ```
