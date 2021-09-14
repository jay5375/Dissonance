import * as ChannelUtils from "../util/channel_util"

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"

const receiveChannel = channel => {
    return {
        type: RECEIVE_CHANNEL,
        channel 
    }
}

const receiveChannels = channels => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const removeChannel = channelId => {
    return {
        type: REMOVE_CHANNEL,
        channelId
    }
}

export const fetchChannel = channelId => dispatch => {
    return ChannelUtils.fetchChannel(channelId)
        .then(channel => dispatch(receiveChannel(channel)))
}

export const fetchChannels = () => dispatch => {
    return ChannelUtils.fetchChannels()
        .then(channels => dispatch(receiveChannels(channels)))
}

export const fetchServerChannels = serverId => dispatch => {
    return ChannelUtils.fetchServerChannels(serverId)
        .then(channels => dispatch(receiveChannels(channels)))
}

export const updateChannel = channel => dispatch => {
    return ChannelUtils.updateChannel(channel)
        .then(updated => dispatch(receiveChannel(updated)))
}

export const createChannel = (channel, server) => dispatch => {
    return ChannelUtils.createChannel(channel, server)
        .then(channel => dispatch(receiveChannel(channel)))
}

export const deleteChannel = channel => dispatch => {
    return ChannelUtils.deleteChannel(channel)
        .then(() => dispatch(removeChannel(channel.id)) )
}
