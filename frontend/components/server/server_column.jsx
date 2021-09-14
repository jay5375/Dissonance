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
                            <i><FontAwesomeIcon icon={faAngleDown} onClick={this.handleServerMenu(true)}/></i>
                        </div>
                        <div className="channel_banner">
                            <i><FontAwesomeIcon icon={faAngleDown}/></i>
                            <p>Text Channels</p>
                            <p className="add" onClick={this.handleCreateChannel(true)}>+</p>
                        </div>
                        <Channel 
                            currentUser={this.props.currentUser}
                            server={this.props.server}
                            updateChannel={this.props.updateChannel}
                            deleteChannel={this.props.deleteChannel}
                            updateServer={this.props.updateServer}
                        />
                </div>
                <div className={`modal-container ${ this.state.createChannel ? 'display_modal' : 'hide_modal'}`}>
                    <div className={`createChannel`}>
                        <form onSubmit={this.handleChannelSubmit}>
                            <p onClick={this.handleCreateChannel(false)} className="x">&times;</p>
                            <h1>Create Text Channel</h1>
                            <p>Channel Name</p>
                            <input 
                                type='text'
                                value={this.state.name}
                                onChange={this.handleChange("name")}
                            />
                            <button>Create Channel</button>
                        </form>
                    </div>
                </div>
                <div className={`modal-container ${this.state.serverDrop ? 'display_modal' : 'hide_modal'}`}>
                    <div className={`createChannel`}>
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                            placeholder={this.props.server.name}
                        />
                        <button 
                            className={ `${this.props.server.author_id === this.props.currentUser.id ? 'display_modal' : 'hide_modal'}` }
                            onClick={this.handleDeleteServer}
                        >Delete Server</button>
                        <button
                            className={`${this.props.server.author_id === this.props.currentUser.id ? 'display_modal' : 'hide_modal'}`}
                            onClick={this.handleEditServer}
                        >Edit Server</button>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default ServerColumn