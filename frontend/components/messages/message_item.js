import React from 'react';

class MessageItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <li className="message-item">
                <div className="message-body">
                    <p>{this.props.message.user.username}:</p>
                    <p>
                    {this.props.message.body}
                    </p>
                    <p className="date">
                        {this.props.message.created_at.slice(5,7)}/
                        {this.props.message.created_at.slice(8,10)}/
                        {this.props.message.created_at.slice(0,4)}/
                        {this.props.message.created_at.slice(11,16)}
                    </p>
                </div>
            
            </li>
        )
    }
}

export default MessageItem