export const fetchChannelMessages = channelId => (
    $.ajax({
        url: '/api/messages',
        data: { channel_id: channelId }
    })
)

export const createMessage = message => (
    $.ajax({
        url: '/api/messages',
        method: 'POST',
        data: { message }
    })
)

export const deleteMessage = message => (
    $.ajax({
        url: `/api/messages/${message.id}`,
        method: "DELETE"
    })
)
