export const fetchServerChannels = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}`
    })
)

export const fetchChannel = channelId => (
    $.ajax({
        url: `/api/channels/${channelId}`
    })
)

export const createChannel = (server, channel) => (
    $.ajax({
        url: `/api/servers/${server.id}/channels`,
        method: 'POST',
        data: { channel }
    })
)

export const deleteChannel = channel => (
    $.ajax({
        url: `/api/channels/${channel.id}`
    })
)

export const fetchChannels = () => (
    $.ajax({
        url: `/api/channels`
    })
)