class Elderly < ApplicationRecord
    has_many :tasks
    has_many :volunteers, through: :tasks
end
