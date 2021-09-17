class DirectMessageChannel < ApplicationCable::Channel 

    def subscribed
        @DmChannel = DmChannel.find_by(id: params[:id])
        stream_for @DmChannel
    end

    def receive(data)
        DirectMessageChannel.broadcast_to(@DmChannel, message: data['message'])
    end
    
end