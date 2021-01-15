class Task < ApplicationRecord
  belongs_to :elderly
  belongs_to :volunteer, optional: true
end
