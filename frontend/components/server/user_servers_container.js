import { connect } from "react-redux";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import { fetchChannels, createChannel, updateChannel, deleteChannel } from "../../actions/channel_actions";
import { createUserServer, deleteUserServer, unjoinedUserServers} from "../../actions/users_servers_actions";
import UserServers from './user_servers';
import { logout, updateUser } from "../../actions/session_actions";


const mSTP= ( state, ownProps ) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        unjoinedServers: state.entities.unjoinedServers,
        path: ownProps.match.url
    }
}

const mDTP = dispatch => {
    return {
        fetchUserServers: userId => dispatch(fetchUserServers(userId)),  
        createServer: server => dispatch(createServer(server)),
        updateServer: server => dispatch(updateServer(server)),
        deleteServer: server => dispatch(deleteServer(server)),
        logout: () => dispatch(logout()),
        fetchChannels: () => dispatch(fetchChannels()),
        createChannel: (channel, server) => dispatch(createChannel(channel, server)),
        updateChannel: channel => dispatch(updateChannel(channel)),
        deleteChannel: channel => dispatch(deleteChannel(channel)),
        createUserServer: userServer => dispatch(createUserServer(userServer)),
        deleteUserServer: userServer => dispatch(deleteUserServer(userServer)),
        unjoinedUserServers: currentUser => dispatch(unjoinedUserServers(currentUser)),
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mSTP, mDTP)(UserServers)