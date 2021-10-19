export const fetchDmChannels = () => (
    $.ajax({
        url: `/api/dm_channels`
    })
)

export const createDmChannel = dm_channel => (
    $.ajax({
        url: '/api/dm_channels',
        method: 'POST',
        data: { dm_channel }
    })
)

export const deleteDmChannel = dmChannelId => (
    $.ajax({
        method: "DELETE",
        url: `/api/dm_channels/${dmChannelId}`
    })
)