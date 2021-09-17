import React from 'react';

class MessageItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="message-item">
                <div className="message-title">
                    <h3>{this.props.message.user.username}</h3>
                    <p className="date">
                        {this.props.message.created_at.slice(5,7)}/
                        {this.props.message.created_at.slice(8,10)}/
                        {this.props.message.created_at.slice(0,4)}/
                        {this.props.message.created_at.slice(11,16)}
                    </p>
                </div>
                <p className="body">
                    {this.props.message.body}
                </p>
            </li>
        )
    }
}

export default MessageItem