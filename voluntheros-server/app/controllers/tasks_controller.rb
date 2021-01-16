class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: tasks
    end

    def show
        task = Task.find(params[:id])
        render json: task
    end

    def create
        task = Task.create(task_params)
        render json: task
    end

    def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
    end

    private
    def task_params
        params.require(:task).permit(:id, :title, :details, :elderly_id, :volunteers_id, :date)
        # in table says volunteers_id remember when fetching as isn't singular
        # pretty sure that volunteers_id isn't necessary but left in for now
    end
end
