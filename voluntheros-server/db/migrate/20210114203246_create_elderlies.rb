class CreateElderlies < ActiveRecord::Migration[6.0]
  def change
    create_table :elderlies do |t|
      t.string :name
      t.integer :age
      t.string :phone
      t.string :disability
      t.string :housing

      t.timestamps
    end
  end
end
