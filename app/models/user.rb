class User < ApplicationRecord

  validates :email,
    :password_digest,
    :session_token,
    :first_name,
    :last_name,
    presence: true
  validates_inclusion_of :employer, in: [true, false]
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  after_initialize :ensure_session_token

  attr_reader :password

  has_one :employer_setting
  has_one :biography
  has_many :jobs

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return @user if @user && @user.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
