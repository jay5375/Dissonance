class Api::DirectMessagesController < ApplicationController

    def index 
        @dms = DirectMessage.where(dm_channel_id: params[:dmChannelId])
        render "api/direct_messages/index"
    end

    def show 
        @direct_message = DirectMessage.find_by(id: params[:id])
        render "api/direct_messages/show"
    end

    def create 
        @dm = DirectMessage.new(direct_message_params)
        if @dm.save 
            render "api/direct_messages/show"
        end
    end

    def update 
        @direct_message = DirectMessage.find_by(id: params[:id])
        @direct_message.update(message_params)
    end

    def destroy 
        @direct_message = DirectMessage.find_by(id: params[:id])
        @direct_message.destroy
    end

    private
    def direct_message_params
        params.require(:directMessage).permit(:body, :sender_id, :dm_channel_id)
    end

end