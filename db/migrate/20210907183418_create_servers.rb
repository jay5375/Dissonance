class CreateServers < ActiveRecord::Migration[6.1]
  def change
    create_table :servers do |t|
      t.integer :author_id, null: false 
      t.string :name, null: false 
      t.timestamps
    end
    add_index :servers, :author_id
    add_index :servers, :name 
  end
end
