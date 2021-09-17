@direct_messages.each do |dm|
    if dm.dm_channel_id == @dmChannel_id
        json.set! dm.id do 
            json.extract! dm, :id, :body, :sender_id, :dm_channel_id, :created_at, :author 
        end
    end
end