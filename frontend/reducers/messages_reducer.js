import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {

    Object.freeze(state)
    let next = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_MESSAGE:
            next[action.message.id] = action.message
            return next 
        case RECEIVE_MESSAGES:
            return action.messages 
        case REMOVE_MESSAGE:
            delete next[action.messageId]
            return next 
        default:
            return state
    }
}

export default messagesReducer