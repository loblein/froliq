class RoleSelector < ApplicationRecord

  belongs_to :user, dependent: :destroy

end
