class Elderly < ApplicationRecord
    has_many :tasks
    has_volunteers, through: :tasks
end
