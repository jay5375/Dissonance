class Api::ChannelsController < ApplicationController

    def index 
        @channels = Channel.all 
        render 'api/channels/index'
    end

    def show 
        @channel = Channel.find_by(id: params[:id]) 
    end

    def create 
        @channel = Channel.new(channel_params)
        @channel.server_id = params[:server_id]
        if @channel.save 
            render 'api/channels/show'
        else
            render json: ['Error'], status: 422
        end
    end

    def update 
        @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
            render 'api/channels/show'
        else
            render json: ['Error'], status: 422
        end
    end

    def destroy 
        @channel = Channel.find_by(id: params[:id])
        @channel.destroy
    end

    def channel_params
        params.require(:channel).permit(:name)
    end
    
end