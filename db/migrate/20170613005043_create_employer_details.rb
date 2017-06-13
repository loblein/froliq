class CreateEmployerDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :employer_details do |t|
      t.integer :user_id, null: false
      t.string :location
      t.text :background_info
      t.timestamps
    end
    add_index :employer_details, :user_id
  end
end
