# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Job.delete_all

User.create(
  {
    first_name: 'Jason',
    last_name: 'Loblein',
    email: 'jason@loblein.com',
    password: 'password',
    employer: false
  }
)

Job.create(
  {
    user_id: 33,
    title: 'dishwasher',
    description: 'I need a dishwasher who knows how to wash dishes',
    status: 'open',
    rate: 10.00
  }
)

9.times do |job|
  title = Faker::Job.title,
  user_id = Faker::Number.digit,
  description = Faker::Lorem.paragraph,
  Job.create!(
    title: title,
    user_id: user_id,
    description: description,
    status: 'open',
    rate: 10.00
  )
end
