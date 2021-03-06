import * as ServerUtil from '../util/server_util'

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS'
export const RECEIVE_SERVER = 'RECEIVE_SERVER'
export const REMOVE_SERVER = 'REMOVE_SERVER'

const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
})

const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server 
})

const removeServer = server => ({
    type: REMOVE_SERVER,
    server
})

export const fetchServers = () => dispatch => {
    return ServerUtil.fetchServers()
        .then(servers => dispatch(receiveServers(servers)))
}

export const fetchServer = server => dispatch => {
    return ServerUtil.fetchServer(server)
        .then(server => dispatch(receiveServer(server)))
}

export const fetchUserServers = userId => dispatch => {
    return ServerUtil.fetchUserServers(userId)
        .then(servers => dispatch(receiveServers(servers)))
}

export const createServer = server => dispatch => {
    return ServerUtil.createServer(server)
        .then(server => dispatch(receiveServer(server)))
}

export const updateServer = server => dispatch => {
    return ServerUtil.updateServer(server)
        .then(server => dispatch(receiveServer(server)))
}

export const deleteServer = server => dispatch => {
    return ServerUtil.deleteServer(server)
        .then(() => dispatch(removeServer(server)))
}

