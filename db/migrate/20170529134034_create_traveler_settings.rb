class CreateTravelerSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :traveler_settings do |t|
      t.integer :user_id, null: false
      t.string :location
      t.timestamps
    end
    add_index :traveler_settings, :user_id
  end
end
