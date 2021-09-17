import React from 'react';
import { Link } from "react-router-dom";

class Explore extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleJoinServer(server){
        return e => {
            e.preventDefault()
            this.props.createUserServer(server.id)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.history.push(`/servers/${server.id}`)
        }
    }

    componentDidUpdate(){
        // this.props.fetchUserServers(this.props.currentUser.id)
    }



    render(){
        if (this.props.path !== "/servers/explore") return null 
        if (!this.props.unjoinedServers.users_servers) return null 
        return(
            <div className="explore">
                {this.props.unjoinedServers.users_servers.map(server => {
                    return (
                        <div key={server.id} className="unjoined">
                            <p>{server.name}</p>
                            <button onClick={this.handleJoinServer(server)} className="explore-button">Join Server</button>
                        </div>
                    )
                })}
            </div>
            
        )
    }


}

export default Explore 