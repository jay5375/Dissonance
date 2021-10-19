import { RECEIVE_DM_CHANNEL, RECEIVE_DM_CHANNELS, REMOVE_DM_CHANNEL } from "../actions/dm_channel_actions";

const dmChannelsReducer = (state = {}, action) => {
    Object.freeze(state)
    let next = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_DM_CHANNEL:
            next[action.channel.id] = action.channel 
            return next 
        case RECEIVE_DM_CHANNELS:
            return action.channels 
        case REMOVE_DM_CHANNEL:
            delete next[action.dmChannel.id]
        default:
            return state 
    }
}

export default dmChannelsReducer