import { RECEIVE_DIRECT_MESSAGE, RECEIVE_DIRECT_MESSAGES, REMOVE_DIRECT_MESSAGE } from "../actions/direct_message_actions";

const directMessagesReducer = (state = {}, action) => {
    Object.freeze(state)
    let next = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_DIRECT_MESSAGE:
            next[action.message.id] = action.message
            return next 
        case RECEIVE_DIRECT_MESSAGES:
            return action.messages 
        case REMOVE_DIRECT_MESSAGE:
            delete next[action.messageId]
            return next 
        default:
            return state 
    }
}

export default directMessagesReducer