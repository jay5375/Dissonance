@direct_message_channels.each do |dmc|
    if dmc.user1_id == @user_id || dmc.user2_id == @user_id 
        json.set! dmc.id do 
            json.extract! dmc, :id, :user1_id, :user2_id, :user1, :user2, :messages 
        end
    end
end