class CreateDirectMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :direct_messages do |t|
      t.text :body, null: false 
      t.integer :sender_id, null: false 
      t.integer :receiver_id, null: false 
      t.timestamps
    end
    add_index :direct_messages, :sender_id
    add_index :direct_messages, :receiver_id
  end
end
