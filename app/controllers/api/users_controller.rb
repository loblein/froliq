class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :employer, :id)
  end

end
