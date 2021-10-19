import React from "react";
import DirectMessageInput from "./direct_message_input";

class DirectMessages extends React.Component {

    componentDidMount() {
        this.props.fetchDmChannels(this.props.currentUser.id)
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.match.params.dmChannelId !== undefined && prevProps.match.params.dmChannelId !== this.props.match.params.dmChannelId) {
            this.props.fetchChannelDms(this.props.dmChannelId)
        }
        if (this.props.directMessages.length !== prevProps.directMessages.length) {
            this.props.fetchChannelDms(this.props.dmChannelId)
        }
    }

    render() {
       let dm = this.props.dmChannels.find(dmChannel => dmChannel.id === this.props.dmChannelId) 
       if (!dm) return null 
    //    if (!this.props.dmChannels[this.props.dmChannelId]) return null 
    //    const dm = this.props.dmChannels[this.props.dmChannelId]
       if (!this.props.directMessages) return null 
       let name;
       if (dm.user1.id === this.props.currentUser.id) {
           name = dm.user2.username
       } else {
           name = dm.user1.username 
       }
       return (
           <div className="message-input">
               <div className="channel-banner">
                   <h1>{name}</h1>
               </div>
               <ul className="color">
                   {this.props.directMessages.reverse().map(message => {
                       return <li key={message.id} className="message-item">
                               <div className="message-title">
                                    <h3>{message.user.username}</h3>
                                    <p className="date">
                                        {message.created_at.slice(5,7)}/
                                        {message.created_at.slice(8,10)}/
                                        {message.created_at.slice(0,4)} at &nbsp;
                                        {message.created_at.slice(11, 16)}
                                    </p>
                               </div>
                                <div>
                                    <p className="body">{message.body}</p>
                                </div>
                       </li>
                   })}
               </ul>
               <DirectMessageInput
                    currentUser={this.props.currentUser}
                    user={name}
                    createDm={this.props.createDm}
                    dmChannel={this.props.dmChannel}
                    fetchChannelDms={this.props.fetchChannelDms}
               />
           </div>
       )
    }
}

export default DirectMessages