class Api::DmChannelsController < ApplicationController

    def index 
        @dmChannels = (DmChannel.where(user1_id: current_user.id)).or(DmChannel.where(user2_id: current_user.id))
        render "api/dm_channels/index"
        # if !@dmChannels 
        #     @dmChannels = DmChannel.where(user2_id: current_user.id)
        #     render "/api/dm_channels/index"
        # else
        #     render "/api/dm_channels/index"
        # end
    end

    def create 
        @dmChannels = DmChannel.new(dm_channel_params)
        if @dmChannels.save 
            render "api/dm_channels/show"
        end
    end

    def show 
        @dmChannels = DmChannel.where(user1_id: current_user.id) || DmChannel.where(user2_id: current_user.id)
        render "api/dm_channels/show"
    end

    private
    def dm_channel_params
        params.require(:dm_channel).permit(:user1_id, :user2_id)
    end
end