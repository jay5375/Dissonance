import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";

const serversReducer = (state = {}, action) => {
    Object.freeze(state)
    let next = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers
        case RECEIVE_SERVER:
            next[action.server.id] = action.server
            return next
        case REMOVE_SERVER:
            delete next[action.server.id]
            return next
        default:
            return state
    }
}

export default serversReducer