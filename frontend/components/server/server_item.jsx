import React from 'react';
import { Link } from 'react-router-dom';

class ServerItem extends React.Component {
    render() {
        return(
            <li>
                <Link to={`/servers/${this.props.server.id}`}>
                    <button className="server_button">{this.props.server.name[0]}</button>
                </Link>
            </li>
        )
    }
}

export default ServerItem