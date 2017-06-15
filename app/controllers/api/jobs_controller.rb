class Api::JobsController < ApplicationController

  def create
    @job = Job.new(job_params)
    @job.user_id = current_user.id

    if @job.save
      render '/api/jobs/show'
    else
      render json: @job.errors.full_messages, status: 422
    end

  end

  def show

  end

  def index
    @jobs = Job.all
  end

  def update

  end

  def destroy

  end

  private

  def job_params
    params.require(:job).permit(:title, :description, :rate, :status, :location)
  end

end
