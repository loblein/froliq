class Job < ApplicationRecord

  belongs_to :user, dependent: :destroy
  has_one :category_selector

  # validates_presence_of :title, :description, :rate
  # after_initialize :ensure_rate_is_valid

  def self.in_range(location)
    self.where("location == ?", location)
  end

  def ensure_rate_is_valid
    raise 'rate is not a valid number' if self.rate !~ /^\s*[+-]?((\d+_?)*\d+(\.(\d+_?)*\d+)?|\.(\d+_?)*\d+)(\s*|([eE][+-]?(\d+_?)*\d+)\s*)$/
  end

  def assign_role_selector(role_selector)
    self.role_selector = role_selector
  end

  def ensure_role_selector_is_somewhat_truthy
    raise 'must choose at least 1 job category' if self.role_selector.all == false
  end

end
