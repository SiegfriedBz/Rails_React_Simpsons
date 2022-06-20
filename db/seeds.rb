# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

initGifs = [
{title: 'Booty', url: 'https://media.giphy.com/media/s6EYTqTRqujIY/giphy.gif'},
{title: 'DamnIt', url: 'https://media.giphy.com/media/RSOUOj8H9A3Xq/giphy.gif'},
{title: 'RockIt', url: 'https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif'},
{title: 'Lust', url: 'https://media.giphy.com/media/18ANhgTABn04M/giphy.gif'},
{title: 'Vlad', url: 'https://media.giphy.com/media/AUL9fRYuuJQoE/giphy.gif'},
{title: 'Ripper', url: 'https://media.giphy.com/media/asusCNrppiAuc/giphy.gif'},
{title: 'Gatsby', url: 'https://media.giphy.com/media/ZJh42VKmeQ2yY/giphy.gif'},
{title: '66', url: 'https://media.giphy.com/media/f1Gpa9nYrXLfa/giphy.gif'},
{title: 'RedBaron', url: 'https://media.giphy.com/media/13z07NNZofZ78I/giphy.gif'},
{title: 'Brave', url: 'https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif'},
{title: 'Feydeau', url: 'https://media.giphy.com/media/11gC4odpiRKuha/giphy.gif'},
{title: 'Cryptonite', url: 'https://media.giphy.com/media/qhqwBvxNoQSUo/giphy.gif'},
]

puts "Seeding database..."
initGifs.each { | gif | Gif.create({title: gif[:title], url: gif[:url] }) }
puts "Database seeded!"
