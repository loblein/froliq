class CreateBiographies < ActiveRecord::Migration[5.0]
  def change
    create_table :biographies do |t|
      t.integer :user_id, null: false
      t.text :personal_info
      t.string :home_town
      t.timestamps
    end
    add_index :biographies, :user_id
  end
end
