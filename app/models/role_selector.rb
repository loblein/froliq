class RoleSelector < ApplicationRecord

  belongs_to :user, dependent: :destroy
  belongs_to :job

end
