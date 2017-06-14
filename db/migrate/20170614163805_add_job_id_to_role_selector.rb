class AddJobIdToRoleSelector < ActiveRecord::Migration[5.0]
  def change
    add_column :role_selectors, :job_id, :integer
  end
end
