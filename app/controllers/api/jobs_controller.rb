class Api::JobsController < ApplicationController

  def create
    @job = Job.new(job_params)

    if @job.save

    else

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
    params.require(:job).permit(:title, :description, :rate)
  end

end