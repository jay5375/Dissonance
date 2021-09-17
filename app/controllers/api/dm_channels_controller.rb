class Api::DmChannelsController < ApplicationController

    def index 
        @user_id = params[:user_id].to_i
        @direct_message_channels = DmChannel.all 
        render 'api/dm_channels/index'
    end

    def create 
        @direct_message_channel = DmChannel.new(dm_channel_params)
        if @direct_message_channel.save 
            render 'api/dm_channels/show'
        end
    end

    def dm_channel_params
        params.require(:dm_channel).permit(:user1_id, :user2_id)
    end
end