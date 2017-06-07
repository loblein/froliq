class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :role_selectors do |t|
      t.integer :user_id, null: false
      t.boolean :dishwasher, :default => false
      t.boolean :waiter, :default => false
      t.boolean :cook, :default => false
      t.boolean :laborer, :default => false
      t.boolean :assistant, :default => false
      t.boolean :caretaker, :default => false
      t.boolean :farmer, :default => false
      t.boolean :landscaper, :default => false
      t.boolean :transportation, :default => false
      t.boolean :carpenter, :default => false
      t.boolean :creative, :default => false
      t.boolean :miscellaneous, :default => false
      t.timestamps
    end
    add_index :role_selectors, :user_id
  end
end
