class AddBusinessNameToEmployerDetails < ActiveRecord::Migration[5.0]
  def change
    add_column :employer_details, :business_name, :string
  end
end
