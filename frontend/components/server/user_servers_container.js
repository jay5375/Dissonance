import { connect } from "react-redux";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import { fetchChannels, createChannel, updateChannel, deleteChannel } from "../../actions/channel_actions";
import { createUserServer, deleteUserServer, unjoinedUserServers} from "../../actions/users_servers_actions";
import UserServers from './user_servers';
import { logout, updateUser } from "../../actions/session_actions";
import { fetchChannelMessages } from "../../actions/message_actions";
import { createDm, fetchChannelDms } from "../../util/direct_message_util";
import { createDmChannel, fetchDmChannels } from "../../util/dm_channel_util";
import { createMessage } from "../../actions/message_actions";


const mSTP= ( state, ownProps ) => {
    return {
        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[ownProps.match.params.serverId],
        servers: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels),
        messages: Object.values(state.entities.messages),
        directMessages: Object.values(state.entities.directMessages),
        channelId: parseInt(ownProps.match.params.channelId),
        // dmChannels: Object.values(state.entites.dmChannels),
        unjoinedServers: state.entities.unjoinedServers,
        // dmChannel: state.entites.dmChannels[ownProps.match.params.dmChannelId],
        dmChannelId: ownProps.match.params.dmChannelId,
        path: ownProps.match.url,
        params: ownProps.match.params,
        channel: state.entities.channels[ownProps.match.params.channelId]
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
        // fetchChannelDms: dmChannelId => dispatch(dispatch(fetchChannelDms(dmChannelId))),
        // createDm: message => dispatch(createDm(message)),
        // createDmChannel: channel => dispatch(createDmChannel(channel)),
        // fetchDmChannels: userId => dispatch(fetchDmChannels(userId))
    }
}

export default connect(mSTP, mDTP)(UserServers)