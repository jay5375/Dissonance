@dmChannels.each do |dmChannel|
    json.set! dmChannel.id do 
        json.extract! dmChannel, :id, :user1, :user2, :messages
    end
end