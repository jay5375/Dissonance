class DirectMessageChannel < ApplicationCable::Channel 

    def subscribed
        @dmChannel = DmChannel.find_by(id: params[:id])
        stream_for @dmChannel
    end

    def receive(data)
        DirectMessageChannel.broadcast_to(@dmChannel, message: data['message'])
    end
    
end