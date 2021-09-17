import * as userServersUtils from "../util/users_servers_util"

export const JOIN_SERVER = "JOIN_SERVER"
export const LEAVE_SERVER = "LEAVE_SERVER"
export const UNJOINED_SERVER = "UNJOINED_SERVER"

const joinServer = userServer => {
    return {
        type: JOIN_SERVER,
        userServer
    }
}

const leaveServer = serverId => {
    return {
        type: LEAVE_SERVER,
        serverId
    }
}

const unjoinedServers = servers => {
    return {
        type: UNJOINED_SERVER,
        servers
    }
}


export const unjoinedUserServers = (currentUser) => dispatch => {
    return userServersUtils.unjoinedUserServers(currentUser)
        .then(servers => dispatch(unjoinedServers(servers)))
}

export const createUserServer = (server) => dispatch => {
    return userServersUtils.createUserServer(server)
        .then(userServer => dispatch(joinServer(userServer)))
}

export const deleteUserServer = userServer => dispatch => {
    return userServersUtils.deleteUserServer(userServer)
        .then(() => dispatch(leaveServer(userServer.id)))
}

