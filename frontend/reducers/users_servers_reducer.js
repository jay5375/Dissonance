import { JOIN_SERVER, LEAVE_SERVER, UNJOINED_SERVER } from "../actions/users_servers_actions";

const usersServerReducer = (state = {}, action) => {
    Object.freeze(state)
    let next = Object.assign({}, state)
    switch (action.type) {
        case UNJOINED_SERVER:
            return action.servers
        default:
            return state
    }
}

export default usersServerReducer