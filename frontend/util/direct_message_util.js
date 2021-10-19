export const fetchDms = dmChannelId => (
    $.ajax({
        url: '/api/direct_messages',
        data: { dmChannelId }
    })
)

export const createDm = message => (
    $.ajax({
        url: '/api/direct_messages',
        method: 'POST',
        data: { directMessage: message }
    })
)

export const deleteDm = messageId => (
    $.ajax({
        url: `/api/direct_messages/${messageId}`,
        method: 'DELETE'
    })
)