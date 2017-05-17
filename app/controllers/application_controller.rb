class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    user = User.find_by(session_token: session[:session_token])
    return user || nil
  end

  def logged_in?
    current_user != nil
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout()
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
