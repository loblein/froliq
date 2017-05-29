class Api::EmployerSettingsController < ApplicationController

  def create
    @settings = EmployerSettings.new(settings_params)

    if @settings.save
      render('api/users/settings/show')
    else
      render json: @settings.errors.full_messages
    end
  end

  def update

  end

  private

  def settings_params
    params.require(:employer_settings).permit(:location)
  end

end
