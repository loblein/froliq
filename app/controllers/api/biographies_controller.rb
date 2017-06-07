class Api::BiographiesController < ApplicationController

  def create
    @biography = Biography.new(biography_params)

    if @biography.save
      render 'api/users/show'
    else
      render json: @biography.errors.full_messages, status: 422
    end

  end

  def update
    
  end

  private

  def biography_params
    params.require(:biography).permit(:home_town, :personal_info)
  end

end
