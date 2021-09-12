# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User 
    
    has_many :user_servers,
        foreign_key: :server_id,
        class_name: :UserServer

    has_many :users, 
        through: :user_servers,
        source: :user 

    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel
end
