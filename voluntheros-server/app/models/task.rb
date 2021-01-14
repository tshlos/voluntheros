class Task < ApplicationRecord
  belongs_to :volunteer
  belongs_to :elderly, optional: true
end
