# json.extract! user,
#   :id,
#   :email,
#   :first_name,
#   :last_name,
#   :employer


  json.email user.email
  json.first_name user.first_name
  json.last_name user.last_name
  json.id user.id
  json.employer user.employer

  json.biography do
    json.home_town user.biography.home_town
    json.personal_info user.biography.personal_info
  end

  json.role_selector do
    json.dishwasher user.role_selector.dishwasher
    json.waiter user.role_selector.waiter
    json.cook user.role_selector.cook
    json.laborer user.role_selector.laborer
    json.assistant user.role_selector.assistant
    json.caretaker user.role_selector.caretaker
    json.farmer user.role_selector.farmer
    json.landscaper user.role_selector.landscaper
    json.transportation user.role_selector.transportation
    json.carpenter user.role_selector.carpenter
    json.creative user.role_selector.creative
    json.miscellaneous user.role_selector.miscellaneous
  end
