class Api::DirectMessagesController < ApplicationController

    def index 
        @direct_messages = DirectMessage.all 
        @dmChannel_id = params[:dmChannelId].to_i
        render 'api/direct_messages/index'
    end

    def create 
        @direct_message = DirectMessage.new(direct_message_params)
        if @direct_message.save 
            render 'api/direct_messages/show'
        end
    end

    def destroy 
        @direct_message = DirectMessage.find_by(id: params[:id])
        @direct_message.destroy
    end

    def direct_message_params
        params.require(:message).permit(:body, :sender_id, :dm_channel_id)
    end

end