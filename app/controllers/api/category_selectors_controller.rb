class Api::CategorySelectorsController < ApplicationController

  def create
    @category_selector = CategorySelector.new(category_selector_params)

    if @category_selector.save
      render 'api/category_selectors/show'
    else
      render json: @category_selector.errors.full_messages, status: 422
    end
  end

  def update

  end

  private

  def category_selector_params
    params.require(:category_selector).permit(
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
    :miscellaneous,
    :job_id
    )
  end

end
