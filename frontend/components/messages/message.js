import React from 'react';
import MessageInput from './message_input';
import MessageItem from './message_item';

class Message extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps){
        if (prevProps.channelId !== this.props.channelId){
            // this.props.fetchChannelMessages(this.props.channelId)
        }
    }

    render() {
        if (!this.props.server) return null;
        if (!this.props.channel) return null;
        return (
            <div className="message-input">
                <div className="channel-banner">
                    <h1>
                        # {this.props.channel.name}
                    </h1>
                </div>
                <ul className="color">
                    {this.props.messages.reverse().map(message => {
                        return <MessageItem 
                                    key={message.id}
                                    message={message}
                                    currentUser={this.props.currentUser}
                        />
                    })}
                </ul>
                <MessageInput
                    createMessage={this.props.createMessage}
                    channelId={this.props.channelId}
                    serverId={this.props.server.id}
                    path={this.props.path}
                    fetchChannelMessages={this.props.fetchChannelMessages}
                />
            </div>
            
        )
    }
}

export default Message 