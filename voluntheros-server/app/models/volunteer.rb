class Volunteer < ApplicationRecord
    has_many :tasks
    has_elderlies, through: :tasks
end
