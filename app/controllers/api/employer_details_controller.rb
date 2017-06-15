class Api::EmployerDetailsController < ApplicationController

  def create
    @employer_detail = EmployerDetail.new(employer_detail_params)

    if @employer_detail.save
      render '/api/users/show'
    else
      render json: @employer_detail.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @employer_detail = @user.employer_detail

    if @employer_detail.update_attributes(employer_detail_params)
      render '/api/users/show'
    else
      render json: @employer_detail.errors.full_messages, status: 422
    end
  end

  private

  def employer_detail_params
    params.require(:employer_detail).permit(:location, :background_info, :business_name)
  end

end
