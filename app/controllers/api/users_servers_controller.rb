class Api::UsersServersController < ApplicationController


    def index 
        @servers = Server.all
        @currentUser = User.find_by(id: params[:currentUser][:id])
        render 'api/users_servers/show'
    end

    def create 
        @user_server = UserServer.new(users_server_params)
        @user_server.user_id = current_user.id
        @user_server.save 
        render 'api/users_servers/index'
    end

    def destroy 
        @user_server = UserServer.find_by(user_id: params[:userServer][:user_id], server_id: params[:users_server][:server_id])
        @user_server.destroy
        render 'api/users_servers/index'
    end

    def users_server_params 
        params.require(:userServer).permit(:user_id, :server_id)
    end

end
