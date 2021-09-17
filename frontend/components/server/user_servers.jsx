import React from "react";
import { Link } from "react-router-dom";
import ServerItem from "./server_item";
import ServerColumn from "./server_column";
import Channel from "../channel/channel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faSignOutAlt } from  '@fortawesome/free-solid-svg-icons'
import Explore from "./explore";
import Message from "../messages/message"

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
        this.props.fetchUserServers(this.props.currentUser.id)
        this.props.fetchChannels()
        this.props.unjoinedUserServers(this.props.currentUser)
        if (this.props.channelId) this.props.fetchChannelMessages(this.props.channelId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.channelId !== this.props.channelId) this.props.fetchChannelMessages(this.props.channelId)

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
        if (!this.props.servers) return null 
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
                />

                <Message 
                    currentUser={this.props.currentUser}
                    messages={this.props.messages}
                    channelId={this.props.channelId}
                    server={this.props.server}
                    createMessage={this.props.createMessage}
                    
                />
                
                
                <div className={`modal ${this.state.modal ? "display_modal" : "hide_modal" }`}>
                    <form>
                        <h1>Create a server</h1>
                        <p>Server Name</p>
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                        />
                        <div className="createServerButtons">
                            <button onClick={this.handleModal(false)} className="cancel">Cancel</button>
                            <button onClick={this.handleSubmit} className="purple">Create</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default UserServers