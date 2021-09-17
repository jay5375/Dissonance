@messages.each do |message|
    if message.channel_id = @channel_id.to_i
        json.set! message.id do 
            json.extract! message, :id, :body, :author_id, :channel_id, :server_id, :user, :created_at
        end
    end
end