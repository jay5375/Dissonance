import React from 'react';
import { Link } from "react-router-dom";

class Explore extends React.Component {
    constructor(props){
        super(props)

    }

    handleJoinServer(server){
        console.log(server)
        return e => {
            e.preventDefault()
            this.props.createUserServer(server.id)
            this.props.history.push(`/servers/${server.id}`)
        }
    }



    render(){
        if (this.props.path !== "/servers/explore") return null 
        if (!this.props.unjoinedServers.users_servers) return null 
        return(
            <div>
                {this.props.unjoinedServers.users_servers.map(server => {
                    return (
                        <li key={server.id} className="explore">
                            <p>{server.name}</p>
                            <button onClick={this.handleJoinServer(server)} className="explore-button">Join Server</button>
                        </li>
                    )
                })}
            </div>
            
        )
    }


}

export default Explore 