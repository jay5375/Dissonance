import { connect } from "react-redux";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import { fetchChannels, createChannel, updateChannel, deleteChannel } from "../../actions/channel_actions";
import { createUserServer, deleteUserServer, unjoinedUserServers} from "../../actions/users_servers_actions";
import UserServers from './user_servers';
import { logout, updateUser } from "../../actions/session_actions";
import { createMessage, fetchChannelMessages } from "../../actions/message_actions";
import { createDm, fetchChannelDms, fetchDirectMessages } from "../../actions/direct_message_actions";
import { createDmChannel, fetchDmChannels } from "../../actions/dm_channel_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mSTP= ( state, ownProps ) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users),
        server: state.entities.servers[ownProps.match.params.serverId],
        servers: Object.values(state.entities.servers),
        channel: state.entities.channels[ownProps.match.params.channelId],
        channels: Object.values(state.entities.channels),
        channelId: parseInt(ownProps.match.params.channelId),
        unjoinedServers: state.entities.unjoinedServers,
        path: ownProps.match.url,
        messages: Object.values(state.entities.messages),
        params: ownProps.match.params,
        directMessages: Object.values(state.entities.directMessages),
        dmChannel: state.entities.dmChannels[ownProps.match.params.dmChannelId],
        dmChannelId: ownProps.match.params.dmChannelId,
        dmChannels: Object.values(state.entities.dmChannels)
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
        createMessage: message => dispatch(createMessage(message)),
        fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId)),
        updateUser: user => dispatch(updateUser(user)),
        fetchDmChannels: () => dispatch(fetchDmChannels()),
        createDmChannel: dmChannel => dispatch(createDmChannel(dmChannel)),
        // fetchDms: dmChannelId => dispatch(fetchDirectMessages(dmChannelId)),
        createDm: message => dispatch(createDm(message)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchChannelDms: dmChannelId => dispatch(fetchChannelDms(dmChannelId))
    }
}

export default connect(mSTP, mDTP)(UserServers)