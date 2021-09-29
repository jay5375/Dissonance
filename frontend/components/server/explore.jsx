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
            this.props.updateUser(this.props.currentUser)
            this.props.fetchUserServers(this.props.currentUser.id)
            this.props.unjoinedUserServers(this.props.currentUser)
            this.props.history.push(`/servers/${server.id}`)
        }
    }

    componentDidMount(){
        this.props.fetchUserServers(this.props.currentUser.id)
    }

    // componentDidUpdate(prevProps){
    //     if ()
    // }



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