class VolunteersController < ApplicationController

    def index
        volunteers = Volunteer.all
        render json: volunteers
    end

    def show
        volunteer = Volunteer.find(params[:id])
        render json: volunteer
    end

    def create
        volunteer = Volunteer.create(volunteer_params)
        render json: volunteer
    end

    def update
        volunteer = Volunteer.find(params[:id])
        volunteer.update(volunteer_params)
        render json: volunteer
    end

    def destroy
        volunteer = Volunteer.find(params[:id])
        volunteer.destroy
        render json: {error: "Your account has been deleted"}
    end

    private
    def volunteer_params
        params.require(:volunteer).permit(:name, :username, :age, :phone)
    end
    
end
