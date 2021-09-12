import { connect } from "react-redux";
import { createServer, deleteServer, fetchUserServers, updateServer } from "../../actions/server_actions";
import UserServers from './user_servers';
import { logout } from "../../actions/session_actions";

const mSTP= ( state, ownProps ) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        server: state.entities.servers[ownProps.match.params.serverId]
    }
}

const mDTP = dispatch => {
    return {
        fetchUserServers: userId => dispatch(fetchUserServers(userId)),  
        createServer: server => dispatch(createServer(server)),
        updateServer: server => dispatch(updateServer(server)),
        deleteServer: () => dispatch(deleteServer()),
        logout: () => dispatch(logout())
    }
}

export default connect(mSTP, mDTP)(UserServers)