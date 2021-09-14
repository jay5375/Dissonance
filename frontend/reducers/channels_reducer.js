import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
    Object.freeze(state)
    let next = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CHANNEL:
            next[action.channel.id] = action.channel
            return next 
        case RECEIVE_CHANNELS:
            return action.channels 
        case REMOVE_CHANNEL:
            delete next[action.channelId]
            return next 
        default:
            return state 
    }
}

export default channelsReducer