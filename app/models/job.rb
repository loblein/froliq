class Job < ApplicationRecord

  belongs_to :user, dependent: :destroy
  has_one :category_selector

  validates :title, :description, :rate, :location, presence: true, allow_blank: false
  validates_numericality_of :rate

  def self.in_range(location)
    self.where("location == ?", location)
  end

end
