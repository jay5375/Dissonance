# == Schema Information
#
# Table name: dm_channels
#
#  id         :bigint           not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class DmChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
