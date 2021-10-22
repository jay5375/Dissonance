import React from 'react';

class MessageItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="message-item">
                <img src={window.user_logo} className="user-logo"/>
                <div className="message-title">
                    <div className="date">
                        <h3>{this.props.message.user.username}</h3>
                        <p id="date-format">
                            {this.props.message.created_at.slice(5,7)}/
                            {this.props.message.created_at.slice(8,10)}/
                            {this.props.message.created_at.slice(0,4)}/
                            {this.props.message.created_at.slice(11,16)}
                        </p>
                    </div>
                <div className="body">
                    <p>{this.props.message.body}</p>
                </div>
                </div>
            </li>
        )
    }
}

export default MessageItem