import { connect } from "react-redux";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import { fetchChannels, createChannel, updateChannel, deleteChannel } from "../../actions/channel_actions";
import UserServers from './user_servers';
import { logout } from "../../actions/session_actions";

const mSTP= ( state, ownProps ) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        // channel: state.entites.channels[ownProps.match.params.channelId]
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
        deleteChannel: channel => dispatch(deleteChannel(channel))
    }
}

export default connect(mSTP, mDTP)(UserServers)