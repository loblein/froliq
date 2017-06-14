class CategorySelector < ApplicationRecord

  belongs_to :job, dependent: :destroy

end
