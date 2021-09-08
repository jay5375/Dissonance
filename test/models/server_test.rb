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
require "test_helper"

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
