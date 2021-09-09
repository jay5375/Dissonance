import { connect } from "react-redux";
import { deleteServer } from "../../util/server_util";
import Server from './server';

const mSTP= ({ state, ownProps }) => {
    return {
        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[ownProps.match.params.serverId]
    }
}

const mDTP = dispatch => {
    return {
        deleteServer: () => dispatch(deleteServer())
    }
}

export default connect(mSTP, mDTP)(Server)