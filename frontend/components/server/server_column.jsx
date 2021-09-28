import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from  '@fortawesome/free-solid-svg-icons'
import Channel from '../channel/channel';

class ServerColumn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            serverDrop: false,
            createChannel: false
        }
        this.handleCreateChannel = this.handleCreateChannel.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleServerMenu = this.handleServerMenu.bind(this)
        this.handleChannelSubmit = this.handleChannelSubmit.bind(this)
        this.handleDeleteServer = this.handleDeleteServer.bind(this)
        this.handleEditServer = this.handleEditServer.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUser.id)
    }
    

    handleChange(field){
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleServerMenu(bool){
        return e => {
            e.preventDefault()
            this.setState({ serverDrop: bool })
        }
    }

    handleCreateChannel(bool){
        return e => {
            e.preventDefault()
            this.setState({ createChannel: bool })
        }
    }

    handleChannelSubmit(e){
        e.preventDefault
        const channel = {name: this.state.name}
        this.props.createChannel(channel, this.props.server.id)
        this.props.updateServer(this.props.server)
        this.setState({ name: '' })
        this.setState({ createChannel: false })
    }

    handleDeleteServer(e){
        e.preventDefault()
        this.props.deleteServer(this.props.server)
        this.props.history.push("/channels/@me")
        this.setState({ serverDrop: false })
    }

    handleEditServer(e){
        e.preventDefault()
        this.props.updateServer({ name: this.state.name, id: this.props.server.id})
    }


    render(){
        if (!this.props.server) return null 
        return (
            <div>
                <div className="channel_container">
                        <div className="server_menu">
                            <p>{this.props.server.name}</p>
                            <i><FontAwesomeIcon icon={faAngleDown} className={`${this.props.currentUser.id === this.props.server.author_id ? 'display_modal' : 'hide_modal'}`} onClick={this.handleServerMenu(true)}/></i>
                        </div>
                        <div className="channel_banner">
                            <i><FontAwesomeIcon icon={faAngleDown}/></i>
                            <p>TEXT CHANNELS</p>
                            <p className="add" onClick={this.handleCreateChannel(true)}>+</p>
                        </div>
                        <Channel 
                            currentUser={this.props.currentUser}
                            server={this.props.server}
                            updateChannel={this.props.updateChannel}
                            deleteChannel={this.props.deleteChannel}
                            updateServer={this.props.updateServer}
                            channels={this.props.channels}
                        />
                        <div className="username">
                            <h3>{this.props.currentUser.username} # {this.props.currentUser.id}</h3>
                        </div>
                </div>
                
                <div className={`modal-container ${ this.state.createChannel ? 'display_modal' : 'hide_modal'}`}>
                    <div className={`createChannel`}>
                        <form onSubmit={this.handleChannelSubmit}>
                            <h1>Create Text Channel</h1>
                            <p>Channel Name</p>
                            <input 
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange("name")}
                            />
                            <div className="createChannelButtons">
                                <button className="cancel" onClick={this.handleCreateChannel(false)}>Cancel</button>
                                <button className="modalCreateButton">Create Channel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`modal-container ${this.state.serverDrop ? 'display_modal' : 'hide_modal'}`}>
                    <div className={`editDeleteChannel`}>
                        <div className="server-menu-close">
                            <p onClick={this.handleServerMenu(false)}>&times;</p>
                        </div>
                        <h1>Edit Server</h1>
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                            placeholder={this.props.server.name}
                        />
                        <div className="EditServerButtons">
                            <button 
                                className={ `${this.props.server.author_id === this.props.currentUser.id ? 'display_modal' : 'hide_modal'} red` }
                                onClick={this.handleDeleteServer}
                            >Delete Server</button>
                            <button
                                className={`${this.props.server.author_id === this.props.currentUser.id ? 'display_modal' : 'hide_modal'} purple`}
                                onClick={this.handleEditServer}
                            >Edit Server</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default ServerColumn