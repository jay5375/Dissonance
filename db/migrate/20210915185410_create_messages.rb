class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :body, null: false 
      t.integer :author_id, null: false 
      t.integer :channel_id, null: false 
      t.timestamps
    end
  end
end
