# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Job.delete_all
User.delete_all

User.create!(
  id: 1,
  first_name: 'Jim',
  last_name: 'Coma',
  email: 'jim@coma.com',
  password: 'password',
  employer: false
)

User.create!(
  id: 2,
  first_name: 'Austin',
  last_name: 'Healey',
  email: 'austin@healey.com',
  password: 'password',
  employer: false
)

User.create!(
  id: 3,
  first_name: 'Terry',
  last_name: 'Fairy',
  email: 'terry@fairy.com',
  password: 'password',
  employer: false
)

User.create!(
  id: 4,
  first_name: 'Mai',
  last_name: 'Thai',
  email: 'mai@thai.com'
  password: 'password',
  employer: true
)

User.create!(
  id: 5,
  first_name: 'Benny',
  last_name: 'Bunnies',
  email: 'benny@bunnies.com',
  password: 'password',
  employer: true,
)

User.create!(
  id: 6,
  first_name: 'Jim',
  last_name: 'Jeffries',
  email: 'jim@jeffries.com'
  password: 'password',
  employer: true
)

EmployerDetail.create!(
  user_id: 4,
  location: 'Portland, OR'
)

EmployerDetail.create!(
  user_id: 5,
  location: 'New York, NY'
)

EmployerDetail.create!(
  user_id: 6,
  location: 'Belfast, ME'
)


# Job.create!(
#   title: 'Farmer Needed',
#   description: 'Come plant me some pertaters. Fancy an iced tea?',
#   rate: 10,
#   user_id: 4,
#   status: 'open',
#   location: 'Portland, OR'
# )
#
# Job.create!(
#   title: 'Dishwasher Needed',
#   description: 'Help! My staff sucks! I need you to come clean this restaurant kitchen ASAP.',
#   rate: 16,
#   user_id: 5,
#   status: 'open',
#   location: 'New York, NY'
# )
#
# Job.create!(
#   title: 'Lawn and Garden',
#   description: 'My weeds be outa control! Looking for someone to do some weedin in a rush.',
#   rate: 12,
#   user_id: 6,
#   status: 'open',
#   location: 'Belfast, ME'
# )
