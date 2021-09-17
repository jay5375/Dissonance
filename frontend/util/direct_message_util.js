export const fetchChannelDms = dmChannelId => (
    $.ajax({
        url: '/api/direct_messages',
        data: { dmChannelId }
    })
)

export const createDm = message => (
    $.ajax({
        url: '/api/direct_messages',
        method: 'POST',
        data: { message }
    })
)

export const deleteDm = message => (
    $.ajax({
        url: `/api/direct_messages/${message.id}`,
        method: 'DELETE'
    })
)