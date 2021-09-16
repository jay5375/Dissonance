export const createUserServer = (server) => (
    $.ajax({
        url: '/api/users_servers',
        method: 'POST',
        data: {userServer: {server_id: server}}
    })
)

export const deleteUserServer = userServer => (
    $.ajax({
        url: `/api/users_servers/${users_server.id}`,
        method: 'DELETE',
        data: { userServer }
    })
)

export const unjoinedUserServers = currentUser => (
    $.ajax({
        url: `api/users_servers`,
        data: {currentUser}
    })
)