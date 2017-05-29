class CreateEmployerSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :employer_settings do |t|
      t.integer :user_id, null: false
      t.string :location
      t.timestamps
    end
    add_index :employer_settings, :user_id
  end
end
