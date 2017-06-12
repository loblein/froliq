class Job < ApplicationRecord

  belongs_to :user

  def self.in_range(location)
    self.where("location == ?", location)
  end

end
