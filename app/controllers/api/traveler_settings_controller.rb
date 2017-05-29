class Api::TravelerSettingsController < ApplicationController

  def create
    @settings = TravelerSettings.new(settings_params)
    
    if @settings.save
      render('api/users/show')
    else
      render json: @settings.errors.full_messages
    end
  end

  def update

  end

  private

  def settings_params
    params.require(:traveler_settings).permit(:location, :user_id)
  end

end
