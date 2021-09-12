import React from "react";
import { Link } from "react-router-dom";
import Server from "./server";
import ServerItem from "./server_item";

class UserServers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            modal: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUser.id)
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
        // if (!this.props.server) return null 
        return (
            <div className="server_sidebar">
                <ul className="server_list">
                    <button className="home"></button>
                    <div className="line"></div>
                    <li>
                        {/* <Link to={`/servers/${this.props.currentUser.id}`}><img src={window.logo} /></Link> */}
                    </li>
                    {this.props.servers.map(server => {
                    return <ServerItem 
                            key={server.id}
                            server={server}
                           />
                    })}
                    <li>
                        <button onClick={this.handleModal(true)} className="server_button">+</button>
                    </li>
                </ul>
                
                <div className={`modal ${this.state.modal ? "display_modal" : "hide_modal" }`}>
                    <form onSubmit={this.handleSubmit}>
                        <p onClick={this.handleModal(false)} className="x">&times;</p>
                        <h1>Create a server</h1>
                        <p>Server Name</p>
                        <input 
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                        />
                        <button>Create</button>
                    </form>
                </div>
                {/* <button onClick={this.props.logout}>Logout</button> */}
            </div>
        )
    }
}

export default UserServers