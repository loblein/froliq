class RemoveJobIdFromRoleSelector < ActiveRecord::Migration[5.0]
  def change
    remove_column :role_selectors, :job_id
  end
end
