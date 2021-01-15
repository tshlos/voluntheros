class ElderliesController < ApplicationController

    def index
        elderlies = Elderly.all
        render json: elderlies
    end

    def show
        elderly = Elderly.find(params[:id])
        render json: elderly
    end

    def create
        elderly = Elderly.create(elderly_params)
        render json: elderly
    end

    def update
        elderly = Elderly.find(params[:id])
        elderly.update(elderly_params)
        render json: elderly
    end

    def destroy
        elderly = Elderly.find(params[:id])
        elderly.destroy
        render json: {error: "Your account has been deleted"}
    end

    private
    def elderly_params
        params.require(:elderly).permit(:name, :username, :age, :phone, :disability, :housing)
    end
    
end
