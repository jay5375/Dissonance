# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  server_id  :integer
#
class Message < ApplicationRecord
    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server 

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel 

    belongs_to :user, 
        foreign_key: :author_id,
        class_name: :User
end
