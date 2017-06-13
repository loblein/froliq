class Biography < ApplicationRecord

  belongs_to :user, dependent: :destroy

end
