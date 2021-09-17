class Api::MessagesController < ApplicationController

    def index 
        @channel_id = params[:channelId]
        @messages = Message.where(channel_id: params[:channel_id])
        render 'api/messages/index'
    end

    def create 
        @message = Message.new(message_params)
        @message.author_id = current_user.id
        if @message.save 
            render 'api/messages/show'
        end
    end

    def message_params
        params.require(:message).permit(:body, :author_id, :channel_id, :server_id)
    end


end