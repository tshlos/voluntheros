class Volunteer < ApplicationRecord
    has_many :tasks
    has_many :elderlies, through: :tasks
end
