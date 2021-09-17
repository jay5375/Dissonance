export const createDmChannel = dm_channel => (
    $.ajax({
        url: '/api/dm_channels',
        method: 'POST',
        data: { dm_channel }
    })
)

export const fetchDmChannels = userId => (
    $.ajax({
        url: '/api/dm_channels',
        data: { userId }
    })
)