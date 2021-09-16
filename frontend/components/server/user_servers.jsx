import React from "react";
import { Link } from "react-router-dom";
import ServerItem from "./server_item";
import ServerColumn from "./server_column";
import Channel from "../channel/channel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from  '@fortawesome/free-solid-svg-icons'
import Explore from "./explore";

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
                    <button className="home"></button>
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
                />
                
                <Explore 
                    unjoinedServers={this.props.unjoinedServers}
                    createUserServer={this.props.createUserServer}
                    path={this.props.path}
                    currentUser={this.props.currentUser}
                    history={this.props.history}
                />
                
                
                <div className={`modal ${this.state.modal ? "display_modal" : "hide_modal" }`}>
                    <form>
                        <p onClick={this.handleModal(false)} className="x">&times;</p>
                        <h1>Create a server</h1>
                        <p>Server Name</p>
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                        />
                        <button onClick={this.handleSubmit}>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserServers