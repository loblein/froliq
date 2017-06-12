class Api::BiographiesController < ApplicationController

  def create

  end

  def update
    @user = current_user
    @biography = @user.biography

    if @biography.update_attributes(biography_params)
      render '/api/users/show'
    else
      render json: @biography.errors.full_messages, status: 422
    end
  end

  private

  def biography_params
    params.require(:biography).permit(:home_town, :personal_info)
  end

end
