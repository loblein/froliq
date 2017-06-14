class EmployerDetail < ApplicationRecord

  belongs_to :user, dependent: :destroy
  
end
