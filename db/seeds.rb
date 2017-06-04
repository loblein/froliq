# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
Job.delete_all

Job.create!(
  title: 'Farmer Needed',
  description: 'Come plant me some pertaters. Fancy an iced tea?',
  rate: 10.00,
  user_id: 19,
  status: 'open'
)

Job.create!(
  title: 'Dishwasher Needed',
  description: 'Help! My staff sucks! I need you to come clean this restaurant kitchen ASAP.',
  rate: 16.00,
  user_id: 19,
  status: 'open'
)

Job.create!(
  title: 'Lawn and Garden',
  description: 'My weeds be outa control! Looking for someone to do some weedin in a rush.',
  rate: 12.00,
  user_id: 19,
  status: 'open'
)
# 99.times do |n|
#   first_name = Faker::Name.first_name,
#   last_name = Faker::Name.last_name,
#   email = `example-#{n+1}@froliq.com`,
#   password = 'password',
#   employer = true
#   User.create(
#     first_name: first_name,
#     last_name: last_name,
#     email: email,
#     password: password,
#     employer: employer
#   )
# end
#
# 10.times do |n|
#   title = Faker::Job.title,
#   user_id = `#{n+16}`,
#   description = Faker::Lorem.paragraph,
#   Job.create(
#     title: title,
#     user_id: user_id,
#     description: description,
#     status: 'open',
#     rate: 10.00
#   )
# end
