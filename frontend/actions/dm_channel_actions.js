import * as DmChannelUtils from "../util/dm_channel_util"

export const RECEIVE_DM_CHANNEL = "RECEIVE_DM_CHANNEL"
export const RECEIVE_DM_CHANNELS = "RECEIVE_DM_CHANNEL"

const receiveDmChannel = channel => {
    return {
        type: RECEIVE_DM_CHANNEL,
        channel 
    }
}

const receiveDmChannels = channels => {
    return {
        type: RECEIVE_DM_CHANNELS,
        channels 
    }
}

export const createDmChannel = dm_channel => dispatch => {
    return DmChannelUtils.createDmChannel(dm_channel)
        .then(channel => dispatch(receiveDmChannel(channel)))
}

export const fetchDmChannels = userId => dispatch => {
    return DmChannelUtils.fetchDmChannels(userId)
        .then(channels => dispatch(receiveDmChannels(channels)))
}