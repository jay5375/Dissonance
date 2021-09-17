class CreateDmChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :dm_channels do |t|
      t.integer :user1_id, null: false 
      t.integer :user2_id, null: false 
      t.timestamps
    end
    add_column :direct_messages, :dm_channel_id, :integer
    add_index :direct_messages, :dm_channel_id
    remove_column :direct_messages, :receiver_id
    add_index :dm_channels, :user1_id
    add_index :dm_channels, :user2_id
    add_column :messages, :server_id, :integer
    add_index :messages, :server_id
    add_index :messages, :channel_id
    add_index :messages, :author_id
  end
end
