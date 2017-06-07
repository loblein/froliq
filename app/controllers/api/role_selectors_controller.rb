class Api::RoleSelectorsController < ApplicationController

  def create

  end

  def update
    @role_selector = RoleSelector.find_by user_id: current_user.id

    if @role_selector.update_attributes(role_selector_params)
      render '/api/users/show'
    else
      render json: @role_selector.errors.full_messages, status: 422
    end
  end

  private

  def role_selector_params
    params.require(:role_selector).permit(
    :dishwasher,
    :waiter,
    :cook,
    :laborer,
    :assistant,
    :caretaker,
    :farmer,
    :landscaper,
    :transportation,
    :carpenter,
    :creative,
    :miscellaneous
    )
  end

end
