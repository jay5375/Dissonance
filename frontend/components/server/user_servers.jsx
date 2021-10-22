import React from "react";
import { Link } from "react-router-dom";
import ServerItem from "./server_item";
import ServerColumn from "./server_column";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faSignOutAlt } from  '@fortawesome/free-solid-svg-icons'
import Explore from "./explore";
import Message from "../messages/message"
import DirectMessages from "../messages/direct_messages";
import DirectMessageIndex from "../messages/direct_message_index";

class UserServers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            modal: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount(){
        this.props.fetchAllUsers()
        this.props.fetchUserServers(this.props.currentUser.id)
        this.props.fetchChannels()
        this.props.unjoinedUserServers(this.props.currentUser)
        if (this.props.channelId) {
            this.props.fetchChannelMessages(this.props.channelId)
        }
        if (this.props.dmChannelId) {
            this.props.fetchChannelDms(this.props.dmChannelId)
        }
        this.props.fetchDmChannels()
    }

    componentDidUpdate(prevProps){
        if (this.props.channelId && (prevProps.channelId !== this.props.channelId)) {
            this.props.fetchUserServers(this.props.currentUser.id);            
            this.props.fetchChannels();
            this.props.fetchChannelMessages(this.props.channelId);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createServer(this.state);
        this.setState({name: "",
                       modal: false })
    }

    handleChange(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }
    
    handleModal(bool){
        return e => {
            e.preventDefault()
            this.setState({ modal: bool })
        }
    }

    render() {
        console.log(this.props.dmChannels[0])
        return (
            <div className="server_layout">
                <ul>
                    <Link to={"/channels/@me"}>
                        <button className="home"></button>
                    </Link>
                    <div className="line"></div>
                    {this.props.servers.map(server => {
                    return <ServerItem 
                            key={server.id}
                            server={server}
                            className="server-item"
                           />
                    })}
                    <li>
                        <button onClick={this.handleModal(true)} className="add-server">+</button>
                    </li>
                    <li>
                        <Link to={`/servers/explore`}>
                            <button className="server-item"><FontAwesomeIcon icon={faCompass}/></button>
                        </Link>
                    </li>
                    <div className="settings">
                            <button onClick={this.props.logout} className="server-item"><FontAwesomeIcon icon={faSignOutAlt} /></button>
                    </div>
                </ul>
                
                <ServerColumn
                    currentUser={this.props.currentUser}
                    server={this.props.server}
                    deleteServer={this.props.deleteServer}
                    updateServer={this.props.updateServer}
                    createChannel={this.props.createChannel}
                    updateChannel={this.props.updateChannel}
                    deleteChannel={this.props.deleteChannel}
                    history = {this.props.history}
                    fetchUserServers={this.props.fetchUserServers}
                />
                
                <Explore 
                    path={this.props.path}
                    unjoinedServers={this.props.unjoinedServers}
                    createUserServer={this.props.createUserServer}
                    currentUser={this.props.currentUser}
                    history={this.props.history}
                    fetchUserServers={this.props.fetchUserServers}
                    updateUser={this.props.updateUser}
                    unjoinedUserServers={this.props.unjoinedUserServers}
                />

                <Message 
                    currentUser={this.props.currentUser}
                    messages={this.props.messages}
                    channelId={this.props.channelId}
                    server={this.props.server}
                    createMessage={this.props.createMessage}
                    channel={this.props.channel}
                    path={this.props.path}
                    fetchChannelMessages={this.props.fetchChannelMessages}
                />

                <DirectMessageIndex
                    currentUser={this.props.currentUser}
                    path={this.props.path}
                    dmChannels={this.props.dmChannels}
                    fetchDmChannels={this.props.fetchDmChannels}
                    users={this.props.users}
                    createDmChannel={this.props.createDmChannel}
                    dmChannelId={this.props.dmChannelId}
                    fetchChannelDms={this.props.fetchChannelDms}
                    history={this.props.history}
                    fetchUserServers={this.props.fetchUserServers}
                />
                
                <DirectMessages
                    dmChannel={this.props.dmChannel}
                    currentUser={this.props.currentUser}
                    createDm={this.props.createDm}
                    fetchChannelDms={this.props.fetchChannelDms}
                    directMessages={this.props.directMessages}
                    dmChannels={this.props.dmChannels}
                    match={this.props.match}
                    dmChannelId={this.props.dmChannelId}
                    fetchDmChannels={this.props.fetchDmChannels}
                />
                <div className={`modal-container ${this.state.modal? "display_modal" : "hide_modal"}`}>
                    <div className="createChannel">
                        <form>
                            <p onClick={this.handleModal(false)} id="x">&times;</p>
                            <h1>Create a server</h1>
                            <p>Server Name</p>
                            <input 
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                            />
                            <div className="createServerButtons">
                                <button onClick={this.handleSubmit} className="purple">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserServers