@messages.each do |message|
    json.set! message.id do 
        json.extract! message, :id, :body, :author_id, :channel_id, :server_id, :user, :created_at
    end
end