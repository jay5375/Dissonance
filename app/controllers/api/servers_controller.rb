class ServersController < ApplicationController

    def index 
        @servers = Server.all 
        render 'api/servers/index'
    end

    def show 
        @server = Server.find_by(id: params[:id])
    end

    def create 
        @server = Server.new(server_params)
        @server.author_id = current_user.id
        if @server.save 
            render 'api/servers/show'
        else
            render 
        end
    end

    def update 
        @server = Server.find_by(id: params[:id])
        if @server.update(server_params)
        else
            render 
        end 
    end

    def destroy 
        @server = Server.find_by(id: params[:id])
        @server.destroy
    end

    def server_params
        params.require(:server).permit(:name)
    end
end