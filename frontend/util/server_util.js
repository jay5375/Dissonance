export const fetchServers = () => (
    $.ajax({
        url: "/api/servers"
    })
)

export const fetchServer = server => (
    $.ajax({
        url: `/api/servers/${server.id}`
    })
)

export const fetchUserServers = userId => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)

export const createServer = server => (
    $.ajax({
        url: "/api/servers",
        method: 'POST',
        data: { server }
    })
)

export const deleteServer = server => (
    $.ajax({
        url: `/api/servers/${server.id}`,
        method: 'DELETE'
    })
)