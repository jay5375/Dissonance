@user.servers.each do |server|
    json.set! server.id do 
        json.extract! server, :id, :name, :channels, :author_id
    end
end

@user.created_servers.each do |server|
    json.set! server.id do 
        json.extract! server, :id, :name, :channels, :author_id
    end
end