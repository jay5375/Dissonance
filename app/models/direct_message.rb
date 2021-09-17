# == Schema Information
#
# Table name: direct_messages
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  sender_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  dm_channel_id :integer
#
class DirectMessage < ApplicationRecord
    belongs_to :dmchannel,
        foreign_key: :dm_channel_id,
        class_name: :DmChannel

    belongs_to :sender,
        foreign_key: :author_id,
        class_name: :User
end
