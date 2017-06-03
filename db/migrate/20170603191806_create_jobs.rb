class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :status, :default => 'open', null: false
      t.float :rate, default: 10.00
      t.timestamps
    end

    add_index :jobs, :user_id
  end
end
