import * as DmChannelUtils from "../util/dm_channel_util"

export const RECEIVE_DM_CHANNEL = "RECEIVE_DM_CHANNEL"
export const RECEIVE_DM_CHANNELS = "RECEIVE_DM_CHANNELS"
export const REMOVE_DM_CHANNEL = "REMOVE_DM_CHANNEL"


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

const removeDmChannel = dmChannel => ({
    type: REMOVE_DM_CHANNEL,
    dmChannel
})


export const createDmChannel = dmChannel => dispatch => {
    return DmChannelUtils.createDmChannel(dmChannel)
        .then(channel => dispatch(receiveDmChannel(channel)))
}

export const fetchDmChannels = () => dispatch => {
    return DmChannelUtils.fetchDmChannels()
        .then(channels => dispatch(receiveDmChannels(channels)))
}

export const deleteDmChannel = dmChannelId => dispatch => {
    return DmChannelUtils.deleteDmChannel(dmChannelId)
        .then(dmChannel => dispatch(removeDmChannel(dmChannel)))
}