import React from "react";
import { Link } from "react-router-dom";

class DmItem extends React.Component {

    render() {
        let name = ""
        if (this.props.currentUser.id === this.props.dmChannel.user1.id) {
            name = this.props.dmChannel.user2.username
        } else {
            name = this.props.dmChannel.user1.username 
        }
        return (
            <div className="single-channel">
                <Link to={`/channels/@me/${this.props.dmChannel.id}`}>
                    <p>{name}</p>
                </Link>
            </div>
        )
    }
}

export default DmItem