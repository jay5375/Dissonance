class ChatChannel < ApplicationCable::Channel

    def subscribed 
        @channel = Channel.find_by(id: params[:id])
        stream_for @channel 
    end

    def receive(data)
        ChatChannel.broadcast_to(@channel, message: data['message'])
    end
end